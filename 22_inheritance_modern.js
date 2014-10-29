/*Object.create replication - base of any prototypical inheritance*/

var object = function(o){
	var F = function(){};
	F.prototype = o;
	return new F();
};

var parent = {
	lastName : "sharma",
	getLastName : function(){
		return this.lastName;
	}
};

var Teacher = function(){
	this.name = "Adam";
};

Teacher.prototype.taught = function(){
	console.log("maths");
};


var kid = object(parent);
var kid2 = object(Teacher.prototype);

console.log(kid.getLastName());
console.log(kid2.taught());