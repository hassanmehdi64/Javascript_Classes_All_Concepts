// for
// for(let i= 0; i<=10; i++){

//   console.log(i);

// }

// for (let index = 0; index <= 10 ; index++) {
//     const element = index;
//     console.log(element);
    
// }



// console.log(element);



// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
 
//     for (let j = 1; j <= 10; j++) {
//       // console.log(`Inner loop value ${j} and inner loop ${i}`);
//       console.log(i + '*' + j + ' = ' + i*j );
//      }
// }



// let myArray = ["one", "two", "three"]

// console.log(myArray.length);


// const myNumbersArray = [1, 2, 3, 4, 5];
// for (let i = 0; i < myNumbersArray.length; i++) {
//     console.log("Element at index " + i + ": " + myNumbersArray[i]);
// }



// ------break and continue----------

// for (let index = 1; index <= 20; index++) {
//   console.log(`Value of i is ${index}`);
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break
// }
    
// }

// ============================================================
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}