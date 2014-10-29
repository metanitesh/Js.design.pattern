/* observer - when a series of subscriber can listen to a publisher and than react when publisher fires an event */

var Publisher = {
	subscirbers: {
		any: []
	},

	subscribe: function(fn, type) {

		type = type || "any";
		if (typeof this.subscirbers[type] === "undefined") {
			this.subscirbers[type] = [];
		}

		this.subscirbers[type].push(fn);
	},

	unsubscribe: function(fn, type) {
		if (typeof this.subscirbers[type] !== undefined) {
			this.subscirbers[type].pull(fn);
		}
	},

	publish: function(type, obj) {
		var subscribers = this.subscirbers[type];

		for (var i = 0, max = subscribers.length; i < max; i++) {
			subscribers[i](obj);
		}
	}
};


var paper = Object.create(Publisher);
var joe = {
	shout : function(obj){
		console.log("oh i got issue" + obj);
	}
};

paper.subscribe(joe.shout, "new issue");
paper.publish("new issue", 27);

