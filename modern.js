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
// ***********************************

// the string will be appended from the front, and not the end.

const phoneNumber = '9747855455';
const phoneLength = phoneNumber.length; // 10
const last4Digits = phoneNumber.slice(-4); // 5455
const maskedPhoneNumber = last4Digits.padStart(phoneLength, '*');

// console.log(maskedPhoneNumber);
// ******5455

// A popular scenario where this comes in handy, is for masking a phone number or an email address.
// In payment gateways or secure portals, it is very common to hide the contact information and show the last 3–4 characters, just enough for users to identify if it is meant for them.

// ************ 2. Rest Parameters & Spread Syntax **************

// Rest Parameters
// ***********************************

// useful when we are trying to create a function with indefinite number of arguments.
// Adding a ... in front of the name of a parameter during function definition, will create an array which will collect all the other arguments.

function getSum(...numbers) {
  console.log(Array.isArray(numbers)); //true
  const sum = numbers.reduce((acc, current) => acc + current);
  return sum;
}

// console.log(getSum(1,2,3)); // 6;
// console.log(getSum(0,1,2,3,4,5,6,7,8,9)); // 45
// console.log(getSum(13,5,47,89,55)); // 209


// We can also choose to define the first few parameters, and let the rest of the arguments get collected in the array. 
// But, it can only be done from the front, and not the other way around. 
// In other words, only the last parameter can be a rest parameter —

function myFunction(a, b, ...otherArguments){
  console.log("First Two Arguments: " + a+" & "+ b);  // First Two Arguments: 1 & 2
  let sumFirstTwo = a + b;
  console.log(sumFirstTwo);   // 3 => 1+2
  let remainings = otherArguments;
  return remainings;
}

// console.log(myFunction(1,2,3,4,5)); // [3, 4, 5]
