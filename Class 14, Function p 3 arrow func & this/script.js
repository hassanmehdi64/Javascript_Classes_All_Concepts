// ==========This keyword and Arrow Function============

// const user = {
//     username: "ali",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
   
//     }
// }

// user.welcomeMessage()
// user.username = "waqar"

// user.welcomeMessage()
// console.log(this);


// function abc(){
//     let username = "ali"
//     console.log(this.username);
// }

// abc()


// const abc = function () {
//     let username = "ali"
//     console.log(this.username);
// }


// ========================Arrow Function ===============

// const abc = () => {
//     let username = "ali"
//     console.log(this.username);
// }



// ----Explicit Return Method =====------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(12, 3));



// ----Implicit Return Method =====------------

// const addTwo = (num1, num2) =>  num1 + num2




// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(17, 3));

const addTwo = () => ({username: "ali"})

console.log(addTwo())

