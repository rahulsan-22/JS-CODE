//!RE-DECLARATION
var a = 10;
var a = true;
console.log(a); //true

let b = 20;
let b = false;
console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared

const c = 30;
const c = "Pavan";
console.log(c); //Uncaught SyntaxError: Identifier 'c' has already been declared

//!RE-ASSIGNMENT
var a = 10;
a = true;
console.log(a); //true

let b = 10;
b = false;
console.log(b); //false

const c = 30;
c = "Monty";
console.log(c); //Uncaught TypeError: Assignment to constant variable.

//!MUST INITIALIZE WHILE DECLARATION
var a;
console.log(a); //undefined

let b;
console.log(b); //undefined

const c;
console.log(c); //Uncaught SyntaxError: Missing initializer in const declaration