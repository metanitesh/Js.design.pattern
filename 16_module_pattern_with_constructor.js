/* module pattern using constructor: module pattern dialect with prototype and constructor */

//using namespace pattern
MYAPP.namespace('MYAPP.utilities.Array');

MYAPP.utilities.Array = (function () {
	// dependencies
	var uobj = MYAPP.utilities.object;
	var ulang = MYAPP.utilities.lang;

	var Constr;

	Constr = function(o){
		this.element =  this.toArray(o);
	};

	Constr.prototype = {
		constructor : MYAPP.utilities.Array,
		version : "2.0",
		toArray : function(obj){
			//logic here
		}
	};

	return Constr;

}());

var arr = new MYAPP.utilities.Array(obj);