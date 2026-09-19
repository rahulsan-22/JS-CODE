//!async
async function demo1() {
  return "Hello"
}
demo1().then((res) => {
  console.log(res)
})

//!Promise
function demo3() {
  return new Promise((resolve, reject) => {
    let hadCoffee = false;
    if (hadCoffee) {
      resolve("Promise got resolved")
    } else {
      reject("Promise got rejected")
    }
  })
}

//*Without await
demo3().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log("Done")
})

//*With await
async function handlingPromise() {
  try {
    let res = await demo3()
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Done")
  }
}
handlingPromise()

//!TASK
function task() {
  return new Promise((resolve, reject) => {
    let understandingPromises = false;
    if (understandingPromises) {
      resolve("Promise is very easy concept")
    } else {
      reject("Promise is a confusing concept")
    }
  })
}
task().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log("Done")
})

async function handlingConcept() {
  try {
    let res = await task()
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Done")
  }
}
handlingConcept()