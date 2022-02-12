const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const emailText = emailField.value;
  const passwordText = passwordField.value;
  if (emailText === "sontan@baap.com" && passwordText === "secret") {
    window.location.href = "banking.html";
  }
});
