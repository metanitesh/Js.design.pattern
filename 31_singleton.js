/* singelton : all the instances from the class refer to same same object */

/*using static property*/
var Universe = function(){
	if(typeof Universe.instance === "object"){
		return Universe.instance;
	}

	this.startTime = 0;
	this.bang = "big";

	Universe.instance = this;
	return this;
}


/*using immediate function */
var Universe;

(function(){
	var instance;

	Universe = function(){
		if(instance){
			return instance;
		}

		instance = this;

		this.startTime = 0;
		this.bang = "big";
	};

}());


var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2)