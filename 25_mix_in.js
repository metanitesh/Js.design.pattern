/*mixin - mixing property from different objects */

var mix = function(){
	var child = {};

	for(var i=0, max=arguments.length; i<max; i++){
		for(var prop in arguments[i]){
			if(arguments[i].hasOwnProperty(prop)){
				child[prop] = arguments[i][prop];
			}
		}
	}
	return child;
};

var cake = mix(
	{eggs: 3, large: true},
	{butter: 1, salted: true},
	{sugar: "sure"}
);

console.log(cake);

