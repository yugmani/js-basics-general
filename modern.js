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
  ronaldo: 13,
  messi: 10,
  kane: 9
};

// cloning the original object `soccer`
const players = { ...soccer };
// console.log(players); // {ronaldo: 13, messi: 10, kane: 9}

// updaing the cloned object does not affect the original object
players.neymar = 11;
players.ronaldo = 7;
// console.log(players);
// {ronaldo: 7, messi: 10, kane: 9, neymar: 11} =>see the changes
// console.log(soccer);
//  {ronaldo: 13, messi: 10, kane: 9} => no change in `soccer` original object

// Extract some of the properties
const { messi, kane, ...otherPlayers } = soccer;

const updatedSoccer = {
  ...otherPlayers,
  ronaldo: 7
};

// console.log(updatedSoccer); // {ronaldo: 7}

// Adding more players and mix
const additionalPlayers = { pique: 3, ramos: 4 };
const finalPlayers = {
  ...soccer,
  ...additionalPlayers
};

// console.log(finalPlayers); // {ronaldo: 13, messi: 10, kane: 9, pique: 3, ramos: 4}

// ****** Object Iterators ******

// Object.keys() returns an array of all the keys of an object,
// Object.values() returns an array of all the values
// Object.entries() returns an array of [key, value] pairs.

const soccerPlayers = {
  ronaldo: 13,
  messi: 10,
  kane: 9
};

// console.log(Object.keys(soccerPlayers));
// //  (3) ["ronaldo", "messi", "kane"]
// console.log(Object.values(soccerPlayers));
// // (3) [13, 10, 9]
// console.log(Object.entries(soccerPlayers));
// [["ronaldo", 13], [messi", 10], ["kane", 9]]

// ******* Optional Chaining *********

// This feature comes in handy when you are dealing with unreliable, unpredictable data.
// application breaks with a message like — `Uncaught TypeError: Cannot read property someProperty of undefined / null` can be fixed with the help of optional chaining.

// The operator `?.` is going to go one level deep, only if the chain is not nullish(i.e. not null or undefined).

const myObject = {};
// console.log(myObject.address.city);
// Uncaught TypeError: Cannot read property 'city' of undefined / null

// console.log(myObject.address?.city); // undefined

const yourObject = {
  name: 'harry',
  age: 23,
  address: { city: 'Los Angeles', street: 'Beverly Blvd' }
};

// console.log(yourObject.address?.city);  // Los Angeles
// console.log(yourObject.contact?.phone); // undefined

// console.log(yourObject.contact.phone);
// TypeError: Cannot read property 'phone' of undefined

// ********* Nullish Coalescing Operator ********

// The Logical OR would provide a default value if your variable is falsy (i.e. one of null, undefined, 0 and false).
// Nullish Coalescing ?? would provide a default value if the variable is nullish (i.e. either null or undefined).

const city = '' || 'New York';
// console.log(city); // New York

const someVariable1 = 0 || 'default'; // default
const someVariable2 = null || 'default'; // default
const someVariable3 = false || 'default'; // default
const someVariable4 = undefined || 'default'; // default
const someVariable5 = 'truthy' || 'default'; // truthy
// console.log(someVariable5); // truthy

const var1 = 0 ?? 'default'; // 0
// console.log(var1); // 0
const var2 = null ?? 'default'; // default
const var3 = false ?? 'default'; // false
const var4 = undefined ?? 'default'; // default
const var5 = 'non-nullish' ?? 'default'; // non-nullish

// *** lOGICAL ASSIGNMENT OPERATOR ***

// The logical AND assignment (i.e. &&= ) operator only assigns when a variable is truthy,
// while the logical OR assignment (i.e. ||= ) operator would assign when the variable is falsy —

const myBio = {
  name: 'Deuba',
  age: 0,
  occupation: ''
};

myBio.name ||= 'Dina';
console.log(myBio.name); // Deuba

myBio.occupation ||= 'Engineer';
console.log(myBio.occupation); // Engineer;

myBio.isEnrolled ||= true;
console.log(myBio.isEnrolled);

console.log(myBio);
// {name: "Deuba", age: 0, occupation: "Engineer", isEnrolled: true}

myBio.name &&= 'Dina';
console.log(myBio.name); // Dina

myBio.occupation &&= 'Coder';
console.log(myBio.occupation); // Coder

myBio.isAdmin &&= true;
console.log(myBio.isAdmin); // undefined

console.log(myBio);
// {name: "Dina", age: 0, occupation: "Coder", isEnrolled: true}

// ********************************

// In scenarios where we are not sure if a property exists in an object, but we need to manipulate it somehow, the logical OR assignment provides a cleaner alternative to undefined checks.

// Let’s say, we need to find out the number of times an element repeats itself in an array.
// The way I prefer to do this, is by iterating the array and storing the count of each element in an object —

const messArray = [1, 2, 3, 4, 3, 1, 3, 4];
const countArr = {};

messArray.forEach(item => {
  countArr[item] ||= 0;
  countArr[item]++;
});

console.log(countArr);
// {1: 2, 2: 1, 3: 3, 4: 2}
