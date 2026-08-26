//!Arrays

//!Creation of an Array

//*1)Array Literal
let snacks = ["Samosa", "Kachori", "Egg Puff"]
let random = ["Pavan", 26, true]
console.log(snacks) //["Samosa", "Kachori", "Egg Puff"]
console.log(typeof snacks) //object
console.log(random) //["Pavan", 26, true]
console.log(typeof random) //object

//*2)Array Constructor
let marks = new Array(45, 10, 30, 85)
console.log(marks) //[45, 10, 30, 85]
console.log(typeof marks) //object

//!Accessing the elements of an array
let trainers = ["Monty", "Pavan", "Yasin", "Deva"]
console.log(trainers[0]) //Monty
console.log(trainers[2]) //Yasin
console.log(trainers[-1]) //undefined
console.log(trainers[10]) //undefined

//!Mutable (Can be changed after creation)
let movies = ["Toxic", "Irumudi", "Paradise", "Fauzi"]
console.log(movies) //["Toxic", "Irumudi", "Paradise", "Fauzi"]
movies[2] = "Spirit"
console.log(movies) //['Toxic', 'Irumudi', 'Spirit', 'Fauzi']

//!Length
let subjects = ["Javascript", "Java", "Python", "Sql"]
console.log(subjects.length) //4
console.log(subjects[subjects.length-1]) //Sql
console.log(subjects[subjects.length - 2]) //Python

//!Methods to add and remove the elements of an array
let foodItems = ["Biryani","Apricot Delight"]
console.log(foodItems)

//*1)push() -- adds the element at the end of an array
foodItems.push("Chicken 65","Pizza")
console.log(foodItems) //['Biryani', 'Apricot Delight', 'Chicken 65', 'Pizza']

//*2)pop() -- removes the last element of an array
foodItems.pop()
console.log(foodItems) //['Biryani', 'Apricot Delight', 'Chicken 65']

//*3)unshift() -- adds the element at the starting of an array
foodItems.unshift("Pulihora", "Curd Rice")
console.log(foodItems) //['Pulihora', 'Curd Rice', 'Biryani', 'Apricot Delight', 'Chicken 65']

//*4)shift() -- removes the first element of an array
foodItems.shift()
console.log(foodItems) //['Curd Rice', 'Biryani', 'Apricot Delight', 'Chicken 65']

