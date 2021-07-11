// *********************************
// 10 Modern JavaScript syntax to help you code faster
// *********************************

// ******* 1. String Padding *********

// String.prototype.padEnd()
// **********************************

// This method would append the current string with another given string, multiple times if required, until it reaches a particular length.

const text1 = 'hmm';
const paddedText = text1.padEnd(7, '!');

// console.log(paddedText); // hmm!!!!
// console.log(paddedText.length); // 7

// the `text1` string will be appended with ! multiple times, till the length of the final string is 7.


// String.prototype.padStart()