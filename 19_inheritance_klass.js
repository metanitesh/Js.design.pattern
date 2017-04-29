/*klass pattern - allow user to pass parent Class and property bbject*/

var klass = (Parent, props) => {
	var Child;

	Child = function(...args) {
		if (Child.uber && Child.uber.hasOwnProperty("__constructor")) {
			Child.uber.__constructor.apply(this, args);
		}

		if (Child.prototype.hasOwnProperty("__constructor")) {
			Child.prototype.__constructor.apply(this, args);
		}

	};
	Parent = Parent || Object;

	var F = () => {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.uber = Parent.prototype;
	Child.prototype.constructor = Child;

	for (var i in props) {
		if (props.hasOwnProperty(i)) {
			Child.prototype[i] = props[i];
		}
	}



	return Child;
};


var Man = klass(null, {
	__constructor(name) {
		console.log("man");
		this.name = name;
	},
	getName() {
		console.log(this.name);
	}
});

var SuperMan = klass(Man, {
	__constructor(name) {
		console.log("SuperMan");
		this.name = name;
	}
});