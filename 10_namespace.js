/*namespace pattern - convert given string into hierarchical objects  */

var namespace = function(ns_string){
	var parts = ns_string.split(".");
	var parent = MYAPP = {};

	if(parts[0] === "MYAPP"){
		parts = parts.slice(1);
	}

	for(var i=0, max=parts.length; i<max; i++){
		if(typeof parent[parts[i]] === "undefined"){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]]
	}

	return parent;
}

namespace("MYAPP.module1.model");
console.log(MYAPP.module1.model) // {};