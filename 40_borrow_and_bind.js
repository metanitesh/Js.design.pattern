/* borrow and bind - internal of common jquery proxy method */

var bind = (o, m) => function(...args) {
    return m.apply(o, [].slice.call(args));
};

var one = {
	name: "one",
	say(greet) {
		return greet + ", " + this.name ;
	}
};

var two = {
	name: "two"
};


twosay = bind(two, one.say);
console.log(twosay("hello"));
