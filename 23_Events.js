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
// let nameField = document.getElementById("name")
// console.log(nameField)

//!Input
// nameField.addEventListener("input", (e) => {
//   console.log(e.target.value)
// })

//!Change
// nameField.addEventListener("change", (e) => {
//   e.target.style.border = "10px dashed red"
//   console.log(e.target.value + " 🤗")
// })

//!Focus
// nameField.addEventListener("focus", (e) => {
//   e.target.style.background="aqua"
// })
//!Blur
// nameField.addEventListener("blur", (e) => {
//   e.target.style.background="lime"
// })

//!Keydown
// let videoField = document.getElementById("videoField")
// let video = document.querySelector("video")
// console.log(videoField, video)
// videoField.addEventListener("keydown", () => {
//   console.log("Key is down")
//   video.play()
// })

//!Keyup
// videoField.addEventListener("keyup", () => {
//   console.log("Key is up")
//   video.pause()
// })

//!Domcontentloaded
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Dom Tree Generated")
// })

//!Event Propagation
// let outer = document.getElementById("outer")
// let inner = document.getElementById("inner")

//!Event Bubbling Phase
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 😠")
// },false)

// inner.addEventListener("click", () => {
//   alert("Inner Box Clicked 😉")
// }, false)

//!Event Capturing Phase
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 😠")
// },true)

// inner.addEventListener("click", () => {
//   alert("Inner Box Clicked 😉")
// },true)

//!stopPropagation()
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 😠")
// },false)

// inner.addEventListener("click", (e) => {
//   alert("Inner Box Clicked 😉")
//   e.stopPropagation()
// }, false)

//!Event Delegation
let ol = document.querySelector("ol")
ol.addEventListener("click", (e) => {
  console.log(e.target.textContent)
})