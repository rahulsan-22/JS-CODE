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
let anonymous1 = function () {
  console.log("I am Anonymous Function 🤗")
}
anonymous1()

//@Example 2:
let anonymous2 = function (num) {
  console.log(num*num)
}
anonymous2(5)
anonymous2(10)

//@Example 3:
let anonymous3 = function (name) {
  return "How are you 🤔? " + name
}
console.log(anonymous3("Yasin"))
console.log(anonymous3("Monty"))
console.log(anonymous3("Pavan"))