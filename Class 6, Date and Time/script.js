// Dates

let myDate = new Date()

console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleString());  
// console.log(myCreatedDate.toString());  
// document.write(myCreatedDate)


// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 33.44)
// console.log(myCreatedDate.toLocaleDateString());

// let myCreatedDate = new Date("2023-01-14")

// let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log(myTimeStamp.getTime());
// console.log(myCreatedDate.getMilliseconds());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

let a = newDate.toLocaleString('default', {
    weekday:"short",
    timeZone:""
    
})
console.log(a);