/* callback pattern - pass a function as an argument which can be invoked after some logic happened*/

var findNodes = function(callback, callbackObj){
	var nodes = //$(".employees");
	for(var i=0, max = nodes.length; i<max; i++){
		
		if(/*some complex logic*/ true){
			if(typeof callback === function){
				callback.call(callbackObj, nodes[i])
			}
		} 

	}
}

findNodes("paint", myApp);

