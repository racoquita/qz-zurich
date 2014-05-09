var App = function() {
	var that = this;
	var template = '<object class="BrightcoveExperience">\
        <param name="bgcolor" value="#000000" />\
        <param name="width" value="100%" />\
        <param name="height" value="100%" />\
        <param name="playerID" value="2593615286001" />\
        <param name="playerKey" value="AQ~~,AAABnwxttEE~,HpQpfOmVc2v-HDVjX5evwXVa7AvwSOW1" />\
        <param name="isVid" value="true" />\
        <param name="isUI" value="true" />\
        <param name="dynamicStreaming" value="true" />\
        <param name="htmlFallback" value="true" />\
        <param name="includeAPI" value="true" />\
		<param name="templateLoadHandler" value="onTemplateLoad" />\
		<param name="templateReadyHandler" value="onTemplateReady" />\
        <param name="wmode" value="transparent" />\
        <param name="@videoPlayer" value="3550178699001" />\
        <param name="autoStart" value="false" />\
    </object>';

	this.on = function() {
		$('.cta').on('click', function(e){
			e.preventDefault();
			that.loadVideo();
		});

		qz.confetti('confetti',100, 12);
	}
	this.off = function() {

	}
	this.loadVideo = function() {
		$('.video-container').show();
		$('.video').html(template);
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
          			videoPlayer.play();
		        });
	      	}
	    });
	}
};