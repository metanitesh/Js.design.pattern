/* facade  : combining several small method inside one facade method */

var myEvent = {
	stop : function(e){
		e.preventDefault();
		e.stopPropagation();
	}
};