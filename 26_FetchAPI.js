//!Fetch using then(),catch(),finally()
// let api = fetch("https://dummyjson.com/recipes")
// api.then((res) => {
//   return res.json()
// }).then((res) => {
//   console.log(res.recipes)
// }).catch((err) => {
//   console.log(err)
// }).finally(() => {
//   console.log("Done")
// })

//!Fetch using async-await

//*Example 1
// let fetchingData1 = async () => {
//   try {
//     let data = await fetch("https://dummyjson.com/recipes")
//     let { recipes } = await data.json()
//     console.log(recipes)
//     let tbody = document.getElementById("tbody1")
//     recipes.forEach((item) => {
//       tbody.innerHTML += `
//       <tr>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.cuisine}</td>
//         <td>${item.ingredients}</td>
//         <td>${item.instructions}</td>
//         <td><img src=${item.image} alt=${item.name} height=200 width=200></td>
//       </tr>
//       `
//     })
//   } catch (err) {
//     console.log(err)
//   } finally {
//     console.log("Done")
//   }
// }
// fetchingData1()

//*Example 2:
// let fetchingData2 = async () => {
//   try {
//     let data = await fetch("https://fakestoreapi.com/products")
//     let res = await data.json()
//     let tbody = document.getElementById("tbody2")
//     res.forEach((item) => {
//       tbody.innerHTML += `
//       <tr>
//       <td>${item.id}</td>
//       <td>${item.title}</td>
//       <td>${item.category}</td>
//       <td>${item.description}</td>
//       <td>$${Math.round(item.price)}</td>
//       <td><img src=${item.image} alt=${item.title} height=200 width=200></td>
//       </tr>
//       `
//     })
//   } catch (err) {
//     console.log(err)
//   } finally {
//     console.log("Done")
//   }
// }
// fetchingData2()

//*Example 3:
let fetchingData3 = async () => {
  let data = await fetch("https://dog.ceo/api/breeds/image/random")
  let { message } = await data.json()
  let imgTag = document.createElement("img")
  imgTag.src = message
  imgTag.height = 300
  imgTag.width = 300
  document.body.prepend(imgTag)
}
