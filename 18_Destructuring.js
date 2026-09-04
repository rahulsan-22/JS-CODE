//!Destructuring
//*It is the process of extracting the values of arrays and objects later store them into a variable

//! Array Destructuring
// let liquorBrands = ["Mansion House", "Royal Stag", "Signature", "Teachers"]

//*Traditional Way
// console.log(liquorBrands[0])
// console.log(liquorBrands[1])
// console.log(liquorBrands[2])
// console.log(liquorBrands[3])

//*Destructuring Way
// let [l1, l2, l3, l4] = liquorBrands
// console.log(l1);
// console.log(l2);
// console.log(l3);
// console.log(l4);

//!Skipping Elements
// let stuffs = ["Fish Fry", "Omlet", "Peanuts", "Chips"]
// let [, s2, , s4] = stuffs
// console.log(s2)
// console.log(s4)

//! Default Values
// let drinks = ["Soda", "Thums Up"]
// let [d1, d2, d3 = "Water"] = drinks
// console.log(d1)
// console.log(d2)
// console.log(d3)

//! Swapping Variables
// let p = 10;
// let q = 20;
// [q, p] = [p, q]
// console.log(p)
// console.log(q)

//! Object Destructuring
let laptop = {
  brand: "Hp",
  price: 60000,
  color: "silver"
}
//*Traditional Way
console.log(laptop.brand)
console.log(laptop.price)
console.log(laptop.color)

//*Destructuring Way
let { brand, color, price } = laptop
console.log(brand)
console.log(color)
console.log(price)

//! Renaming Variables
let building = {
  name: "Pvt Market",
  place: "Chaitanyapuri",
  city: "Hyderabad"
}
let { name: peru, place: sthalam, city: patnam } = building
console.log(peru)
console.log(sthalam)
console.log(patnam)

//! Default Values in Objects
let nonVeg = {
  item: "Chicken",
  pricePerKg: 280,
  kg: 5
}
let { item, pricePerKg, kg = 1 } = nonVeg
console.log(item)
console.log(pricePerKg)
console.log(kg)

//! Nested Object Destructuring
let person = {
  name: "Monty",
  address: {
    place: "Gulbarga",
    pincode: 500065
  }
}
let { address: { place, pincode } } = person
console.log(place)
console.log(pincode)

//! Function Parameter Destructuring
function distraction({name,work}) {
  console.log(name)
  console.log(work)
}
distraction({name:"Someone",work:"usingPhone"})