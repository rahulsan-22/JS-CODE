//!GLOBAL SCOPE
// var name1 = "Monty"
// let name2 = "Pavan"
// const name3 = "Yasin"

//*Accessing Directly
// console.log(name1) //Monty
// console.log(name2) //Pavan
// console.log(name3) //Yasin

//*Accessing inside function
// function demo() {
//   console.log(name1) //Monty
//   console.log(name2) //Pavan
//   console.log(name3) //Yasin
// }
// demo()

//*Accessing inside block
// {
//   console.log(name1) //Monty
//   console.log(name2) //Pavan
//   console.log(name3) //Yasin
// }

//!GLOBAL VS SCRIPT SCOPE
// console.log(window.name1) //Monty
// console.log(window.name2) //Pavan
// console.log(window.name3) //Yasin

//!FUNCTION SCOPE
// function hello() {
//   {
//     var item1 = "Biryani"
//     let item2 = "Apricot Delight"
//     const item3 = "Water Bottle"
//   }
//   console.log(item1) //Biryani
//   console.log(item2) //Uncaught ReferenceError: item2 is not defined
//   console.log(item3)  //Uncaught ReferenceError: item3 is not defined
// }
// hello()

//*Accessing outside the function
// console.log(item1) //Uncaught ReferenceError: item1 is not defined
// console.log(item2) //Uncaught ReferenceError: item2 is not defined
// console.log(item3) //Uncaught ReferenceError: item3 is not defined

//!BLOCK SCOPE
// {
//   var restaurant1 = "KrishnaPatnam"
//   let restaurant2 = "Mehfil"
//   const restaurant3 = "Pista House"
//   console.log(restaurant1) //KrishnaPatnam
//   console.log(restaurant2) //Mehfil
//   console.log(restaurant3) //Pista House
// }

//*Accessing outside block
// console.log(restaurant1) //KrishnaPatnam
// console.log(restaurant2) //Uncaught ReferenceError: restaurant2 is not defined
// console.log(restaurant3) //Uncaught ReferenceError: restaurant3 is not defined

//!Lexical Scope
function outer() {
  const wines = "Deccan"
  function inner() {
    console.log(wines)
  }
  inner()
}
outer()
