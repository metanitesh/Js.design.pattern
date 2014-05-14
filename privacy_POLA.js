var Gadget = function(){

	//private member
	var spec:{
		name : "xperia"
		color: "white",
		type: "mobile"
		company: "sony"
	}

	/* spec is passed by reference and 
	could be changed by end user */
	this.geSpec = function(){
		return spec
	}

	/*principle of least authority 
	never expose more than you need	*/
	this.getType = function(){
		return spec.type;
	}

}