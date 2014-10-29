var person = function(){
	console.log("monkey");
	person = function(){
		console.log("human");
	};
};

console.log(person()); //monkey
console.log(person()); //human
