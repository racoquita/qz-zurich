var App = function() {
	var that = this
	,	fortunes = [
		'don\'t look before you leap.',
		'expect the worst. prepare for the best.',
		'it doesn\'t pay to plan ahead.'
	]

	this.on = function() {
		$('.cta, .cookie-container').on('click', function(e){
			e.preventDefault();

			$('.cta').addClass('switch');
			$('.cookie').addClass('animate');

			setTimeout(function(){
				$('.resizable').resizable({disabled: false});
				$('.prediction').text(fortunes[Math.floor(Math.random() * 3)]);
				$('.fortune').addClass('show');
				$('.resizable').resizable({
					minWidth: 100,
					maxWidth: 180,
					handles: 'e',
					stop: function() {
						//that.showModal();
					},
					start: function( event, ui ) {
						$('.cta').hide();
					}
				});
			}, 400);
		});

		$('.another').on('click', function(e){
			e.preventDefault();
			that.resetFortune();

			$('.modal').velocity('fadeOut', {
				duration: 500
			});
		});
	}
	this.off = function() {
		$('.cta').off();
		$('.modal').hide();
		that.resetFortune();
	}
	this.showModal = function() {
		$('.modal').velocity('fadeIn', {
			delay: 2750,
			duration: 500

		});
	}
	this.resetFortune = function() {
		$('.resizable').resizable({disabled: true});
		$('.cta').show();
		$('.cta').removeClass('switch');
		$('.fortune').removeClass('show').removeAttr('style');
		$('.cookie').removeClass('animate');
		$('.resizable').removeAttr('style');
	}
};