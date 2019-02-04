var letters = [];

var rword = ""; // reverse word

function isPalandrome(word) {
	for (var i = 0; i < word.length; i++) {
		//push letters of word into stack
		letters.push(word[i]);
	}

	for(var i = 0; i < word.length; i++) {
		//pop off the stack in reverse order
		rword += letters.pop();
	}

	if(rword === word) {
		console.log(`${word} is a palindrome!`);
	} else {
		console.log(`${word} is not a palindrome!`);
	}
}

isPalandrome('racecar');