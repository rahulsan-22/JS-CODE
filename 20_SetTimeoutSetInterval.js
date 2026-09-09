//!setTimeout(fn,time)
// setTimeout(() => {
//   document.writeln("<h1>Please Execute the code 😠</h1>")
// }, 5000)

//!setInterval(fn,time)
// setInterval(() => {
//   document.writeln("<h2>Dont be late to the class 😤</h2>")
// },1000)

//!clearInterval(id)
let count = 0;
let chai = setInterval(() => {
  document.writeln("<h1>Lets have chai</h1>")
  count++
  if (count >= 5) {
    document.writeln("<h1>Yasin,Is it chai or water</h1>")
    clearInterval(chai)
  }
}, 2000)

//!clearTimeout()
let kidnapOperation = setTimeout(() => {
  document.writeln("<h1>Kidnap Rahul Sir</h1>")
},5000)

setTimeout(() => {
  document.writeln("<h1>Rahul Sir is very gud lets not kidnap him</h1>")
  clearTimeout(kidnapOperation)
},3000)
