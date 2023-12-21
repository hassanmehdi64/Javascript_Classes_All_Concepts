// ====================================================================
// ----Immediately Invoked Function Expressions (IIFE)--------------


// (function abc(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();


// ------------Eg 2 -------------

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hassan')




// ====================================================================
// -------------------Control Flow -----------------------------

// if
// const isUserloggedIn = true

// if (!isUserloggedIn) {
    
//     console.log('hello from control flow ');
// }


//---if else
// const temperature = 35

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }



// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);



// -------------we can use multiple conditions-----------

// const balance = 1000

// if (balance > 500) console.log("test");


// if else if

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
    
//  } else if (balance < 900) {
//     console.log("less than 750");
    
// } else{
//     console.log("less than 1200");

// }


// +++++++++++++++++++ Logical Operators ++++++++++++++++++++++++
//  and = && ,  or = || not = !

// const userLoggedIn = true
// const debitCard = false
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// and
// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
// }else{
    
//     console.log("Not Allow to buy course");
// }



// or
// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// not =
// if (balance != 1000) {
//     console.log('less than 100 ---');
// }


// ====
// if (userLoggedIn && debitCard || 2==2) {
//     console.log("Allow to buy course");
// }else{
    
//     console.log("Not Allow to buy course");
// }