/* immediate object initialization */

({
	maxWidth : 600,
	maxHeight : 800,
	gimmeMax() {
		return this.maxWidth + "x" + this.maxHeight
	},
	init() {
		console.log(this.gimmeMax());
	}
}).init();