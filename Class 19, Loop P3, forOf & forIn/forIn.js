const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
 
//     console.log(key);

// }


// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// ----------------------Loop in Array-----------------------

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {

    // console.log(key);
    // console.log(programming[key]);
}


// ----------------------------------------------------------------

const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('PK', "Pakistan")

for (const key in map) {
    console.log(key);
}

// console.log(map['pk']);