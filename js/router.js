/*global Backbone */
'use strict';

var Router = Backbone.Router.extend({
	routes : {
		'' : 'home'
	}
});

var FolderListView = Backbone.View.extend({
	el : '#artifact-list',
	className : 'list-group-item',
	render : function() {
		// this.$el.html('');
	}
});

var router = new Router();
router.on('route:home', function () {
	var folder_list_view = new FolderListView();
	folder_list_view.render();
});

Backbone.history.start();