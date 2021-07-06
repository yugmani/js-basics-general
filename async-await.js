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
