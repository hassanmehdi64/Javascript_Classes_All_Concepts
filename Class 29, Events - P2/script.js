
// function myfunc() {
    
// document.write('Hello')

// }
// document.querySelector('#box-1').addEventListener('click', function() {
//     document.querySelector('#box-1').style.backgroundColor = 'red'
// })


// ================= 2nd way to add event using dom =======
// document.getElementById('box-3').onclick = abc;

// function abc(){

//     console.log('the box-3 was clicked');
       
//     document.getElementById('box-3').style.backgroundColor = 'blue';
    
//     }



// ================= addEvent Listners Method =======================

// const abc = () => {
//     document.getElementById('box-4').style.backgroundColor = 'yellow';
// };

// document.getElementById('box-4').addEventListener('click', abc);



// ----------We can use multiple events using addEventListener method++++++

// const abc = () => {
//     document.getElementById('box-4').style.backgroundColor = 'yellow';
// };

// document.getElementById('box-4').addEventListener('click', abc);
// document.getElementById('box-4').addEventListener('click',function() {
//     console.log('Waqar')
// });


// document.getElementById('box-4').addEventListener('dblclick', ()=>{
//     document.getElementById('box-4').style.border = '2px solid red';
// });


// ------------------usage of this======

// document.getElementById('box-4').addEventListener('dblclick', function() {
//     this.style.border = '2px solid red';
//     this.style.backgroundColor = 'blue';
// });



// --------------Remove Event Listner-------

document.querySelector('#box-5').addEventListener('mouseleave', check);
document.querySelector('#box-5').addEventListener('click', remove);

function check() {
    document.querySelector('#box-5').style.border = '5px solid blue'
}


// -------
function remove(){

    document.querySelector('#box-5').removeEventListener('mouseleave', check)
    
}




// ================= Events Properties =======================

// we can pass a parameter to access the properties using that object

const eventprops = document.getElementById('box-4')
eventprops.addEventListener('click', (e) => {
    
console.log(e); 


console.log(e.type);
console.log(e.target);
console.log(e.clientX, e.clientY);

})




