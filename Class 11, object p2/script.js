// const userOne = new Object()

const userOne = {}

userOne.id = "123abc"
userOne.name = "waqar"
userOne.isLoggedIn = false

// console.log(userOne);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sakhawat",
            lastname: "ali"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)


// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc1@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },

]



// const us = users[1].email
// console.log(us);


// console.log(Object.keys(userOne));

// console.log(Object.values(userOne));

// console.log(Object.entries(userOne));

// console.log(userOne.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "hello js",
    price: "999",
    courseInstructor: "waqar"
}

course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);


