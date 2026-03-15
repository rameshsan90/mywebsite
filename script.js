function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "rameshsan90@gmail.com" && password === "**********") {
    alert("Login successful!");
    errorMessage.textContent = "";
    return true;
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false;
  }
}