/* immediate object initialization */

({
	maxWidth : 600,
	maxHeight : 800,
	gimmeMax : function(){
		return this.maxWidth + "x" + this.maxHeight
	},
	init : function(){
		console.log(this.gimmeMax());
	}
}).init();