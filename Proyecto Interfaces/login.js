const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user == "" || pass == ""){
    alert("Llenar todos los campos es obligatorio");
  } else {
    if(user == "admin" && pass == "admin"){
        window.location.href="index.html"
    }
  }
});
