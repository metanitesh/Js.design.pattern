var setup = () => {
	//do setup work 
	alert(1);
	return () => {
		alert(2);
	};
}

var next = setup(); //1
next() //2