/*module pattern : simple object creating pattern without using constructor and prototype*/

//using namespace pattern 
MYAPP.namespace("MYAPP.utilities.array");


MYAPP.utilities.array = ((() => {
	
	//dependencies declaration patter
	var uobj = MYAPP.utilities.object;
	var ulang = MYAPP.utilities.lang;

	//private properties
	var array_string = "[object Array]";
	var ops = Object.prototype.toString;
	
	//private method 
	var isArray = () => {

	};

	//one time initialization (optional)

	//public api
	return {
		inArray() {
			//logic
		},

		indexOf() {
			
		}
	};

})());