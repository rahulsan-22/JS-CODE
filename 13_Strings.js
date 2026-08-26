//!Strings

//!Ways of creating a string

//*1)Single Quotes
// let day = 'Monday'
// let date = '24'
// console.log(day) //Monday
// console.log(typeof day) //string
// console.log(date) //24
// console.log(typeof date) //string

//*2)Double Quotes
// let breakfast = "Dosa"
// let lunch = "Biryani"
// console.log(breakfast) //Dosa
// console.log(typeof breakfast) //string
// console.log(lunch) //Biryani
// console.log(typeof lunch) //string

//*3)BackTicks (String Literals/Template String) ES6
// let weather = `rainy`
// console.log(weather) //rainy
// console.log(typeof weather) //string

//@Speciality of Backticks
//*Interpolation
// let firstName = "Monster"
// let lastName = "Monty"
// console.log(`My fullname is ${firstName} ${lastName} and my age is ${30 - 2}`)
//*Multi-Line String
// console.log(`
// Had
// Breakfast
// ?`)

//!Accessing characters of a string
// let place = "PVT MARKET"
// console.log(place[5]) //A
// console.log(place[2]) //T
// console.log(place[-1]) //undefined
// console.log(place[100]) //undefined

//!Immutable (Once created cannot be changed)
// let sub = "PYTHON"
// console.log(sub)
// sub[4] = "I"
// console.log(sub)

//!Length
// let cafe = "Tea Break"
// console.log(cafe.length) //9
// console.log(cafe[cafe.length - 1]) //k
// console.log(cafe[cafe.length - 2]) //a

//!Built-in Methods

//!1)toLowerCase()
// let str1 = "lApToP"
// console.log(str1.toLowerCase()) //laptop

//!2)toUpperCase()
// let str2 = "mArKeR"
// console.log(str2.toUpperCase()) //MARKER

//!3)trim()
// let str3 = "    Keyboard Remote Charger    "
// console.log(str3.trim()) //Keyboard Remote Charger

//!4)at(index)
// let place = "PVT MARKET"
// console.log(place.at(5)) //A
// console.log(place.at(2)) //T
// console.log(place.at(-1)) //T
// console.log(place.at(100)) //undefined

//!5)slice(startIndex,endIndex)
// let str5 = "IM STILL UNEMPLOYED"
// console.log(str5.slice(5)) //ILL UNEMPLOYED
// console.log(str5.slice(9,18)) //UNEMPLOYE
// console.log(str5.slice(2, 5)) // ST
// console.log(str5.slice(3,3)) //""
// console.log(str5.slice(-15,-8)) //TILL UN
// console.log(str5.slice(-11,15)) // UNEMPL
// console.log(str5.slice(-11,0)) //""
// console.log(str5.slice(10, 5)) //""

//!6)substring(startIndex,endIndex)
// let str6 = "IM STILL UNEMPLOYED"
// console.log(str6.substring(5)) //ILL UNEMPLOYED
// console.log(str6.substring(9,18)) //UNEMPLOYE
// console.log(str6.substring(2, 5)) // ST
// console.log(str6.substring(3,3)) //""
// console.log(str6.substring(-15,-8)) //""
// console.log(str6.substring(-11,15)) //IM STILL UNEMPL
// console.log(str6.substring(-11,0)) //""
// console.log(str6.substring(10,5)) //ILL U

//!7)includes(searchValue,startIndex)
// let str7 = "MONTY SIR LOVES SRILEELA"
// console.log(str7.includes("M")) //true
// console.log(str7.includes("Z")) //false
// console.log(str7.includes("M",5)) //false
// console.log(str7.includes("M",-10)) //true
// console.log(str7.includes("LOVE")) //true
// console.log(str7.includes("SIR",6)) //true
// console.log(str7.includes("SIR", 7)) //false

//!8)indexOf(searchValue,startIndex)
// let str8 = "MONTY SIR LOVES SRILEELA"
// console.log(str8.indexOf("M")) //0
// console.log(str8.indexOf("Z")) //-1
// console.log(str8.indexOf("O",5)) //11
// console.log(str8.indexOf("O",-10)) //1
// console.log(str8.indexOf("LOVE")) //10
// console.log(str8.indexOf("SIR",6)) //6
// console.log(str8.indexOf("SIR", 7)) //-1

//!9)replace(oldString,newString)
// let str9 = "PAVAN LOVES SWATHI PAVAN LOVES SWATHI"
// console.log(str9.replace("LOVES","HATES")) //PAVAN HATES SWATHI PAVAN LOVES SWATHI
// console.log(str9.replaceAll("LOVES","HATES")) //PAVAN HATES SWATHI PAVAN HATES SWATHI

//!10)split(separator,limit)
// let str10 = "RCB DC SRH CSK MI"
// console.log(str10.split(" ")) //['RCB', 'DC', 'SRH', 'CSK', 'MI']
// console.log(str10.split(" ", 2)) //['RCB', 'DC']
// console.log(str10.split("R")) //["","CB DC S","H CSK MI"]

//!11)startsWith(searchValue,startIndex)
// let str11 = "No Concern upon Trainer"
// console.log(str11.startsWith("No")) //true
// console.log(str11.startsWith("C")) //false
// console.log(str11.startsWith("C", 3)) //true
// console.log(str11.startsWith("C", -10)) //false
// console.log(str11.startsWith("up", 12)) //false

//!12)endsWith(searchValue,length)
// let str12 = "Please allow trainer into the lift"
// console.log(str12.endsWith("lift")) //true
// console.log(str12.endsWith("li")) //false
// console.log(str12.endsWith("li",32)) //true
// console.log(str12.endsWith("li",-10)) //false