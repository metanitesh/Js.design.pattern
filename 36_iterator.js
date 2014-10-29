/* iterator pattern - iterating a data structure manually using iteration interface */

var agg = (function(){
	var index = 0;
	var data = [1,2,3,4,5,6];
	var length = data.length;

	return {
		next: function(){
			var element;
			if(!this.hasNext()){
				return null;
			}

			element = data[index];
			index = index + 2;
			return element;

		},
		hasNext: function(){
			return index<length;
		},
		rewind: function(){
			index = 0;
		},
		current: function(){
			return data[index];
		}
	};
}());

console.log(agg.next());
console.log(agg.next());