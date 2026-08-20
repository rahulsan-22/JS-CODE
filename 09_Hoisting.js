//!Variable Hoisting

//!var
// console.log(a);
// var a = 10;

//!let
// console.log(b);
// let b = 20;

//!const
// console.log(c);
// const c = 30;


//!Function Hoisting

//!Function Declaration
greet()
function greet() {
  console.log("Good Morning Guys....")
}

//!Function Expression

//!var
demo1()
var demo1 = () => {
  console.log("Had Breakfast?")
}

//!let
demo2()
let demo2 = () => {
  console.log("Had Breakfast?")
}

//!const
demo3()
const demo3 = () => {
  console.log("Had Breakfast?")
}