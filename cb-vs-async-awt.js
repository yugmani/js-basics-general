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

// *********** Promise.all() **********

// The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises.

// It rejects with the reason of the first promise that rejects.

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// Promise.all([promise1, promise2, promise3]).then(result => console.log(result));
//  (3) [3, 42, "foo"]

// ********** Promise.race() **********

// The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

let promiseFirst = Promise.resolve(3);
let promiseSecond = 42;
let promiseThird = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'large');
});

let promiseFourth = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, 'small');
});

// Promise.race([promiseThird, promiseFourth]).then(result => console.log(result));
// small

// ******** Async & Await ************

// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.

// Async/await is actually built on top of promises. It cannot be used with plain callbacks or node callbacks.

// The word “async” before a function means one simple thing: a function always returns a promise. If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.

// The keyword await makes JavaScript wait until that promise settles and returns its result.

// a function log user name
let greetPeople = name => {
  console.log('Hello ' + name);
};

// function to process user
let processingUserName = () => {
  return new Promise((resolve, reject) => {
    let name = 'Mirage';
    if (name) resolve(name);
    reject(false);
  });
};

// The word 'async' before a function means one single thing: a function always returns a promise.
async function asyncCall() {
  // the keyword await makes JavaScript wait until that promise settles and returns its result.
  let result = await processingUserName();

  // expected output: 'resolved'
  greetPeople(result);
}

// start a call
// asyncCall(); // Hello Mirage

