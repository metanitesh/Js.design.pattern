/* self invoking function - to create a local scope. */

(function(){
	console.log("sandbox area")
}());

//or

var result = (function(){
	return 2+2
}());	