/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  let revstr = '';
  for (let i = str.length -1 ; i >= 0; i--) {
    revstr += str[i];

  }
  if (str === revstr) {
    return true;
  }
  
}

module.exports = isPalindrome;

//console.log(isPalindrome('racecar'))