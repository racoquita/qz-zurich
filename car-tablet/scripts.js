// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var background;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	
	container = document.getElementById('container');
	background = document.getElementById('background');		
	
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	//Show Ad
	container.style.display = "block";

};

//Add Event Listeners
addListeners = function () {
    container.addEventListener('click', bgExitHandler, false);
};

bgExitHandler = function (e) {
	//Call Exits
	Enabler.exit('exit URL');
};
var removeClass = function(el, className){
        el.classList.remove(className);
   };
	// Loop animation 2 times
	var i = 1;
	var counter = setInterval(function() {
		if (i <= 1) {
			cloneAd();
			init();// adds google enabler init function
			//removeClass(background, "fade");
			i++;
		}
	}, 17000);
	function cloneAd() {
		var elm = document.getElementById('container');
		var newOne = elm.cloneNode(true);
		elm.parentNode.replaceChild(newOne, elm);
		
	}
