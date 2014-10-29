/*public static method: assign method directly to constructor*/

var Gadgets = function(){
};

//static method
Gadgets.isShiny = function(){
	//this will point to constructor here
	return "you bet";
};

Gadgets.prototype.setPrice = function(price){
	this.price = price;
};

