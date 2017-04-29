/*inheritance by temporary constructor*/

var inherit = (C, P) => {
	var F = () => {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber  = P.prototype;
	C.prototype.constructor = C;
};

var Animal = function(){
	this.name = "Animal";
};

Animal.prototype.say = function(){
	console.log(this.name);
};

var Person = function(){
	this.name = "person";
};

inherit(Person, Animal);

var person = new Person();
console.log(person);