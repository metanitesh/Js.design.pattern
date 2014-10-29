/*privacy in prototype: we can use self invoking function to give prototype privacy */

var Gadget = function(){

	/*private*/
	var name = "ipod";

	this.getName = function(){
		return this.name;
	};
};

Gadget.prototype = (function(){
	
	/*private and shared in prototype*/
	var browser = "webkit";

	return {
		getBrowser : function(){
			return browser;
		}
	};
}());

var tool = new Gadget();
