
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "Aryan", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 3000)
//     // ---promise chaning---
// }).then((user) => {
//     //  console.log(user.username);
//     return user.username
//   })
//   .then((username) => {
//     console.log(`username is ${username}`);
// }).catch( (error)=>{
//    console.log(error);
// } ).finally(() => console.log("The promise is either resolved or rejected"))
           


// -------------------------------------------------------------------

// ----------------Async Await---------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response.username);
    
} catch (error) {
    console.log(error);
}
}

consumePromiseFive()

