/*global Backbone, _, $ */
'use strict';

var cloud = cloud || {};
var view, collection;

// Model
cloud.BoxModel = Backbone.Model.extend({
});

//Collection
cloud.BoxCollection = Backbone.Collection.extend({
	initialize: function(models, options) {
    	this.id = options.id;
    	window.console.log(this.id);
    	this.url = cloud.CC_URL+'folder/'+this.id;
  	},
	model: cloud.BoxModel,
	// url: cloud.CC_URL+'folder/'+this.id,
	parse: function(response) {
		window.console.log(this.id);
		return response.item_collection.entries;
  	}
});

//Views
cloud.BoxView = Backbone.View.extend({
	initialize: function() {
		this.trigger();
	},
	events : {
            'click': '_onClick'
    },
	trigger: function() {
		$('#loading-indicator').show();
		collection.fetch({
			success: function() {
				cloud.setCollection(collection);
				view.render();
				$('#loading-indicator').hide();
			},
			error: function() {
				$('#loading-indicator').hide();
				window.console.log('Error contacting Box');
			}
		});
	},
	el : '#artifact-list',
	className : 'list-group-item',
	render: function() {
		this.$el.empty();
		collection.each(function(model_element){
			$(new cloud.BoxViewList({model:model_element.toJSON()}).render()).appendTo(this.$el).hide().fadeIn(200);

			//this.$el.append(new cloud.BoxViewList({model:model_element.toJSON()}).render());
		}, this);
		return this;
	},
	_onClick: function(ev) {
		var domObj = $(ev.target);
		collection = new cloud.BoxCollection([], { id: domObj.attr('id') });
		cloud.setCollection(collection);
		view.trigger();
	}
});

cloud.BoxViewList = Backbone.View.extend({
	template : _.template('<a href="#" li class="list-group-item" id = <%= id%>><span class="glyphicon <%= icon %>" style="float:left;width: 30px;"></span><%= name %><%= right_icon%></a>'),
	render: function() {
		if (this.model.type === 'folder') {
			this.model.icon = 'glyphicon-folder-close';
			this.model.right_icon = '<span class="glyphicon glyphicon-chevron-right" style="float:right;width: 20px;"></span>';
		} else {
			this.model.icon = 'glyphicon-file';
			this.model.right_icon = '';
		}
		this.el = this.template(this.model);
        return this.el;
	}
});

collection = new cloud.BoxCollection([], { id: 0 });
view = new cloud.BoxView();
cloud.getCollection = function() { return collection; };
cloud.setCollection = function(x) { collection = x; };

collection.bind('update', function(){
	view.trigger();
});

