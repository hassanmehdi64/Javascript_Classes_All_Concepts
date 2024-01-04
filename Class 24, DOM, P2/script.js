// 4 pillers of DOM

// 1.Selecting an Element
//2. Changing HTML
//3. Changing CSS
//4. Event Listner


// --------------------------------
//  4 ways to select an HTML element in Js

//1. getElementById('')
//2. getElementByClassName('')
//3. getElementsByTagName('')

//4. querySelector('.class', '#id', 'tag')


const a = document.querySelector("h1")
// console.log(a)


// changing html
// a.innerHTML = "<p> Hello World from JS </p>"

// We can write like
//  let a = document.querySelector("h1")
a.innerHTML = "Hello World from JS"
 a.style.backgroundColor = 'yellow'




// ===================Query Selector All=====
// let qsa = document.querySelector("h1")

// console.log(qsa);

// qsa.style.color = 'red'


//Query selector is used to select a single Element



// we have to use querySeldctorAll to select all the Elements of its parent

  // Select all elements with the class 'box'
//   const boxes = document.querySelectorAll('.box');
  
// console.log(boxes);

//   boxes.forEach(box => {
//       box.style.backgroundColor = 'lightblue';
//       box.style.padding = '15px'
//   });

