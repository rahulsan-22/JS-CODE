//!FOR-LOOP
for (let i = 1; i <= 5; i++){
  document.writeln("<h1>Sorry 🥺</h1>")
}

//!WHILE LOOP
let j = 1;
while (j <= 5) {
  document.writeln("<h1>I LOVE YOU 💖</h1>")
  j++
}

//!DO-WHILE LOOP
let k = 1;
do {
  document.writeln("<h1>Will you marry me 💍?</h1>")
  k++
} while (k <= 2)
  
//!FOR-IN LOOP
let person = {
  name: "Monty",
  age: 28,
  isMarried:true
}
for (let keys in person) {
  console.log(keys)
}

//!FOR-OF LOOP
let str = "Loops"
let arr = ["Chai", "Biscuit", "Coffee"]
for (let characters of str) {
  console.log(characters)
}

for (let elements of arr) {
  console.log(elements)
}