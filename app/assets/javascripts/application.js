//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function() {
	$("#all_users .pagination a").on("click", function() {
		$.getScript(this.href);
		return false;
	});
	$("#user_search input").keyup(function() {
		$.get($("#user_search").attr("action"), $("#user_search").serialize(), null, "script");
		return false;
	});
});