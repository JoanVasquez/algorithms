function isPalindrome(word) {
	word = word.toLowerCase()
	var letters = word.split("");
	var rword = "";
	for (var i = 0; i < letters.length; i++) {
		rword += letters.pop();
	}


	if (rword === word) return true;
	else return false;
}

isPalandrome('racecar');
