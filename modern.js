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

// ********* 2. Array.prototype.includes() *********

// The includes method will return true, if the element exists in the given array.

const myArray = ['a', 'b', 'c', 'd', 'e'];

// console.log(myArray.includes('c')); // true
// console.log(myArray.includes('ac')); // false
// console.log(myArray.includes(2)); // false

// If the method is supplied with a second argument fromIndex, the array will then be searched from that given index —

// console.log(myArray.includes('b', 1)); // true
// console.log(myArray.includes('e', 4)); // true
// console.log(myArray.includes('c', 3)); // false
// console.log(myArray.includes('a', -5)); // true
// console.log(myArray.slice(-5, 1));  // ["a"]

// ************ 3. Rest Parameters & Spread Syntax **************

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

function myFunction(a, b, ...otherArguments) {
  console.log('First Two Arguments: ' + a + ' & ' + b); // First Two Arguments: 1 & 2
  let sumFirstTwo = a + b;
  console.log(sumFirstTwo); // 3 => 1+2
  let remainings = otherArguments;
  return remainings;
}

// console.log(myFunction(1,2,3,4,5)); // [3, 4, 5]

// ***** SPREAD SYNTAX ******
// ************************************

// ***** To Shallow Copy
// Any further operation on the cloned one will not affect the original array.

let arrayFive = [1, 2, 3, 4, 5];
let clonedArrayFive = [...arrayFive];
// console.log(clonedArrayFive); // (5) [1, 2, 3, 4, 5]

// Changing cloned array
// console.log(clonedArrayFive.splice(0, 1)); // [1]
// console.log(clonedArrayFive); // (4) [2, 3, 4, 5]

delete clonedArrayFive[1];
// console.log(clonedArrayFive); // (4) [2, empty, 4, 5] =>See index 1 is empty.

clonedArrayFive.push(7);
// console.log(clonedArrayFive); // (5) [2, empty, 4, 5, 7]  => 7 added at the last.

// console.log(arrayFive); // (5) [1, 2, 3, 4, 5] => No change in original array.

// ***** In a function Call
// if we pass an array with the spread syntax, it will essentially expand it into a list of arguments.

function getSum(...numbers) {
  return numbers.reduce((acc, current) => acc + current);
}

const arrayNum = [1, 2, 3, 4, 5];
// console.log(getSum(...arrayNum)); // 15

// ******* Array Operations *******

// Spread syntax provides an easy alternative to handle basic array operations like concatenation, adding elements at different positions and so on.

let arrayThree = [1, 2, 3];
let arrayFour = [4, 5, 6, 7];

// Concatenating arrays
let concateThreeFour = [...arrayThree, ...arrayFour];
// console.log(concateThreeFour); // (7) [1, 2, 3, 4, 5, 6, 7]

// Adding Elements
let addToThree = [0, ...arrayThree];
// console.log(addToThree); // (4) [0, 1, 2, 3]

let addToFour = [...arrayFour, 8, 9];
// console.log(addToFour); // (6) [4, 5, 6, 7, 8, 9]

let addToThreeFour = [-1, 0, ...arrayThree, 100, 200, ...arrayFour, 10, 11];
// console.log(addToThreeFour);  // (13) [-1, 0, 1, 2, 3, 100, 200, 4, 5, 6, 7, 10, 11]

// ***** Moving on to Objects ******

const soccer = {
  ronaldo:13,
  messi:10,
  kane:9
}

// cloning the original object `soccer`
const players = {...soccer};
console.log(players); // {ronaldo: 13, messi: 10, kane: 9}

// updaing the cloned object does not affect the original object
players.neymar = 11;
players.ronaldo = 7;
console.log(players);
// {ronaldo: 7, messi: 10, kane: 9, neymar: 11} =>see the changes
console.log(soccer);
//  {ronaldo: 13, messi: 10, kane: 9} => no change in `soccer` original object

// Extract some of the properties
const {messi, kane, ...otherPlayers} = soccer;

const updatedSoccer = {
  ...otherPlayers,
  ronaldo:7
}

console.log(updatedSoccer); // {ronaldo: 7}

// Adding more players and mix
const additionalPlayers = {pique:3, ramos:4};
const finalPlayers = {
  ...soccer,
  ...additionalPlayers
}

console.log(finalPlayers); // {ronaldo: 13, messi: 10, kane: 9, pique: 3, ramos: 4}


