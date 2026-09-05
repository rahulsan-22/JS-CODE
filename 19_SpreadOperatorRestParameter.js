//!Spread Operator (...)

//!Arrays

//*Copy the elements
// let bikes = ["KTM", "RE", "TVS", "BAJAJ"]
// let copiedArray = [...bikes]
// console.log(copiedArray) //['KTM', 'RE', 'TVS', 'BAJAJ']

//*Merge
// let frontend = ["Html", "Css", "Js"]
// let middleware = ["Python"]
// let backend = ["Sql"]
// let pythonFullStack = [...-frontend, ...middleware, ...backend]
// console.log(pythonFullStack) //['Html', 'Css', 'Js', 'Python', 'Sql']

//!Objects

//*Copy the properties
// let vehicle = {
//   name: "Car",
//   seater: 4
// }
// let copiedObj = { ...vehicle }
// console.log(copiedObj) //{name: 'Car', seater: 4}

//*Merge
// let movie = {
//   name: "Toxic",
//   ratings: 8.5
// }
// let cast = {
//   hero: "Yash",
//   heriones: ["Tara","Kiara","Rukku"]
// }
// let cinema = {
//   ...movie,...cast
// }
// console.log(cinema) //{name: 'Toxic', ratings: 8.5, hero: 'Yash', heriones: Array(3)}

//!Duplicate Keys
// let jspiders = {
//   sub: "Core Java",
//   trainer:"Pavan"
// }
// let qspiders = {
//   trainer:"Kavya"
// }
// console.log({ ...jspiders, ...qspiders }) //{sub: 'Core Java', trainer: 'Kavya'}

//!Functions
// let num = [1,2,3]
// function add(a, b, c) {
//   console.log(a+b+c) //6
// }
// add(...num)

//!Rest Parameter

//*Functions
function gatherValues(...num) {
  console.log(num) //[1,2,3,4,5]
}
gatherValues(1, 2, 3, 4, 5)

//*Example (Finding Sum)
function findingSum(...num) {
  let sum = 0;
  for (let val of num) {
    sum += val
  }
  return sum
}
console.log(findingSum(1, 2, 3, 4, 5)) //15
console.log(findingSum(10, 20, 30)) //60

//*Normal Parameters
function details(name, age, ...skills) {
  console.log(name) //Yasin
  console.log(age) //28
  console.log(skills) //['Sql', 'PlSql', 'PowerBi']
}
details("Yasin", 28, "Sql", "PlSql", "PowerBi")

//*Array Destructuring
let random = ["Dog", "Friend", "Cat", "BestFriend"]
let [a, b, ...c] = random
console.log(a) //Dog
console.log(b) //Friend
console.log(c) //['Cat', 'BestFriend']

//*Object Destructuring
let mobile = {
  brand: "Samsung",
  model: "S24",
  price: 85000,
  color: "Black"
}
let { brand, ...otherInfo } = mobile
console.log(brand) //Samsung
console.log(otherInfo) //{model: 'S24', price: 85000, color: 'Black'}