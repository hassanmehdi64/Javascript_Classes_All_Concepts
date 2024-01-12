
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")
addLanguage("PHP")


// --------------------------------------------

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('golang')


// -----------------------------------------

// //Edit
// const secondLang = document.querySelector("li:nth-child(2)")
// console.log(secondLang);

// secondLang.innerHTML = "HTML"
// const secondLang = document.querySelector("li:nth-child(1)")
// // console.log(secondLang.innerText);

// const newli = document.createElement('li')
// newli.textContent = "CSS"

// secondLang.replaceWith(newli)


// -------------------------------------------
// //edit
// const firstLang = document.querySelector("li:first-child")
// firstLang.outerHTML = '<li>TypeScript</li>'

// //remove
const lastLang = document.querySelector('li:nth-child()')
lastLang.remove()


