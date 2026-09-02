// console.log(Math)

//*1)PI
// console.log(Math.PI)

//*2)E
// console.log(Math.E)

//*3)SQRT2
// console.log(Math.SQRT2)

//*4)ROUND()
// console.log(Math.round(45.5)) //46
// console.log(Math.round(45.345)) //45
// console.log(Math.round(45.89)) //46

//*5)FLOOR()
// console.log(Math.floor(-1.8)) //-2
// console.log(Math.floor(-0.3)) //-1
// console.log(Math.floor(0.3)) //0
// console.log(Math.floor(1.8)) //1

//*6)CEIL()
// console.log(Math.ceil(-1.8)) //-1
// console.log(Math.ceil(-0.3)) //-0
// console.log(Math.ceil(0.3)) //1
// console.log(Math.ceil(1.8)) //2

//*7)TRUNC()
// console.log(Math.trunc(-1.8)) //-1
// console.log(Math.trunc(-0.3)) //-0
// console.log(Math.trunc(0.3)) //0
// console.log(Math.trunc(1.8)) //1

//*8)ABS()
// console.log(Math.abs(-1.8)) //1.8
// console.log(Math.abs(-0.3)) //0.3
// console.log(Math.abs(0.3)) //0.3
// console.log(Math.abs(1.8)) //1.8

//*9)CBRT()
// console.log(Math.cbrt(8)) //2
// console.log(Math.cbrt(64)) //4

//*10)SQRT()
// console.log(Math.sqrt(25)) //5
// console.log(Math.sqrt(81)) //9

//*11)POW()
// console.log(Math.pow(2, 4)) //16
// console.log(Math.pow(6, 5)) //7776
// console.log(2 ** 4) //16
// console.log(6 ** 5) //7776

//*12)MAX()
// console.log(Math.max(5, 1, 3, 2, 0)) //5

//*13)MIN()
// console.log(Math.min(5, 1, 3, 2, 0)) //0

//*14)SIGN()
// console.log(Math.sign(18)) //1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(-18)) //-1
// console.log(Math.sign(-0)) //-0

//*15)TOFIXED()
console.log(12.456789.toFixed(1)) //12.5
console.log(12.456789.toFixed(3)) //12.457
console.log(12.241.toFixed(2)) //12.24

//*16)RANDOM()
console.log(Math.random())

console.log(Math.random() * 10)

console.log(Math.round(Math.random()*100))

let max = 999999
let min = 100000
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
