//!IF
// let area = "chaitanyapuri"
// if (area === "chaitanyapuri") {
//   console.log("Dum unte na area ki ra 🤬🔥")
// }

//!IF-ELSE
// if (area === "chaitanyapuri") {
//   console.log("Dum unte na area ki ra 🤬🔥")
// } else {
//   console.log("Godavlu yenduku lets compromise 🍻")
// }

//! ELSE - IF
// let amount = 200
// if (amount >= 250) {
//   console.log("Pista House Biryani")
// } else if (amount >= 200 && amount < 250) {
//   console.log("Mehfil Biryani")
// } else if (amount >= 100 && amount < 200) {
//   console.log("Sai Krupa Biryani")
// } else {
//   console.log("Neelu tagi paduko")
// }

//!NESTED IF
// let jsClassThere = true
// let friendPresent = true

// if (jsClassThere) {
//   if (friendPresent) {
//     console.log("Attend JS Class")
//   }
// }

//!SWITCH

//*Example 1:
let trainer = "Rahul"
switch (trainer) {
  case "Yasin": console.log("SQL Trainer");
    break;
  case "Monty": console.log("Python Trainer");
    break;
  case "Pavan": console.log("Core Java Trainer");
    break;
  default: console.log("Not a popular trainer")
}

//*Example 2:
let amount = 100
switch (true) {
  case (amount >= 250):
    console.log("Pista House Biryani")
    break;
  case (amount >= 200 && amount < 250):
    console.log("Mehfil Biryani")
    break;
  case (amount >= 100 && amount < 200):
    console.log("Sai Krupa Biryani")
    break;
  default:
    console.log("Neelu tagi paduko")
}



