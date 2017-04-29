//using namespace pattern 
MYAPP.namespace("MYAPP.utilities.array");


MYAPP.utilities.array = ((() => {
	
	//dependencies declaration patter
	var uobj = MYAPP.utilities.object;
	var ulang = MYAPP.utilities.lang;

	//private properties
	var array_string = "[object Array]";
	var ops = Object.prototype.toString;
	
	//private method 
	var isArray = () => {

	};

	var inArray = () => {
		//logic
	};

	//one time initialization (optional)

	//revealing public api
	return {
		isArray,
		indexOf: inArray
	};

})());