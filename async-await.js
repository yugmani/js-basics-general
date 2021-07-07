// ************************************
// Understanding async and await in JavaScript
// ***********************************

// Promises using .then() and .catch();
let flag = true;
// let flag = false;  // uncomment this line and commet out line 6 to see different case.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flag) resolve('I am resolved');
    else reject(new Error('I am rejected'));
  }, 1000);
});

promise.then(res => console.log(res)).catch(err => console.log(err));

// I am resolved
// if you set `let flag = false` it will result => `Error: I am rejected`

// ******* async and await demo *******
async function demo() {
  let promist = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I am resolved');
    }, 1000);
  });

  let res = await promise;
  console.log(res);
}

demo(); // I am resolved

// The `await` keyword should only be used inside an `async` function.

// ****** The async keyword *******
// If we use async before any function then the function will return a Promise. If the function is not returning any Promise explicitly then it will wrap a Promise around the return value implicitly. Let’s see one example.

async function greet() {
  return 'Welcome';
}

greet().then(res => console.log(res));
// Welcome

// ******* The await keyword *******
// The await keyword waits for a Promise and pauses the code in that line until the Promise gets resolved. Remember the await keyword should always be used inside async function otherwise, it will throw an error.

async function foo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('You are resolved');
    }, 1000);
  });

  let res = await promise;
  console.log(res);
  console.log('end');
}

foo();
// You are resolved
// end

// *******************************
// Handling Errors
// *******************************

// ****** try ... catch block ****
async function boo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('I am rejected'));
    }, 1000);
  });

  try {
    let res = await promise;
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

boo(); // Error: I am rejected

// ********* Promise.all() **********

// The Promise.all() method takes an iterable of promises as an input and returns a single Promise.
// It gets resolved when all the promises get resolved or any one of them gets rejected.

function getPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay + 100);
    }, delay);
  });
}

async function goo() {
  const results = await Promise.all([
    getPromise(1000),
    getPromise(3000),
    getPromise(2000)
  ]);

  console.log(results);
}

goo();    // (3) [1100, 3100, 2100]
