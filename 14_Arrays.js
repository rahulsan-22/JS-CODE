//!Arrays

//!Creation of an Array

//*1)Array Literal
// let snacks = ["Samosa", "Kachori", "Egg Puff"]
// let random = ["Pavan", 26, true]
// console.log(snacks) //["Samosa", "Kachori", "Egg Puff"]
// console.log(typeof snacks) //object
// console.log(random) //["Pavan", 26, true]
// console.log(typeof random) //object

//*2)Array Constructor
// let marks = new Array(45, 10, 30, 85)
// console.log(marks) //[45, 10, 30, 85]
// console.log(typeof marks) //object

//!Accessing the elements of an array
// let trainers = ["Monty", "Pavan", "Yasin", "Deva"]
// console.log(trainers[0]) //Monty
// console.log(trainers[2]) //Yasin
// console.log(trainers[-1]) //undefined
// console.log(trainers[10]) //undefined

//!Mutable (Can be changed after creation)
// let movies = ["Toxic", "Irumudi", "Paradise", "Fauzi"]
// console.log(movies) //["Toxic", "Irumudi", "Paradise", "Fauzi"]
// movies[2] = "Spirit"
// console.log(movies) //['Toxic', 'Irumudi', 'Spirit', 'Fauzi']

//!Length
// let subjects = ["Javascript", "Java", "Python", "Sql"]
// console.log(subjects.length) //4
// console.log(subjects[subjects.length-1]) //Sql
// console.log(subjects[subjects.length - 2]) //Python

//!Methods to add and remove the elements of an array
// let foodItems = ["Biryani","Apricot Delight"]
// console.log(foodItems)

//*1)push() -- adds the element at the end of an array
// foodItems.push("Chicken 65","Pizza")
// console.log(foodItems) //['Biryani', 'Apricot Delight', 'Chicken 65', 'Pizza']

//*2)pop() -- removes the last element of an array
// foodItems.pop()
// console.log(foodItems) //['Biryani', 'Apricot Delight', 'Chicken 65']

//*3)unshift() -- adds the element at the starting of an array
// foodItems.unshift("Pulihora", "Curd Rice")
// console.log(foodItems) //['Pulihora', 'Curd Rice', 'Biryani', 'Apricot Delight', 'Chicken 65']

//*4)shift() -- removes the first element of an array
// foodItems.shift()
// console.log(foodItems) //['Curd Rice', 'Biryani', 'Apricot Delight', 'Chicken 65']

//!BUILT-IN METHODS

//*1)Array.isArray()
// console.log(Array.isArray([10, 20, 30])) //true
// console.log(Array.isArray([])) //true
// console.log(Array.isArray("")) //false
// console.log(Array.isArray({})) //false

//*2)toString()
// let arr2 = ["Pvt","Omni","Krishnapatnam"]
// console.log(arr2.toString()) //Pvt,Omni,Krishnapatnam
// console.log(typeof arr2.toString()) //Pvt,Omni,Krishnapatnam

//*3)concat(...arr)
// let frontend = ["Html", "Css", "Js"]
// let backend = ["Java", "Python"]
// console.log(frontend.concat(backend)) //['Html', 'Css', 'Js', 'Java', 'Python']
// console.log(backend.concat("Sql", "ReactJs", frontend)) //['Java', 'Python', 'Sql', 'ReactJs', 'Html', 'Css', 'Js']

//*4)join(separator)
// let arr4 = ["Mobile", "Laptop", "Tv", "Ac"]
// console.log(arr4.join("-")) //Mobile-Laptop-Tv-Ac
// console.log(arr4.join("😎")) //Mobile😎Laptop😎Tv😎Ac
// console.log(arr4.join()) //Mobile,Laptop,Tv,Ac

//*5)reverse()
// let arr5 = ["Bmw", "Alto", "Thar", "Audi"]
// console.log(arr5.reverse()) //['Audi', 'Thar', 'Alto', 'Bmw']

//*6)includes(searchElement,startIndex)
// let arr6 = ["Parle-G", "GoodDay", "HappyHappy", "GoodDay", "MomsMagic", "Hide N Seek"]
// console.log(arr6.includes("GoodDay")) //true
// console.log(arr6.includes("JimJam")) //false
// console.log(arr6.includes("Parle-G",3)) //false
// console.log(arr6.includes("Parle-G",-3)) //false
// console.log(arr6.includes("Parle-G", -100)) //true

//*7)indexOf(searchElement,startIndex)
// let arr7 = ["Parle-G", "GoodDay", "HappyHappy", "GoodDay", "MomsMagic", "Hide N Seek"]
// console.log(arr7.indexOf("GoodDay")) //1
// console.log(arr7.indexOf("JimJam")) //-1
// console.log(arr7.indexOf("Parle-G",3)) //-1
// console.log(arr7.indexOf("GoodDay",-3)) //3
// console.log(arr7.indexOf("Parle-G", -100)) //0

//*8)slice(startIndex,endIndex)
// let arr8 = ["Upma", "Idli", "Dosa", "Uggani", "Puri", "Vada"]
// console.log(arr8.slice(3))  //["Uggani", "Puri", "Vada"]
// console.log(arr8.slice(1, 3)) //["Idli", "Dosa"]
// console.log(arr8.slice(4, 5)) //["Puri"]
// console.log(arr8.slice(3, 3)) //[]
// console.log(arr8.slice(-3, -1)) //["Uggani", "Puri"]
// console.log(arr8.slice(2, -2)) //["Dosa", "Uggani"]
// console.log(arr8.slice(5, 2)) //[]

//*9)splice(startIndex,deleteCount,elementsToBeAdded)
// let arr9 = ["Spiderman", "Lights"]
// console.log(arr9)

//@Adding Elements
// arr9.splice(1, 0, "Swastik", "Doraemon")
// console.log(arr9) //['Spiderman', 'Swastik', 'Doraemon', 'Lights']

//@Deleting Elements
// arr9.splice(0, 2)
// console.log(arr9) //['Doraemon','Lights']

//@Adding and Deleting
// arr9.splice(0, 1, "Bhai", "Ben10")
// console.log(arr9) //['Bhai', 'Ben10', 'Lights']

//@Adding and Deleting
// arr9.splice(1, 4, "ChotaBheem", "Sinchan")
// console.log(arr9) //['Bhai', 'ChotaBheem', 'Sinchan']

//@Adding and Deleting
// console.log(arr9.splice(-3, 4, "Stone"))
// console.log(arr9) //['Stone']

//!Higher Order Methods

//*1)forEach(fn(element,index,array))
// let trainers = ["Monty", "Pavan", "Yasin"]
// trainers.forEach((item,index,array) => {
//   console.log(item+"🙏",index,array)
//   console.log(item.toUpperCase())
//   console.log(item.at(0))
// })

//*2)map(fn(element,index,array))
// trainers.map((item,index,array) => {
//   console.log(item+"🙏",index,array)
//   console.log(item.toUpperCase())
//   console.log(item.at(0))
// })

//!Difference between forEach() and map()
// let num = [1, 2, 3]

// let forEachOutput = num.forEach((ele) => ele ** ele)
// console.log(forEachOutput)

// let mapOutput = num.map((ele) => ele ** ele)
// console.log(mapOutput)

//!3)filter(fn(element,index,array))
// let marks = [85, 45, 55, 15, 35]
// let filteredMarks = marks.filter((item) => {
//   return item > 50
// })
// console.log(filteredMarks) //[85,55]

//!4)find(fn(element,index,array))
// let findMark = marks.find((item) => {
//   return item > 50
// })
// console.log(findMark) //85

//!5)some(fn(element,index,array))
// let someMarks = marks.some((item) => {
//   return item > 50
// })
// console.log(someMarks) //true

//!6)every(fn(element,index,array))
// let everyMarks = marks.every((item) => {
//   return item > 50
// })
// console.log(everyMarks) //false

//!7)reduce(fn(accumulator,element,index,array),initialValue)
// let arr7 = [1, 2, 3, 4, 5]
// let reducedOutput = arr7.reduce((sum,ele) => {
//   return sum+=ele
// }, 0)
// console.log(reducedOutput)

//!8)sort(compareFn)
let arr8 = [5, 25, 1, 10, 2]
console.log(arr8.sort()) //[1, 10, 2, 25, 5] 
console.log(arr8.sort((a,b)=>a-b)) //[1, 2, 5, 10, 25]
console.log(arr8.sort((a, b) => b - a)) // [25, 10, 5, 2, 1]

let fruits = ["Banana", "WaterMelon", "Mango", "Kiwi", "Apple"]
console.log(fruits.sort()) //['Apple', 'Banana', 'Kiwi', 'Mango', 'WaterMelon']