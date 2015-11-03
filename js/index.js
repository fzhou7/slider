var sliderInt = 1;
var sliderNext = 2;

$(document).ready(function() {
	$("#slider img#1").fadeIn(300);
	startSlider();
});

var startSlider = function() {
	var count = $("#slider img").size();
	loop = setInterval(function() {
		if (sliderNext>count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$("#slider img").fadeOut(300);
		$("#slider img#"+ sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext++;
	}, 3000);
}

var prev = function() {
	var newSlide = sliderInt-1;
	showSlide(newSlide);
}

var next = function() {
	var newSlide = sliderInt+1;
	showSlide(newSlide);
}

var stopLoop = function() {
	window.clearInterval(loop);
}

var showSlide = function(id) {
	stopLoop();
	var count = $("#slider img").size();
	if (id>count) {
		id=1;
	}else if(id<1){
		id=count;
	}
	
	$("#slider img").fadeOut(300);
	$("#slider img#"+id).fadeIn(300);

	sliderInt = id;
	sliderNext = id+1;
	startSlider();
}