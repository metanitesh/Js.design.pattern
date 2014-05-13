var myFunc = function(param){
	if(!myFunc.cache[param]){
		var result = param //could be something complex
		return myFunc.cache[param] = result;
	}

	return myFunc.cache[param];

}

myFunc.cache = {};

