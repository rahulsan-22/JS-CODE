let heading = document.getElementById("heading")
let poster = document.getElementById("poster")
let para = document.getElementById("para")

//!Change Poster Functionality
let changePoster = () => {
  heading.innerText = "🔥 New Avatar Released!"
  poster.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJIpaV2qCIqKMACUXH5hXFaEie-jWSnezog&s")
  para.innerHTML = "<mark>A new blockbuster avatar has arrived in Qspiders!</mark>"
}

//!Add Border Functionality
let addBorder = () => {
  poster.style.border = "10px solid gold"
  para.innerText = "✨ The poster now shines like a star!"
}

//!Replace Text Functionality
let replaceText = () => {
  heading.innerText = "Successfully Replaced Description🥳"
  heading.style.color = "red"
  para.innerHTML = "🎭<b>Fun Fact</b>: This poster was created using <u>DOM Manipulation!</u>"
}

//!Reset Functionality
let reset = () => {
  heading.innerText = "🎥 Welcome to Poster Task"
  heading.style.color = "black"
  poster.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlf9CtAHa3sICzm4fj-VlZfTpbnerJuU2tg&s")
  poster.style.border = "none"
  para.innerText = "Click the buttons below to change the poster details dynamically!"
}