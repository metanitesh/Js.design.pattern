var state = "global";

var hoistMe = () => {

	console.log(state); //undefined (hoisiting)
	var state = "local";
	console.log(state) //local 
}

hoistMe();