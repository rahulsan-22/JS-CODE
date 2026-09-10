console.log(window)

//!alert()
let bom1 = () => {
  alert("Be Careful with your mobile phone 😱")
}

//!confirm()
let bom2 = () => {
  confirm("Are you guys understanding JS?")
}

//!Combining Confirm() and Alert()
let bom3 = () => {
  let response = confirm("Will you marry me?")
  if (response) {
    alert("Your life is going to be beautiful")
  } else {
    alert("Are you the only girl in this world")
  }
}

//!prompt()
let bom4 = () => {
  let num1 = Number(prompt("Enter first number"))
  let num2 = Number(prompt("Enter second number"))
  console.log(num1 + num2)
}

//!open()
let a;
let bom5 = () => {
  a = open("https://www.flipkart.com/", "_blank", "height=300,width=450,top=200,left=500")
}

//!close()
let bom6 = () => {
  a.close()
}

//!print()
let bom7 = () => {
  print()
}

//!innerHeight and outerHeight
console.log(`innerHeight is ${innerHeight}`)
console.log(`outerHeight is ${outerHeight}`)

//!innerWidth and outerWidth
console.log(`innerWidth is ${innerWidth}`)
console.log(`outerWidth is ${outerWidth}`)

//!Location

//*href
console.log(location.href)

//*protocol
console.log(location.protocol)

//*host
console.log(location.host)

//*port
console.log(location.port)

//*search
console.log(location.search)

//*reload()
let bom8 = () => {
  location.reload()
}

//*assign()
let bom9 = () => {
  location.assign("https://www.flipkart.com/")
}

//*replace()
let bom10 = () => {
  location.replace("https://www.amazon.com/")
}

//!History

//*forward()
let bom11 = () => {
  history.forward()
}

//*back()
let bom12 = () => {
  history.back()
}

//*go()
let bom13 = () => {
  history.go(4)
}

let bom14 = () => {
  history.go(-4)
}

//!Navigator

//*language
console.log(navigator.language)

//*online
console.log(navigator.onLine)

//*geolocation api
let bom15 = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    // 17.367803336682275,78.53685536562719
  })
}

//!WEB STORAGE SYSTEMS

//!sessionStorage

//*setItem()
// sessionStorage.setItem("name","Yasin")
// sessionStorage.setItem("age",30)
// sessionStorage.setItem("place", "Ooty")

//*getItem()
// console.log(sessionStorage.getItem("name"))

//*removeItem()
// sessionStorage.removeItem("place")

//*clear()
// sessionStorage.clear()

//!localStorage

//*setItem()
// localStorage.setItem("name","Monty")
// localStorage.setItem("age",28)
// localStorage.setItem("place", "Gulbarga")

//*getItem()
// console.log(localStorage.getItem("name"))

//*removeItem()
// localStorage.removeItem("place")

//*clear()
// localStorage.clear()