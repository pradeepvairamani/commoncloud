var cloud = cloud || {};
cloud.CC_URL = 'http://0.0.0.0:5000/';

$("#box").click(function() {
    $.ajax({
    url: "http://0.0.0.0:5000/box",
    success: function(response) {
      window.open(response);
    }
  });
});

$("#dropbox").click(function() {
  $(".list-group").empty()
});

$("#gdrive").click(function() {
  $(this).tab('show')
  $(".list-group").empty()
  var ul = $('.list-group');
	var json = { items: ['item 1', 'item 2', 'item 3'] };
	$(json.items).each(function(index, item) {
    	ul.append($(document.createElement('a')).attr("href", "#").attr("class","list-group-item").text(item));
	});
});
