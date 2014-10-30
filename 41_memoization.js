/* memoization pattern - a caching mechanism in javascript  */

var myFunc = function(param){

	if(!myFunc.cache[param]){
		var result = param + Math.random() //could be something complex
		return myFunc.cache[param] = result;
	}

	return myFunc.cache[param];

}

myFunc.cache = {};

