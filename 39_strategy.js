/* strategy - allow several alorithim to be interchangable at run time */

var validator = {
	types: {},
	message: [],
	config: {}
};



validator.validate = function(data) {
	var i;
	var msg;
	var type;
	var checker;
	var result_ok;

	this.message = [];

	for (i in data) {
		if (data.hasOwnProperty(i)) {
			type = this.config[i];
			checker = this.types[type];
		}
		console.log(type)
		if (!type) {
			continue;
		}

		if (!checker) {
			throw new Error("validation error : no handler");
		}

		result_ok = checker.validate(data[i]);
		if (!result_ok) {
			msg = "invalid value for" + i + checker.instruction;
			this.message.push(msg);
		}

	}
	return this.hasError();
};

validator.hasError = function(){
	return this.message.length !== 0;
};

validator.types.isNonEmpty = {
	validate: function(value) {
		return value !== "";
	},
	instruction: "the value can not be empty"
};

validator.types.isNumber = {
	validate: function(value) {
		return /[0-9]/.test(value);
	},
	instruction: "the value can only be number"
};

var data = {
	first_name: "nitesh",
	last_name: "sharma",
	age: 12,
	unsername: "o_O"
};


validator.config = {
	first_name: "isNonEmpty",
	last_name: "isNonEmpty",
	age: "isNumber"
};


validator.validate(data);
if(validator.hasError()){
	console.log(validator.message.join("\n"));
}