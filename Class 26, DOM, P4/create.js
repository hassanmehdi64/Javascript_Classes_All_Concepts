const div = document.createElement('div')

div.className = "main"

div.id = 'testDiv'


div.setAttribute("title", "generated title")
console.log(div);   

div.style.backgroundColor = "green" 
div.style.color = "white" 

div.style.padding = "12px" 

div.innerText = "Hello world"


const addText = document.createTextNode("Hello there")

div.appendChild(addText) 

document.body.appendChild(div) 