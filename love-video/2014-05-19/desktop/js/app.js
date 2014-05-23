var App = function() {
	var that = this;
	var hasBeenCheckedForLoopingVideo = false;
	var canLoopVideo = false;
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
    var bgVideo = '<video class="" width="100%" height="100%" loop="true">\
    	<source src="http://player.vimeo.com/external/96217498.hd.mp4?s=125ebf67b02a9f38b2ec3aa09890123e" type="video/mp4"></video>';

	this.on = function() {
		if(!hasBeenCheckedForLoopingVideo) {
			that.checkForLoopingVideo();

			if (canLoopVideo) {
				that.startLooping();
			} else {
				$('#qzad').css('background', 'url(../images/bg-static.jpg) no-repeat left center');
			}
		};

		$('.cta').on('click', function(e){
			e.preventDefault();
			that.loadVideo();
		});
	}
	this.off = function() {
		$('.video').empty();
		$('.video-container').hide();
		$('.cta img:first-child').attr('src', 'images/cta.png');
		$('.loop-wrapper').removeClass('show');

		this.stopLooping();
		hasBeenCheckedForLoopingVideo = false;
		canLoopVideo = false;
	}
	this.checkForLoopingVideo = function () {
	    hasBeenCheckedForLoopingVideo = true;
	    var v = document.createElement("video");
	    if (v.canPlayType( 'video/mp4')) canLoopVideo = true;
  	}
  	this.startLooping = function(){
  		if (canLoopVideo) {
  			$('.loop-wrapper').append(bgVideo);

  			var video = $('.loop-wrapper').find( 'video' );
				video[0].addEventListener( 'canplay', function () {
					video.show();
					video[0].play();
					$('.loop-wrapper').addClass('show');
				});
  		}
  	}
  	this.stopLooping = function() {
  		if(canLoopVideo) {
	  		$('.loop-wrapper').find( 'video' )[0].pause();
	      	$('.loop-wrapper').find( 'video' ).remove();
	  	}
  	}
	this.loadVideo = function() {
		$('.video-container').show();
		$('.video').html(template);
		$('.x').off().on('click', function(){
			$('.cta').off().attr('href', 'http://www.zurich.com/campaign/cxo/index.htm');
			$('.cta img:first-child').attr('src', 'images/learn-more.png');
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