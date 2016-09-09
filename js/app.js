$(document).ready(function() {
	function playHadouken() {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}

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
		playHadouken();
		$(".ryu-throwing").show();
		$(".hadouken").show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
	}).mouseup(function(){
		//console.log("mouse released");
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});


});