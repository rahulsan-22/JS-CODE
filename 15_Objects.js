//!Objects
//*Objects are used to store the data in the form of key-value pair.
//*The combination of key-value pair is known as property.
//*Objects can store different datatypes.
//*Objects are mutable.
//*Objects are dynamic in size.
//*Objects are mainly used to represent real world entity.

//!Ways of creating an Object

//*1)Object Literal
// let bioData1 = {
//   name: "Monty",
//   age: 30,
//   isEmployee: true,
//   hasExGirlfriends: undefined,
//   hasAttitude: null,
//   skills: ["Cooking", "Singing", "Dancing"],
//   profession: () => "Python Trainer",
//   address: {
//     place: "Gulbarga",
//     pincode: 500065
//   }
// }
// console.log(bioData1)
// console.log(typeof bioData1)

//*2)Object Contructor
// let bioData2 = new Object()
// bioData2.name = "Pavan"
// bioData2.age = 26,
// bioData2.isEmployee = true,
// bioData2.hasExGirlfriends = undefined,
// bioData2.hasAttitude = null,
// bioData2.skills = ["Cooking", "Singing"],
// bioData2.profession = () => "Core Java Trainer",
// bioData2.address = {
//     place: "Mysore",
//     pincode: 500065
// }
// console.log(bioData2)
// console.log(typeof bioData2)

//!Accessing the properties of an object

//*1)Dot Notation
// console.log(bioData1.name) //Monty
// console.log(bioData2.skills[1]) //Singing
// console.log(bioData1.profession()) //Python Trainer
// console.log(bioData2.address.place) //Mysore

//*2)Box/Bracket Notation
// console.log(bioData1["name"]) //Monty
// console.log(bioData2["skills"][1]) //Singing
// console.log(bioData1["profession"]()) //Python Trainer
// console.log(bioData2["address"]["place"]) //Mysore

//!Mutable?
// let simpleObj = {
//   name: "Someone",
//   age: 18,
//   place:"Somewhere"
// }
// console.log(simpleObj)
// simpleObj.age = 25
// console.log(simpleObj)

//!Why Box/Bracket Notation?
// let sports = {
//   name: "Cricket",
//   players: 11,
//   bestBatsman:"Monty"
// }
// for (let keys in sports) {
//   console.log(sports[keys])
// }

//!Basic Operations

//*Adding Properties
// let hyderabad = {
//   famousFood: "Biryani",
//   famousPlace: "Charminar"
// }
// hyderabad.famousHero = "Prabhas"
// console.log(hyderabad)

//*Updating Properties
// let breakfast = {
//   name: "Dosa",
//   price: 40
// }
// breakfast.price = 60
// console.log(breakfast)

//*Deleting /Removing Properties
// let lunch = {
//   title: "Biryani",
//   price: 240,
//   place: "Mehfil"
// }
// delete lunch.place
// console.log(lunch)

//!Built-in Methods
// let chips = {
//   name: "Lays",
//   price: 10
// }

//*1)Object.keys(obj)
// console.log(Object.keys(chips)) //['name','price']

//*2)Object.values(obj)
// console.log(Object.values(chips)) //['Lays',10]

//*3)Object.entries(obj)
// console.log(Object.entries(chips)) //[['name','Lays'],['price',10]]

//*4)Object.fromEntries(nestedArray)
// let trainer = [
//   ["name", "Monty"],
//   ["subject", "Python"]
// ]
// console.log(Object.fromEntries(trainer)) //{name:"Monty",subject:"Python"}

//*5)Object.assign(target,...source)

//@Example 1: (Object to Object)
// let movie = {
//   title: "Toxic",
//   hero:"Yash"
// }
// let ratings = {
//   star:8
// }
// console.log(Object.assign({}, movie, ratings))

//@Example 2: (String to Object)
// let str = "Hi"
// console.log(Object.assign({}, str)) //{0:"H",1:"i"}

//@Example 3: (Array to Object)
// let arr = ["Chair","Ac","Mic"]
// console.log(Object.assign({}, arr)) //{0: 'Chair', 1: 'Ac', 2: 'Mic'}

//@Example 4:
// console.log(Object.assign({},movie,ratings,str,arr)) //{0: 'Chair', 1: 'Ac', 2: 'Mic', title: 'Toxic', hero: 'Yash', star: 8}

//*6)Object.seal(obj)
let biscuit = {
  name: "Jim-Jam",
  price: 30,
}
Object.seal(biscuit)
biscuit.qty = 12
biscuit.price = 40
delete biscuit.name
console.log(biscuit) //{name: 'Jim-Jam', price: 40}

//*7)Object.freeze(obj)
let chocolate = {
  name: "Kit-Kat",
  price: 10
}
Object.freeze(chocolate)
chocolate.qty = 2
chocolate.price = 15
delete chocolate.name
console.log(chocolate) //{name: 'Kit-Kat', price: 10}

//!Checking Existence
let vehicle = {
  name: "Bus",
  seats: 30,
  wheels: 6,
  color: "red"
}

//*1)in
console.log("name" in vehicle) //true
console.log("state" in vehicle) //false
console.log("toString" in vehicle) //true

//*2)hasOwnProperty()
console.log(vehicle.hasOwnProperty("name")) //true
console.log(vehicle.hasOwnProperty("state")) //false
console.log(vehicle.hasOwnProperty("toString")) //false