// ***********************************
// Callback vs Promise and Async/Await in JavaScript
// ***********************************

// ********* Callback function **********
// A callback function is a function passed into another function as an argument, which is called (or executed) inside the otherFunction.

// function to log user name
let greeting = name => {
  console.log('Hello ' + name + '!');
};

// function to process user input
let processUserInput = callback => {
  let name = 'Jonathan';
  // let name = prompt('Please enter your name:');
  callback(name);
};

//invoke or call
processUserInput(greeting);
// Hello Jonathan!
