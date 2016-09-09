$(document).ready(function() {
	$("div.ryu").mouseenter(function() {
		//console.log("mouse entered div.ryu");
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	}).mouseleave(function() {
		//console.log("mouse left div.ryu");
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	}).mousedown(function() {
		//console.log("mouse pressed");
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
	}).mouseup(function(){
		//console.log("mouse released");
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
});