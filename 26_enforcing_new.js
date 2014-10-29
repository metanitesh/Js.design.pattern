/*enforcing new : reinforcing new inside Class to avoid global creation */

var Car = function(){
	/* we can also use argument.callee 
	instead of constructor name */  
	if(!(this instanceof Car)){
		return new Car(); 
	}
	this.name = "tesla_s"
	this.type = "electric";
}

Car.prototype.getName = function(){
	return this.name;
}


var car = Car(); /* it works even if we forget to use new*/
var car2 = new Car();


console.log(car.getName())
console.log(car2.getName())