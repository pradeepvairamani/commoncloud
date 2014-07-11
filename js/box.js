/*global Backbone, _, $ */
'use strict';

var cloud = cloud || {};
var view, collection;

cloud.BoxModel = Backbone.Model.extend({
});

cloud.BoxCollection = Backbone.Collection.extend({
	model: cloud.BoxModel,
	url: cloud.CC_URL + 'folder/0',
	parse: function(response) {
		return response.item_collection.entries;
  	}
});

cloud.BoxView = Backbone.View.extend({
	initialize: function() {
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
	render : function() {
		collection.each(function(model_element){
			//window.console.log(new cloud.BoxViewList({model:model_element.toJSON()}).render().el);
			this.$el.append(new cloud.BoxViewList({model:model_element.toJSON()}).render().el);
		}, this);
		return this;
	}
});

cloud.BoxViewList = Backbone.View.extend({
	template : _.template('<a href="#" li class="list-group-item"><span class="glyphicon <%= icon %>" style="float:left;width: 30px;"></span><%= name %><%= right_icon%></a>'),
	render: function() {
		if (this.model.type === 'folder') {
			this.model.icon = 'glyphicon-folder-close';
			this.model.right_icon = '<span class="glyphicon glyphicon-chevron-right" style="float:right;width: 20px;"></span>';
		} else {
			this.model.icon = 'glyphicon-file';
			this.model.right_icon = '';
		}
		window.console.log(this.$el);
		this.el = this.template(this.model);
        return this;
	}
});

collection = new cloud.BoxCollection();
view = new cloud.BoxView();
cloud.getCollection = function() { return collection; };
cloud.setCollection = function(x) { collection = x; };

