var qz = {};

qz.confetti = function(elem, num, size) {
	var el;

	(function(){init()})();

	function init() {
		if(elem && num) {
			if(el = document.getElementById(elem)) {
				makeConfetti();
			} else { 
				throw new Error('an element with the id of "' + elem + '" was not found'); 
			}
		} else { 
			throw new Error('required parameter(s) missing'); 
		}
	};

	function makeConfetti() {
		for(var i = 0;i < num; i++) {
			randomize(i);
		}
	};

	function randomize(i) {
		var confetti;
		var type;
		var pos;
		var s;
		
		setTimeout(function(){
			type = (Math.floor(((Math.random() * 5)) * 100) / (Math.pow(10, 0)) % 5) + 1;
			pos = Math.floor((Math.random() * 1100) + 1);
			s = Math.floor((Math.random() * size) + 1);

			confetti = document.createElement('div');
			confetti.className = confetti.className += ('confetti s' + type);
			confetti.style.left = pos + 'px';
			confetti.style.width = confetti.style.height = s + 'px';
			confetti.style.opacity = s / 10;
			confetti.style.backgroundImage = 'url(images/sf'+ type +'.svg)';

			el.appendChild(confetti);
		}, i * 250);
			
	};
}