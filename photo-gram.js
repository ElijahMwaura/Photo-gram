$(document).ready(function() {
	$("#toggle-button").click(function() {
		$(".pic-container").toggleClass("padding")
	});
	
	$("#nav-btn").click(function() {
		$("#pop-up-nav").css({"display":"block"});
		$("body").css({"overflow": "hidden"});
	});
	
	$("#close").click(function() {
		$("#pop-up-nav").css({"display":"none"});
		$("body").css({"overflow": "visible"});
	});
	
	$("#pop-up-nav").click(function() {
		$("#pop-up-nav").css({"display":"none"});
		$("body").css({"overflow": "visible"});
	});
});
