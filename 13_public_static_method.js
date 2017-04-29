/*public static method: assign method directly to constructor*/

var Gadgets = () => {
};

//static method
Gadgets.isShiny = () => //this will point to constructor here
"you bet";

Gadgets.prototype.setPrice = function(price){
	this.price = price;
};

