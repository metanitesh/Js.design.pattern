/* mediator pattern - define an object that handle object interaction */

var Player = function(name){
	this.points = 0;
	this.name = name ;
};

Player.prototype.play = function(){
	this.points += 1;
	mediator.played();
};

var scoreboard = {
	element : $("#result"),

	update: function(score){
		var i;
		var msg = "";
		for (i in score){
			if(score.hasOwnProperty(i)){
				msg += i;
				msg += score[i];
			}
		}
	}
};

var mediator = {
	players : {},

	setup : function(){
		var players = this.players;
		players.home = new Player("Home");
		players.guest = new Player("Guest")

	},

	played: function(){
		var players = this.players;
		var score = {
			Home: players.home.points,
			Guest : players.guest.points
		};

		scoreboard.update(score);
	},

	keypress: function(e){
		if(e.which === 49){
			mediator.players.home.play();
			return;
		}

		if(e.which === 48){
			mediator.players.guest.play();
			return;
		}
	}
};


mediator.setup();
window.onkeypress = mediator.keypress;
