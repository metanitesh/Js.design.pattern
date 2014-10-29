/*prototypal inheritance */

var Model = {
	
	prototype: {
		init: function() {
			console.log("instantiate user");
		}
	},
	create: function() {
		var object = Object.create(this);
		object.parent = this;
		return object;
	},

	init: function() {
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init.apply(instance,arguments);
		return instance;
	}

};

var User = Model.create();
console.log(User);
var user = User.init();
console.log(user);

