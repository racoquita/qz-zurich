var App = function() {
	var that = this
	,	fortunes = [
		'don’t look before you leap.',
		'expect the worst. prepare for the best.',
		'it doesn’t pay to plan ahead.'
	]

	this.on = function() {
		$('.cta').on('click', function(e){
			e.preventDefault();

			$('.cta').removeClass('show');
			$('.cookie').addClass('animate');

			setTimeout(function(){
				$('.prediction').text(fortunes[Math.floor(Math.random() * 3)]);
				$('.fortune').addClass('show');
				$('.resizable').resizable({
					minWidth: 60,
					maxWidth: 305,
					handles: 'e'
				});
			}, 400);
		});
	}
	this.off = function() {
		$('.cta').off().addClass('show');
		$('.cookie').removeClass('animate');
		$('.fortune').removeClass('show');
		$('.resizable').resizable('destroy');
	}
};