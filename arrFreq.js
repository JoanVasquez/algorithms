function arrFreq(arr) {
	arr = arr.sort();

	let tmpArr = arr.filter((item, index) => {
		return arr.indexOf(item) >= index;
	});

	let resultArr = [];

	for(let i = 0; i < tmpArr.length; i++) {
		if(i < tmpArr.length - 1) {
			resultArr.push([tmpArr[i], tmpArr[i+1]]);
		}
	}

	return resultArr;
}

console.log(arrFreq([1,2,3,2,4,5,1,7]));
