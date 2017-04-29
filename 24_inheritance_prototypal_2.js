util = {
		defClass(prototype) {

			var constructor = prototype.constructor;
			
			constructor.extend = obj => {
				for (var prop in obj) {
					constructor[prop] = obj[prop];
				}
			};
			constructor.prototype = prototype;
			return constructor;
		},

		extend(constructor, keys) {
			var superType = keys.super = constructor.prototype;
			var prototype = Object.create(superType);
			for (var key in keys) prototype[key] = keys[key];
			return this.defClass(prototype);
		}
	};