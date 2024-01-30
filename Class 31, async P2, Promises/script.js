// const promi = new Promise(function(resolve, reject) {
    
// setTimeout( ()=>{
//     console.log('Hello Asheel');
// }, 3000 )

// resolve()

// })
// .then(() => {
//     console.log('promise fullfilled');
// })

// --------------------Example 2------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const success = false;

//     if (success) {
//     // Resolve the promise with a value
//     console.log('successful!');
//     resolve("Operation successful!");
//     } else {
//     // Reject the promise with a reason
//     console.log('failed!');
//     reject("Operation failed!");
//     }
//     }, 2000); // Simulating a 2-second delay
    
//    }).then(() => {
//     console.log("Operation successful!");
//    }).catch(() => {
//     console.log('ERROR:Promise failed: Please come tomorrow!');
//    })
  

// ----------------------- Example 3-----------------------------

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "abc", email: "abc@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })
