// *********************************
// Delete
// *********************************

// The delete operator will remove a property from an object.

// Using delete with an array, however, will delete the value, ****** but won’t change the overall length of the array ****** .

// deleting a property from an object.
let myObj1 = {
  name: 'Leon',
  age: 32,
  grade: 11,
  member: true
};

delete myObj1.age;

// console.log(myObj1); // {name: "Leon", grade: 11, member: true}  => deleted `age`
// console.log(myObj1.age); // undefined

delete myObj1['grade'];
// console.log(myObj1); // {name: "Leon", member: true} => deleted `grade`
// console.log(myObj1.grade); // undefined

// deleting a member from an array.
let myArray1 = ['cat', 'hat', 'bat', 'rat'];
delete myArray1[2]; // deleted element of index 2
// console.log(myArray1); // ["cat", "hat", empty, "rat"]
// console.log(myArray1[2]); // undefined

// *********************************
// Void
// *********************************

// The void operator will evaluate a given expression and then returns a value of undefined.

// This is used often when it's useful to return an undefined value as part of a coding process.

// It was often used with hyperlinks like javascript:void(0) to return undefined from a user click to prevent page reloading.

function returnHello() {
  return 'Hello guys!';
}

// console.log(returnHello()); // Hello guys!
// console.log(void returnHello()); // undefined

function addAB(a, b) {
  return a + b;
}

// console.log(addAB(2, 3)); //5
// console.log(void addAB(3, 5)); //undefined

// *********************************
// typeof
// *********************************

// The typeof operator will evaluate and return a string of the type of the operand value.

// This can be useful when checking the type of value being held by a variable before performing additional operations upon the value.

const myObj2 = {
  name: 'Roaches',
  age: 23,
  isStudent: true
};

// console.log(typeof myObj2.name); // string
// console.log(typeof myObj2.age); // number

const booleanValue = myObj2.isStudent;
// console.log(typeof booleanValue); // boolean

// *********************************
// unary plus (+)
// *********************************

// The unary plus (+) will attempt to convert the value next to it into a number.

// This works with numbers, strings that contain only numbers as a string (ex. '246'), and boolean values.

// For booleans, adding a + before a true value will convert it into 1 and false into 0.

let myValue = '323';
// console.log(+myValue); // 323  =>number

let fname = 'Clark';
// console.log(+fname); // NaN =>not a number

let isLogged = true;
// console.log(+isLogged); // 1

let isEnrolled = false;
// console.log(+isEnrolled); // 0

let hot = '37.23';
// console.log(+hot); // 37.23 => number

// console.log(+true); // 1
// console.log(+false); // 0

// console.log(+'75'); // 75 => number
// console.log(+null); // 0
// console.log(+undefined); // NaN
// console.log(+'Hello'); // NaN

// *********************************
// unary negative (-)
// *********************************

let temp = '37.23';
// console.log(-temp); // -37.23

// console.log(-true); // -1
// console.log(-false); // -0

// console.log(-75); // -75
// console.log(-null); // -0
// console.log(-undefined); // NaN
// console.log(-'Hello'); // NaN

// *********************************
// Logical not(!)
// *********************************

// The logical not (!) operator will evaluate a value as truthy or falsy and return the negated value as a boolean.

// When applied to non-empty strings, non-zero numbers, or object the logical not operator will return false since each of those data types is considered to be true.

let lastName = 'George';
// console.log(!lastName); // false

let price = 76.32;
// console.log(!price); // false

let fruit = { name: 'banana' };
// console.log(!fruit); // false

// When the logical not is applied to a boolean value, it will return the negation of the boolean value.

let isEnabled = true;
// console.log(!isEnabled); // false

// console.log(!true); // false
// console.log(!false); // true

// There are other values that are considered ‘falsy’ and will return true when the logical not operator is applied to an operand.

// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!NaN); // true
// console.log(!''); // true
// console.log(!0); // true

// *********************************
// Double Negation (!!)
// *********************************

// When applied to an operand, it will evaluate and convert the operand to a boolean value and then negate that boolean to return the value to the operand’s original ‘truthy’ or ‘falsy’ value.

// This is a useful tool to use when a boolean value is needed in evaluations for things like logical operations.

let isDisabled = true;
// console.log(!!isDisabled); // true

// console.log(!!true); // true
// console.log(!!false); // false
// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!NaN); // false
// console.log(!!''); // false
// console.log(!!0); // false

// Reference: https://javascript.plainenglish.io/javascript-operators-unary-operators-e9d33c94db5c
