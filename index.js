function isPalindrome(word) {
    // Reverse the string
    const reversedWord = word.split('').reverse().join('');
    
    // Compare original and reversed strings
    return word === reversedWord;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("abba")); 
console.log(isPalindrome("a")); 
console.log(isPalindrome("ab")); 

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//  add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

 module.exports = isPalindrome;
