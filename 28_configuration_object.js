/* config object - avoid using more than 3 parameter in function instead use config object*/


var config = {
	firstname : "nitesh",
	lastname: "sharma",
	username: "sherlock",
	gender: "male",
	type: "developer"
}

var addPerson = function(config){
	console.log(config.firstname +" is "+ config.type)
}

addPerson(config)