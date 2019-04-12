let myArr = [6, 1, 8, 2, 10, 8, 9];

for(let lastUnsorted = myArr.length - 1; lastUnsorted > 0; lastUnsorted--) {
	let largest = 0;
	for(let i = 1; i <= lastUnsorted; i++) {
		if(myArr[i] > myArr[largest]) {
			largest = i;
		}
	}
	swap(myArr, largest, lastUnsorted);
}

function swap(arr, i, j) {
	let tmpItem = arr[i];
	arr[i] = arr[j];
	arr[j] = tmpItem;
}

console.log(myArr);