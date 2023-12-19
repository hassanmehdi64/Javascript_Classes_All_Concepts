// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))




// ----------------------------------


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))



// const user = {
//     username: "waqar",
//     price: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "ali",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([200, 400, 500, 1000]));