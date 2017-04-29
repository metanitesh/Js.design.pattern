/* facade  : combining several small method inside one facade method */

var myEvent = {
	stop(e) {
		e.preventDefault();
		e.stopPropagation();
	}
};