/* self invoking function - to create a local scope. */

((() => {
	console.log("sandbox area")
})());

//or

var result = ((() => 2+2)());	