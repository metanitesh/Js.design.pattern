/*chaining - return this after method call */

var obj = {
	value : 1,
	increment : function(){
		this.value ++;
		return this;
	},
	add : function(v){
		this.value += v;
		return this;
	},
	shout : function(){
		console.log(this.value);
	}
};

obj.increment().add(2).shout(); //4