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