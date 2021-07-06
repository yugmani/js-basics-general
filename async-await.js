let flag = true;
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flag) resoleve('I am resolved');
    else reject(new Error('I am rejected'));
  }, 1000);
});

promise.then(res => {
  console.log(res).catch(err => console.log(err));
});
