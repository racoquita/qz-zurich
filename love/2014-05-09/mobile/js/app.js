var App = function() {
	var that = this;

	this.on = function() {
		$('.cta').on('click', function(e){
			e.preventDefault();
			that.loadVideo();
		});
	}
	this.off = function() {
		$('.video').empty();
		$('.video-container').hide();
		$('.cta img:first-child').attr('src', 'images/cta.png');
	}
	this.loadVideo = function() {
		brightcove.createExperiences();
	}
	this.unloadVideo = function() {
		$('.video-container').css('z-index', 1);
	}
	window.onTemplateLoad = function ( experienceID ) {
		player = brightcove.api.getExperience(experienceID);
    	APIModules = brightcove.api.modules.APIModules;
	}
	window.onTemplateReady = function ( e ) {
		videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
	    contentModule = player.getModule(APIModules.CONTENT);

	    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function(){
	    	$('.cta').off().attr('href', 'http://www.zurich.com/campaign/cxo/index.htm').css('pointer-events', 'auto');
			$('.cta img:first-child').attr('src', 'images/learn-more.png');
	    	that.unloadVideo();
	    });
	    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, function(){
	    	$('.cta').off().attr('href', 'http://www.zurich.com/campaign/cxo/index.htm').css('pointer-events', 'auto');
			$('.cta img:first-child').attr('src', 'images/learn-more.png');
	    	that.unloadVideo();
	    });
	    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, function(){
	    	$('.video-container').css('z-index', 111);
	    });

	    videoPlayer.getCurrentVideo(function (videoDTO) {
	      	if(videoDTO) {
		        videoDTO.displayName = "";
		        contentModule.updateMedia(videoDTO, function (newVideoDTO) {  
          			
		        });
	      	}
	    });
	}
};