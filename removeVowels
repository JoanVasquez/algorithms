function removeVowels(arr) {
	let vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  let tmpArr = [];
  
  arr.forEach(word => {
    vowelsArr.forEach(vowel => {
      if(word.includes(vowel)) {
       word = word.replace(vowel, "");
      }
    });
    tmpArr.push(word);
  });
  
  return tmpArr;
}

console.log(removeVowels(['Joan']))
