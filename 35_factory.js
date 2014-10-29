/*factory - passing object instantiation responsibility to factory method*/

var CarMaker = function(){

};

CarMaker.prototype.drive = function(){
	return this.doors;
};

CarMaker.factory = function(type){
	var constr = type;
	var newcar;

	CarMaker[constr].prototype = new CarMaker();
	newcar = new CarMaker[constr]();
	return newcar;

};

CarMaker.Compact = function(){
	this.doors = 4;
};

CarMaker.Convertible = function(){
	this.doors = 2;
};

CarMaker.SUV = function(){
	this.doors = 8;
}

var car = CarMaker.factory("SUV");
console.log(car);