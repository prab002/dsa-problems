// capitalize first letter of each word
function capitalizeFirstLetter(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(capitalizeFirstLetter("hello world"));

//problem statement
// We define the usage of capitals in a word to be right when one of the following cases holds:

/*
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 
Example 1:
Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
*/

// detect uppercase letters
var detectCapitalUse = function (word) {
  if (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    (word[0] === word[0].toUpperCase() &&
      word.slice(1) === word.slice(1).toLowerCase())
  ) {
    console.log(word[0] === word[0].toUpperCase());
    return true;
  }
  return false;
};

console.log(detectCapitalUse("GooglG"));
// console.log(detectCapitalUse("HELLO"));
