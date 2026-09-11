//!Accessing the html elements

//!1)getElementById()
// let h1Tag = document.getElementById("heading")
// console.log(h1Tag)

// let btnTag = document.getElementById("btn")
// console.log(btnTag)

//!2)getElementsByClassName()
// let content = document.getElementsByClassName("content")
// console.log(content)

//!3)getElementsByTagName()
// let inputTags = document.getElementsByTagName("input")
// console.log(inputTags)

//!4)querySelector()

//*ID
// let h1Tag = document.querySelector("#heading")
// console.dir(h1Tag)

//*CLASS
// let content = document.querySelector(".content")
// console.log(content)

//*TAG
// let inputTag = document.querySelector("input")
// console.log(inputTag)

//!5)querySelectorAll()

//*ID
// let headingTag = document.querySelectorAll("#heading")
// console.log(headingTag)

//*CLASS
// let contents = document.querySelectorAll(".content")
// console.log(contents)

//*TAG
// let inputTags = document.querySelectorAll("input")
// console.log(inputTags)

//!Styles

//*Single Element
// h1Tag.style.color = "white"
// h1Tag.style.backgroundColor = "red"

//*Multiple Element (Collection)
// for (let i = 0; i < contents.length; i++){
//   contents[i].style.border="5px solid blue"
// }

//!Accessing the text content
let paragraph = document.getElementById("para")
console.log(paragraph)
//*innerText -- displays only the visible content on UI
console.log(`innerText: ${paragraph.innerText}`)
//*textContent -- displays the content even if it is hidden
console.log(`textContent: ${paragraph.textContent}`)
//*innerHTML -- HTML Tags + Attributes
console.log(`innerHTML: ${paragraph.innerHTML}`)

//!Setting the text content
let container = document.getElementById("container")
console.log(container)
container.innerText = "Hello from Inner Text"
container.textContent = "Hello from Text Content"
container.innerHTML = `<h1 style=color:red;>Hello from Inner HTML</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
<button>Click</button>
`
