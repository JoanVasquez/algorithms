let myArr = [6, 1, 8, 2, 10, 8, 9];

for(let firstUnsorted = 1; firstUnsorted < myArr.length; firstUnsorted++) {
	let newElement = myArr[firstUnsorted];
	let i;
	for(i = firstUnsorted; i > 0 && myArr[i - 1] > newElement; i--) {
		myArr[i] = myArr[i - 1];
	}

	myArr[i] = newElement;
}

console.log(myArr)