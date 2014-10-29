var setup = function(){
	//do setup work 
	alert(1);
	return function(){
		alert(2);
	}
}

var next = setup(); //1
next() //2