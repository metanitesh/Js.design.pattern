/* iterator pattern - iterating a data structure manually using iteration interface */

var agg = ((() => {
	var index = 0;
	var data = [1,2,3,4,5,6];
	var length = data.length;

	return {
		next() {
			var element;
			if(!this.hasNext()){
				return null;
			}

			element = data[index];
			index = index + 2;
			return element;

		},
		hasNext() {
			return index<length;
		},
		rewind() {
			index = 0;
		},
		current() {
			return data[index];
		}
	};
})());

console.log(agg.next());
console.log(agg.next());