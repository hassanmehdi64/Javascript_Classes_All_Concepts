// setTimeout 
// setInterval
// Promise
// fetch


// ---------------- setTimeout ----------

// console.log('Hello One');

// setTimeout(function() {
    
//     console.log('waqar');

// }, 2000)

// console.log('Hello One....');

// const setfunc = function () {
//     console.log('jehdh');
// }

// setTimeout(setfunc, 2000)

// ================================================================


// --------Example 2--------------------

const changeText = function(){
    document.querySelector('h1').innerHTML = "Hello World!"
}

// setTimeout(changeText, 3000)
const changeMe = setTimeout(changeText, 3000)




// ++++++++++++ clearTimeout +++++++++++++

// clearTimeout(changeMe)

document.querySelector('#stop').
addEventListener('click', function(){

    clearTimeout(changeMe)
    console.log('STOPPED');
})