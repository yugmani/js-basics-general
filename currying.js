// ****************************************
// Currying Functions In JavaScript
// ****************************************

// The term ‘currying’(in computer science) was first introduced by Christopher Strachey.

// This technique is mostly present in languages where all the functions are only allowed one argument. In languages like Haskell and ML currying allows for multiple arguments to be passed.

// According to Wiki, “Currying is a technique of converting a function that takes in multiple arguments into a sequence of functions that each take a single argument.”

// It is similar but not the same as partial application. Where partial application reduces the arity of a function to one with less arity, currying passes in each argument to a nested function where the most inner function returns the value.

// Note: Arity refers to the number of arguments a function takes in.

// ****** HOW TO CURRY ******

function multiply(a, b, c) {
  return a * b * c;
}

// console.log(multiply(2, 3, 4)); // 24

// Now currying this simple function
function curryMultiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

// console.log(curryMultiply(2)(3)(4)); // 24

// Even though these separate arguments are not in the same scope each nested function has access to upper variables/arguments because it’s creating closures.

// Currying is simply a technique which converts the a multiple arguments function into a function where each argument is passed in when it is being called.
// It does not change the functionality of the function, just the way it is invoked.

