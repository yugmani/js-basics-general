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

