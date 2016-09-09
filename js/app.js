$(document).ready(function() {
	function playHadouken() {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}

	$("div.ryu").mouseenter(function(event) {
		//console.log("mouse entered div.ryu");
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	}).mouseleave(function() {
		//console.log("mouse left div.ryu");
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	}).mousedown(function() {
		//console.log("mouse pressed");
		playHadouken();
		$(".ryu").children().hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').stop();
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
	}).mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$("html").keydown( function(event) {
		//console.log(event.keyCode);
		if (event.keyCode == 88) {
			$(".ryu").children().hide();
			$(".ryu-cool").show();
		}
	}).keyup( function(event) {
		$(".ryu-cool").hide();
		$(".ryu-still").show();
	});

});