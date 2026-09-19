//!Promise
// let p = new Promise((resolve, reject) => {
//   let pistaHouse = true;
//   if (pistaHouse) {
//     resolve("Promise got resolved")
//   } else {
//     reject("Promise got rejected")
//   }
// })
// console.log(p)
// console.log(typeof p)
// p.then((res) => {
//   console.log(res + "Guys lets go inside n have something")
// })
// .catch((err) => {
//     console.log(err + "Sorry Guys i had a meeting")
// })
// .finally(() => {
//     console.log("Done")
// })

//!Promise Chaining
// Promise.resolve(10)
//   .then((res) => {
//     return res * 2
//   }).then((res) => {
//     return res + 20
//   }).then((res) => {
//     console.log(res + 100)
//   })

//!Promise.resolve()
// Promise.resolve("Hello")
//   .then((res) => {
//     console.log(res)
//   })

//!Promise.reject()
// Promise.reject("Bye")
//   .catch((err) => {
//     console.log(err)
//   })

//!Promise.all()
// Promise.all([
//   Promise.resolve(10),
//   Promise.resolve(20),
//   Promise.resolve(30)
// ])
// .then((res) => {
//     console.log(res)
// })

//!Promise.race() -- (First Settled)
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("First")
    }, 5000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second")
    }, 10000)
  })
])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

//!Promise.allSettled() -- (All settled promises)
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  Promise.resolve("Success")
])
  .then((res) => {
    console.log(res)
  })

//!Promise.any() -- (First Fulfilled Promise)
Promise.any([
  Promise.reject("Hello"),
  Promise.resolve("Hi"),
  Promise.resolve("Bye")
])
  .then((res) => {
    console.log(res)
  })