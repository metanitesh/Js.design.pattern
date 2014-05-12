Object.prototype.clone = function(){
	//clone this object;
	console.log("cloned"); 
}

var car = {
	doors : 4,
	windows : 4,
	engine : 1,
	hasOwnProperty: function(){

	}
}

for (prop in car){
	/*checking hasOwnProperty would discard unwanted properties 
	form prototype chain and using it by calling Objects hasOwnProperty 
	avoid make it jerkproof */
	if(Object.prototype.hasOwnProperty.call(car, prop)){
		console.log(prop)
	}
}