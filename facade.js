/* keep the orignal method small 
but combined them inside facade*/
var myEvent = {
	stop : function(e){
		e.preventDefault();
		e.stopPropagation();
	}
};