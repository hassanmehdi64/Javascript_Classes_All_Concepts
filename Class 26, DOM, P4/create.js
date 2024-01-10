const div = document.createElement('div')
// console.log(div);

 div.className = "main"

// div.id = 'testDiv'
div.id = Math.floor((Math.random()* 10 + 1))

div.setAttribute("title", "generated title")

div.style.backgroundColor = "green" 
div.style.color = "white" 

div.style.padding = "12px" 

// div.innerText = "Hello world"


const addText = document.createTextNode("Hello there")

div.appendChild(addText) 

document.body.appendChild(div) 