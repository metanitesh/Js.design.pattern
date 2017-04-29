/*prototypal inheritance */

var Model = {
	
	prototype: {
		init() {
			console.log("instantiate user");
		}
	},
	create() {
		var object = Object.create(this);
		object.parent = this;
		return object;
	},

	init(...args) {
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init(...args);
		return instance;
	}

};

var User = Model.create();
console.log(User);
var user = User.init();
console.log(user);

