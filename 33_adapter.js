/* adapter pattern - when a client interface doesn't match application interface an adapter for that interface can be created  */

var clietObject = {
	string1 : "foo",
	string2 : "bar",
	string3 : "baz"
};

var interfaceMethod = function(str1, str2, str3){

};

var clientToInterfaceAdapter = function(o){
	interfaceMethod(o.string1, o.string2, o.string3);
};