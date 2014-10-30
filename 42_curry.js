/* curry pattern - partial function calling */

var curryMe = function (fn) {
	var slice = Array.prototype.slice;
	var stores_args = slice.call(arguments, 1);
	return function(){
		var new_args = slice.call(arguments)
		var args = stores_args.concat(new_args);
		return fn.apply(null, args);
	}
}

var add = function(x,y){
	return x+y;
}

var newAdd = curryMe(add, 5);
console.log(newAdd(4))//9