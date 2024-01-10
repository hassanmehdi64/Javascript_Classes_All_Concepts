// let test = document.getElementById('title')

// test.style.backgroundColor = "green"
// test.style.color = "white"

// console.log(test.textContent)
// // console.log(test.innerHTML) 
// console.log(test.innerText)




// ==================================Query Selector All=============

// let qsa = document.querySelectorAll('li')
// let qsa = document.querySelector('li:nth-child(3)')
// qsa.style.color = 'red'
// console.log(qsa)

// we cannot use like below
// qsa.style.backgroundColor = 'red'

// if we want to make a style or any that want to change we can use foreach because it return a  nolist and nodlist is similar to arry but not Array

// qsa.forEach(element => {
    
//     console.log(element);
//     element.style.backgroundColor = 'yellow'
// });



//-------------------------------NOTES------------------------------------
// ==> if we use select an element by getElementByTagName then we get an HtMl Collection
// --> HTML Collection did'nt return a method to use a loop
// --> if we want to use it as an array then we have to convert it in array

// ----------------------------------------------------------------------

// const alfa = document.getElementsByTagName('li')
let h = Array.from(document.querySelectorAll('li'))
console.log(h);

h.forEach((values) => {
    console.log(values);
   values.style.backgroundColor = 'red'
//    values.style.backgroundColor = 'red'
})

