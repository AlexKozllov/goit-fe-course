"use strict";

const findLongestWord = function (string) {
  let splitArray = string.split(" ");
  let longestWord = "";

  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i].length > longestWord.length) {
      longestWord = splitArray[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a rol")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
