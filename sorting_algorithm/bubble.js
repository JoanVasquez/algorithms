let myArr = [6, 1, 8, 2, 10, 8, 9];

for(let lastUnsorted = myArr.length - 1; lastUnsorted > 0; lastUnsorted--) {
	for(let i = 0; i < lastUnsorted; i++) {
		if(myArr[i] > myArr[i + 1]) swap(myArr, i, i + 1);
	}
}

function swap(arr, i, j) {
	let tmpItem = arr[i];
	arr[i] = arr[j];
	arr[j] = tmpItem;
}

console.log(myArr)