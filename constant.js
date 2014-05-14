var constant = (function() {

	var constants = {};
	var ownProp = Object.prototype.hasOwnProperty;
	var allowed = {
		string: 1,
		number: 1,
		boolean: 1
	};

	var prefix = (Math.random() + "_").slice(2);

	
	return {
		set: function(name, value) {
			if (this.isDefined(name)) {
				return false;
			}
			if (!ownProp.call(allowed, typeof value)) {
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},

		isDefined: function(name) {
			return ownProp.call(constants, prefix + name);
		},

		get: function(name) {
			if (this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		}
	};
}());


console.log(constant.isDefined("maxwidth")); //false
console.log(constant.set("maxwidth", 480)); //true
console.log(constant.isDefined("maxwidth")); //true
console.log(constant.get("maxwidth")); //480
