let form = document.querySelector("form")
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")
let phoneField = document.getElementById("phone")
let passwordField = document.getElementById("password")
let cpasswordField = document.getElementById("cpassword")
let passwordEye = document.getElementById("password_eye")
let cpasswordEye = document.getElementById("cpassword_eye")
let errorInfo = document.getElementById("error_info")

//!Show/Hide Password
let isPasswordVisible = false
passwordEye.addEventListener("click", () => {
  if (isPasswordVisible) {
    passwordField.type = "password"
    passwordEye.classList.replace("fa-eye-slash", "fa-eye")
    isPasswordVisible = false
  } else {
    passwordField.type = "text"
    passwordEye.classList.replace("fa-eye", "fa-eye-slash")
    isPasswordVisible = true
  }
})

//!Show/Hide Confirm Password
let isCPasswordVisible = false
cpasswordEye.addEventListener("click", () => {
  if (isCPasswordVisible) {
    cpasswordField.type = "password"
    cpasswordEye.classList.replace("fa-eye-slash", "fa-eye")
    isCPasswordVisible = false
  } else {
    cpasswordField.type = "text"
    cpasswordEye.classList.replace("fa-eye", "fa-eye-slash")
    isCPasswordVisible = true
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let name = nameField.value.trim()
  let email = emailField.value.trim()
  let phone = phoneField.value.trim()
  let password = passwordField.value
  let cpassword = cpasswordField.value

  errorInfo.innerHTML = ""
  errorInfo.style.color = "red"

  if (name === "" || name.length < 3 || name.length > 10) {
    errorInfo.innerText = "Name should be btwn 3-10 characters"
    return
  }

  if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
    errorInfo.innerText = "Enter a valid email"
    return;
  }

  if (phone.length != 10 || isNaN(phone)) {
    errorInfo.innerText = "Enter a valid number"
    return;
  }
  if (password.length < 3 || password.length > 8) {
    errorInfo.innerText = "Password should be btwn 3-8 characters"
    return;
  }
  if (password != cpassword) {
    errorInfo.innerText = "Password donot match"
    return;
  }

  errorInfo.innerHTML = "Registration Successful ✅"
  errorInfo.style.color = "green"
})