/*chaining - return this after method call */

var obj = {
	value : 1,
	increment() {
		this.value ++;
		return this;
	},
	add(v) {
		this.value += v;
		return this;
	},
	shout() {
		console.log(this.value);
	}
};

obj.increment().add(2).shout(); //4