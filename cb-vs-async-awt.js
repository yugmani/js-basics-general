// ***********************************
// Callback vs Promise and Async/Await in JavaScript
// ***********************************

// ********* Callback function **********

// A callback function is a function passed into another function as an argument, which is called (or executed) inside the otherFunction.

// So the basic way to handle asynchronous operations is through callbacks.

// But when working with a lot of dependent asynchronous operations, you quickly end up in callback hell.

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
// processUserInput(greeting);
// Hello Jonathan!

// ************ Promise ************

// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// function to process user input
let inputUserProcess = () => {
  return new Promise((resolve, reject) => {
    let name = 'Jessy';
    if (name) resolve(name);
    reject(false);
  });
};

// invoke or call
// inputUserProcess().then(result => greeting(result));
// Hello Jessy;
