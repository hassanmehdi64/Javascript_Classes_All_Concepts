// two ways to use events in js
// 1. Event Handler
// 2. Event Listner

// function myfunc(){
//     console.log('i was clicked');
// }

// // // ------------------------------------
// const mousover = ()=>{
//     console.log("on Mouse over")
// }


// // =================
// const onkp = ()=>{
//     console.log("key was pressed");
// }

// const onkd = ()=>{
//     console.log("key was down");
// }

// const onkup = ()=>{
//     console.log("key was down was pressed");

// }



// // =================Event Listners=======================

const box_3 = document.getElementById('box-3');

function clk () {
    console.log('hello from clb');
}

box_3.addEventListener( 'click', clk)

// -----------------Eg 2========

const btn = document.querySelector('button')
const bdy = document.querySelector('body')

btn.addEventListener( 'click', function() {
    bdy.style.backgroundColor = 'blue'
    bdy.style.color = 'white'
} )