//shallow copy
var extend = function(parent, child){
	var child = child || {};
	for (var i in parent){
		if(parent.hasOwnProperty(i)){
			child[i] = parent[i];
		}
	}

	return child;
};

//deep copy
var extendDeep = function(parent, child){
	var toStr = Object.prototype.toString;
	astr = "[object Array]";

	var child = child || {};
	for (var i in parent){
		if(parent.hasOwnProperty(i)){
			if(typeof parent[i] === "object"){

				child[i] = (toStr.call(parent[i]) === astr)? [] : {};
				extendDeep(parent[i], child[i]);
			}else{
				child[i] = parent[i];
			}
		}
	}

	return child;
};

var parent = {
	arr : [2,3,4,4],
	obj : {prop : "awesome"}
};

var child = extendDeep(parent);
console.log(child)