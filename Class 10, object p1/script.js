// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "waqar",
    ['full name'] : 'waqar ali',
   [ mySym]: "mykey1",
    age: 18,
    location: "danyor",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.name)

// console.log(JsUser['full name'])
// console.log(typeof JsUser.mySym)

JsUser.email = "abcd@gmail.com"
console.log(JsUser)

// Object.freeze(JsUser)

// JsUser.email = "abcd@gmail123.com"


JsUser.greeting = function(){
    console.log("Hello JS user ");
}
// console.log(JsUser);



JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());