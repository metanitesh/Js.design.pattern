util = {
		defClass: function(prototype) {

			var constructor = prototype.constructor;
			
			constructor.extend = function(obj) {
				for (var prop in obj) {
					constructor[prop] = obj[prop];
				}
			};
			constructor.prototype = prototype;
			return constructor;
		},

		extend: function(constructor, keys) {
			var superType = keys.super = constructor.prototype;
			var prototype = Object.create(superType);
			for (var key in keys) prototype[key] = keys[key];
			return this.defClass(prototype);
		}
	};