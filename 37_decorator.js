/* decorator pattern - enhancing an object behavior on runtime */

var Sale = function(price){
	this.price = price;
};

Sale.prototype.getPrice = function(){
	return this.price;
};

Sale.prototype.decorate = function(decorator){
	var F = function(){};
	var overrides = Sale.decorators[decorator];

	var i;
	var newObj;

	F.prototype = this;
	newObj  = new F();

	console.log()
	newObj.uber = F.prototype;
	for( i in overrides){
		if(overrides.hasOwnProperty(i)){
			newObj[i] = overrides[i];
		}
	}

	return newObj;
};

Sale.decorators = {};
Sale.decorators.tax = {
	getPrice : function(){
		var price = this.uber.getPrice();
		price += price*10;
		return price;
	}
};

Sale.decorators.ietax = {
	getPrice : function(){
		var price = this.uber.getPrice();
		price += price*10;
		return price;
	}
};

var sale = new Sale(10);
var sale = sale.decorate("tax");
var sale = sale.decorate("ietax");
console.log(sale.getPrice());


