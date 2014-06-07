var cloud = cloud || {};

$("#box").click(function() {
	alert("123")
  $(".list-group").show()
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

//Run setup when everything's loaded
$(function () {
  window.onload = BOX.setup;
});

