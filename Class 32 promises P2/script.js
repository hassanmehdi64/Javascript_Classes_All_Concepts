
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "abc", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })           // ---promise chaning---

// promiseFour
// .then((uesr) => {
    //     // console.log(user);
    //     return user.username
// }).then((username) => {
//     console.log(`the username is ${username}`);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))


// ----------------Async Await---------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
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

