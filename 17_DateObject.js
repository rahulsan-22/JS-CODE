//*Current Date and Time
// let currentDate = new Date()
// console.log(currentDate)

//*Specific Date
// let specificDate = new Date("2026-09-14")
// console.log(specificDate)

//*Specific Date and Time
// let specificDateTime1 = new Date("1947-08-15T23:59:59")
// console.log(specificDateTime1)

//*Specific Date and Time (Parameters)
// let specificDateTime2 = new Date(2000, 3, 1, 13, 30, 45, 777)
// console.log(specificDateTime2)

//!Date - Time (Get Methods)
// let d1 = new Date()
// console.log(d1)

//*getFullYear()
// console.log(d1.getFullYear())

//*getMonth()
// console.log(d1.getMonth())

//*getDate()
// console.log(d1.getDate())

//*getDay()
// console.log(d1.getDay())

//*getHours()
// console.log(d1.getHours())

//*getMinutes()
// console.log(d1.getMinutes())

//*getSeconds()
// console.log(d1.getSeconds())

//*getMilliseconds()
// console.log(d1.getMilliseconds())

//*getTime()
// console.log(d1.getTime())

//!Date - Time (Set Methods)
// let d2 = new Date()
// console.log(d2)

//*setFullYear()
// d2.setFullYear(2004)
// console.log(d2)

//*setMonth()
// d2.setMonth(11)
// console.log(d2)

//*setDate()
// d2.setDate(25)
// console.log(d2)

//*setHours()
// d2.setHours(18)
// console.log(d2)

//*setMinutes()
// d2.setMinutes(45)
// console.log(d2)

//*setSeconds()
// d2.setSeconds(20)
// console.log(d2)

//!Date-Time Formatting Methods
// let d3 = new Date()
// console.log(d3)

//*toDateString()
// console.log(d3.toDateString())

//*toTimeString()
// console.log(d3.toTimeString())

//*toLocaleDateString()
// console.log(d3.toLocaleDateString())

//*toLocaleTimeString()
// console.log(d3.toLocaleTimeString())

//*toLocaleString()
// console.log(d3.toLocaleString())

//!Date.now()
console.log(Date.now())

//!Calculate Age
let birthYear = 2004
let currentYear = new Date().getFullYear()
console.log(`Your Age is ${currentYear - birthYear}`)

//!Check Weekend or WeekDay
let currentDay = new Date().getDay()
if (currentDay == 0 || currentDay == 6) {
  console.log("Weekend")
} else {
  console.log("Weekday")
}

//!Count Number of Days
let dateA = new Date("2026-09-03")
let dateB = new Date("2027-01-01")
let differenceInMilliSeconds = dateB.getTime() - dateA.getTime()
let days = differenceInMilliSeconds/(24*60*60*1000)
console.log(days)
