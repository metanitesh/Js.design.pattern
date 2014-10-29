/* init time branching - commonly used to normalize browser differences  */

var util = {
	addListener: null,
	removeListener: null
};

if(typeof window.addEventListener === "function"){
	util.addListener = function(el, type, fn){
		el.addEventListener(type, fn, false);
	};
}else if(typeof document.attachEvent === "function"{
	util.addListener = function(el, type, fn){
		el.attachEvent("on"+type, fn);
	}
})else {
	utils.addListener = function (el, type, fn) {
		el['on' + type] = fn; };
}