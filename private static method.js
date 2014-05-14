var Gadget = (function() {
	var counter = 0;
	var newGadget;

	NewGadget = function(){
		counter += 1;
	};

	NewGadget.prototype.getLastId = function(){
		return counter;
	};

	return NewGadget;
}());