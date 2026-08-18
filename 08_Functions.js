//!Functions

//!Function Declaration
//* function keyword as well as function name

//!1)Normal Function
//* A function declared without parameters and without return value

//@Example :
// function greet() {
//   console.log("Good Morning...😉")
// }
// greet()
// greet()
// greet()

//!2)Parameterized Function
//*Function which accepts input through function call

//@Example:
// function findingPow(x,y) {
//   console.log(x**y)
// }
// findingPow(2,2)
// findingPow(5,3)
// findingPow(5)

//!3)Return Function
//* Function which returns the value

//@Example 1:
// function confess() {
//   return "I love you 💖"
// }
// console.log(confess())

//@Example 2:
// function findingSum(a,b) {
//   return a+b
// }
// console.log(findingSum(2,3))
// console.log(findingSum(10,"abc"))
// console.log(findingSum(10,"abc",20))
// console.log(findingSum())

//!FUNCTION EXPRESSION
//*Functions are stored into the variables and functions are treated like values

//!1)ANONYMOUS FUNCTION
//*Function without function name

//@Example 1:
// let anonymous1 = function () {
//   console.log("I am Anonymous Function 🤗")
// }
// anonymous1()

//@Example 2:
// let anonymous2 = function (num) {
//   console.log(num*num)
// }
// anonymous2(5)
// anonymous2(10)

//@Example 3:
// let anonymous3 = function (name) {
//   return "How are you 🤔? " + name
// }
// console.log(anonymous3("Yasin"))
// console.log(anonymous3("Monty"))
// console.log(anonymous3("Pavan"))

//!2)Arrow Function
//*ES6(2015)
//*Shorter syntax
//*Doesnt have function keyword as well as function name
//*Most widely used in Javascript and React.js

//@Example 1:
// let arrow1 = () => {
//   console.log("I am Arrow function")
// }
// arrow1()

//@Example 2:
// let arrow2 = (num) => {
//   console.log(num*num*num)
// }
// arrow2(2)
// arrow2(4)

//!Based upon return type arrow function is divided into two types

//!i)Explicit Return Arrow function
//*To return a value in a arrow function if we use return keyword manually
// let explicit = (a,b) => {
//   return a+b
// }
// console.log(explicit(2,3))

//!ii)Implicit Return Arrow function
//*To return a value in a arrow function if we use  donot use return keyword manually (Javascript automatically returns the value)
//*Here dont use curly braces
//*Single line expression / functions
// let implicit = (a, b) => a+b
// console.log(implicit(2,3))

//! 3)Immediately invoked function expression (IIFE)
//* Executes immediately after its creation
//* They need to be wrapped inside () and should be called immediately using ()
//* Executes only once
//* Avoid Global Scope Pollution

//@Example 1:
// (function normal() {
//   console.log("Normal IIFE")
// })();

//@Example 2:
// (function (a, b) {
//   console.log(a + b)
// })(10, 20);

//@Example 3:
// let result = ((x, y) => {
//   return x**y
// })
// console.log(result(2,2))

//!Higher Order and Callback Function

//!Higher Order Function

//*Function takes another function as its argument

//@Example 1:
// function user(title, name, fn) {
//   return fn(title, name)  //greet("Monster","Monty") //greet("Powerstar","Pavan")
// }
// function greet(title, name) {
//   console.log("Good Morning 🌅 " + title + " " + name)
// }
// user("Monster", "Monty", greet)
// user("Powerstar", "Pavan", greet)

//@Example 2:
// let add = (a, b) => a + b
// let sub = (a, b) => a - b
// let mul = (a, b) => a * b
// let div = (a, b) => a / b
// let calculator = (a,b,fn) => fn(a,b)
// console.log(calculator(10,20,add))
// console.log(calculator(10,20,sub))
// console.log(calculator(10,20,mul))
// console.log(calculator(10,20,div))

//!The function which is passed as an argument to hof is known as callback function

//*Function returns another function

//@Example 1:
// function outer() {
//   console.log("Outer Function Executed")
//   return function inner() {
//     console.log("Inner Function Executed")
//   }
// }
//$1st Way of Executing
// let result = outer()
// result()
//$2nd Way of Executing (Currying)
// outer()()

//@Example 2:
// let qspiders = (name) => {
//   return (subject) => {
//     return (duration) => {
//       return "I am "+name+" i teach "+subject+" in a span of "+duration+" days"
//     }
//   }
// }
// console.log(qspiders("Yasin")("Sql")(30))
// console.log(qspiders("Monty")("Python")(90))

//!Function Currying
//*It is the process of transforming Function with multiple arguments into Nested series of function taking single argument

//*Function with multiple arguments
function add1(a, b, c) {
  return a + b + c
}
console.log(add1(10, 20, 30))

//*Nested series of function taking single argument
function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add2(10)(20)(30))

//*Arrow Function
let add3 = a => b => c => a + b + c
console.log(add3(10)(20)(30))