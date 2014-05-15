/*rented constructor: copies properties 
but not prototype*/

var Parent = function(name){
	this.name = name || "adam";
};

Parent.prototype.say = function(){
	return this.name;
};

var Child = function(name){
	console.log(this);
	Parent.apply(this, arguments);
};

