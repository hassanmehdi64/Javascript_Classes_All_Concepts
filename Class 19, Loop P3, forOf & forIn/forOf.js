// for of

// const arr = [1, 2, 3, 4, 5]

// for (const values of arr) {
//     console.log(values);
// }



// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }



// -----------------------------------------------
// Maps

const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PK', "Pakistan")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":",  value);
// }



// ===================================

const myObject = {
    game1: 'NFS',
    game2: 'PUBG'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);

}