/*mixin - mixing property from different objects */

var mix = function(...args) {
	var child = {};

	for(var i=0, max=args.length; i<max; i++){
		for(var prop in args[i]){
			if(args[i].hasOwnProperty(prop)){
				child[prop] = args[i][prop];
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

