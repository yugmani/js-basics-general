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
