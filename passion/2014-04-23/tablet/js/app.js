var App = function() {
	var that = this;
	var container;
	var background;

	this.on = function() {
		$('.ad-container').show();

		container = document.getElementById('qzad');
		background = document.getElementById('background');		
		this.addListeners();
		container.style.display = "block";
		$('.white').css('z-index', -1);

		timer = setTimeout(function(){
            $('.white').hide();
        }, 11000);
	}
	this.off = function() {
		clearTimeout(timer);
        $('.white').show();
        $('.ad-container').hide();
	}
	this.addListeners = function() {
		container.addEventListener('click', that.bgExitHandler, false);
	}
	this.bgExitHandler = function() {
		Enabler.exit('exit URL');
	}
	this.removeClass = function(el, className){
        el.classList.remove(className);
    }
};