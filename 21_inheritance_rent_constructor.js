/*rented constructor: interesting pattern to copies properties */

var Cat = function(){
	this.legs = 4;
	this.say = function(){
		return "meow";
	};
};

var Bird = function(){
	this.wings = 2;
	this.fly = true;
};

var Hybrid = function(){
	Cat.apply(this);
	Bird.apply(this);
};

var pita = new Hybrid();
console.log(pita);
