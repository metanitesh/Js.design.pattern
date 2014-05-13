var handleError = function() {
	console.log("handle error here")
}

try {
	var age;
	/* this block was responsible to define age */
	if (!age) {
		throw {
			type: "varibale not defined",
			remedy: handleError
		}
	}

} catch (e) {
	e.remedy()
} finally {
	console.log("i will always be called");
}