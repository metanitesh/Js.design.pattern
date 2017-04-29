var person = () => {
	console.log("monkey");
	person = () => {
		console.log("human");
	};
};

console.log(person()); //monkey
console.log(person()); //human
