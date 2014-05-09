var App = function() {
	var that = this;

	this.on = function() {
		$('.cta').on('click', function(e){
			e.preventDefault();
			that.loadVideo();
		});
	}
	this.off = function() {

	}
	this.loadVideo = function() {
		$('.video-container').show();
		$('.x').off().on('click', function(){
			that.unloadVideo();
		});

		brightcove.createExperiences();
	}
	this.unloadVideo = function() {
		$('.video').empty();
		$('.video-container').hide();
	}
	window.onTemplateLoad = function ( experienceID ) {
		player = brightcove.api.getExperience(experienceID);
    	APIModules = brightcove.api.modules.APIModules;
	}
	window.onTemplateReady = function ( e ) {
		videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
	    contentModule = player.getModule(APIModules.CONTENT);

	    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function(){
	    	$('.x').trigger('click');
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