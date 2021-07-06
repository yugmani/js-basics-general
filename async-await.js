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
