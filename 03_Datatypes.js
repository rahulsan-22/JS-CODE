//!PRIMITIVE DATATYPES

//!1)NUMBER
// var num1 = 10;
// var num2 = 10.25;
// console.log(num1) //10
// console.log(typeof num1) //number
// console.log(num2) //10.25
// console.log(typeof num2) //number

//!2)STRING
// let str1 = 'Yasin';
// let str2 = "Monty";
// let str3 = `Pavan`
// console.log(str1) //Yasin
// console.log(typeof str1) //string
// console.log(str2) //Monty
// console.log(typeof str2) //string
// console.log(str3) //Pavan
// console.log(typeof str3) //string

//!3) BOOLEAN
// const isLoggedIn = true;
// const feelingSleepy = false;
// console.log(isLoggedIn) //true
// console.log(typeof isLoggedIn) //boolean
// console.log(feelingSleepy) //false
// console.log(typeof feelingSleepy) //boolean

//!4)UNDEFINED
// var trainer;
// console.log(trainer) //undefined
// console.log(typeof trainer) //undefined

//!5)NULL
// let container = null;
// console.log(container); //null
// console.log(typeof container); //object (bug)

//!6)BIGINT
// let accountNo = 123456789123456789123456n
// console.log(accountNo) //123456789123456789123456n
// console.log(typeof accountNo) //bigInt

//!7)SYMBOL
// let pythonTrainer = Symbol("Monty")
// let modelOfQspider = Symbol("Monty")
// console.log(pythonTrainer) //Symbol(Monty)
// console.log(typeof pythonTrainer) //symbol
// console.log(pythonTrainer == modelOfQspider) //false

//!NON-PRIMITIVE DATATYPES

//!1)OBJECT
let info = {
  name: "Pavan",
  age: 26,
  place:"Mysore"
}
console.log(info) //{name: 'Pavan', age: 26, place: 'Mysore'}
console.log(typeof info) //object

//!2)ARRAY
let subjects = ["Html", "Css", "Js"]
console.log(subjects) //["Html", "Css", "Js"]
console.log(typeof subjects) //object

//!3)FUNCTION
function greet() {
  console.log("Good Morning 🧡")
}
greet()
greet()
greet()