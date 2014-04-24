var App = function() {
	var that = this;
	var timeouts = [];

	this.on = function() {
		$('.background, .text1').show().addClass('fadeIn');

		timeouts[0] = setTimeout(function(){
			$('.text1').removeClass('fadeIn').addClass('fadeOut');

			timeouts[1] = setTimeout(function(){
				$('.text1').hide();
				$('.background img:last-child').addClass('fadeOut');

				timeouts[2] = setTimeout(function(){
					$('.background img:first-child').show().addClass('fadeIn');

					timeouts[3] = setTimeout(function(){
						$('.text2').show().addClass('fadeIn');

						timeouts[4] = setTimeout(function(){
							$('.text2').removeClass('fadeIn').addClass('fadeOut');

							timeouts[5] = setTimeout(function(){
								$('.zurich').show().addClass('fadeIn');

								timeouts[6] = setTimeout(function(){
									$('.tagline').show().addClass('fadeIn');
									$('.cta img').addClass('arrowmove');
								}, 1000);
							}, 500);
						}, 2000);
					}, 250);
				}, 250);
			}, 750);
		}, 2000);
	}
	this.off = function() {
		
	}
};