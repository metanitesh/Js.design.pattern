var bind = function(o, m) {
	return function(){
		return m.apply(o, [].slice.call(arguments));
	};
};

var one = {
	name: "one",
	say: function(greet) {
		return greet + ", " + this.name ;
	}
};

var two = {
	name: "two"
};


twosay = bind(two, one.say);
console.log(twosay("hello"));
