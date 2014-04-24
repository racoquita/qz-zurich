var App = function() {
	var that = this;
	var times = [3500, 3800, 2000];
	var frame1, frame2, frame3, frame4, cta, framesContainer, arrow, bgContainer, bg, forkLift;
	var currentFrame = 0;
	var timeouts = [];
	var frames =[
		function(){
			frame1.fadeOut(500, function() {
				var timeline = new TimelineLite();
				
				timeline.to(bg, 1,  { left:0, top:"-100px", width:1070, ease: Power2.easeInOut }, 0);
				timeline.to( forkLift, 1, {  top:65, right:"19%", left: "41.5%" , opacity: 1, ease: Power2.easeInOut, width:"35%"} , 0);
				timeline.play();
				
				timeouts[1] = setTimeout(function() {
					frame2.fadeIn(400);
				}, 1500);
			});
		},
		function(){
			frame2.fadeOut(700);
			timeouts[2] = setTimeout(function() {
				frame3.fadeIn(500);
			}, 1000);
		},
		function() {
			frame4.fadeIn(600);
			arrow.addClass('move');		
		}
	];

	this.on = function() {
		framesContainer = $('.frames-container');
		bgContainer = $('.bg-container');
		frame1 = $('.f1');
		frame2 = $('.f2');
		frame3 = $('.f3');
		frame4 = $('.f4');
		cta = $('.cta');
		arrow = $('.arrow');
		forkLift = $('.fork-lift');
		bg = $('#bgImg');
		currentFrame = 0;
		this.changeFrame();
	}
	this.off = function() {
		$.each(timeouts, function(i, to){
			clearTimeout(to);
		});
		bgContainer.removeClass('anim');
		frame2.hide();
		frame3.hide();
		frame4.hide();
		frame1.show();
	}
	this.changeFrame = function(){
		if($.isFunction(frames[currentFrame])) {
			timeouts[0] = setTimeout(function() {
				frames[currentFrame]();
				currentFrame++;
				that.changeFrame();
		 	}, times[currentFrame]);
		}
	}
};