//! Dom Property
// let heading = document.getElementById("heading")
// console.dir(heading)
// heading.ondblclick = () => {
//   heading.style.color = "white"
//   heading.style.background = "red"
// }

//!Add Event Listener
// let para = document.getElementById("para")
// para.addEventListener("click", () => {
//   para.innerHTML = "Tea Break 🍵"
// })

//!Event Object
// let form = document.querySelector('form')
// form.addEventListener("submit", (e) => {
//   console.log(e)
//   console.log(e.target)
//   console.log(e.type)
//   e.preventDefault()
//   console.log("Form Submitted 🥳")
// })

//!Types
let nameField = document.getElementById("name")
console.log(nameField)

//!Input
nameField.addEventListener("input", (e) => {
  console.log(e.target.value)
})

//!Change
nameField.addEventListener("change", (e) => {
  e.target.style.border = "10px dashed red"
  console.log(e.target.value + " 🤗")
})

//!Focus
nameField.addEventListener("focus", (e) => {
  e.target.style.background="aqua"
})
//!Blur
nameField.addEventListener("blur", (e) => {
  e.target.style.background="lime"
})