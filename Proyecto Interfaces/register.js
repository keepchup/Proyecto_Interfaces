const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let correo = document.getElementById("regEmail").value;
  let user = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value; 

  if (correo == "" || user == "" || password == ""){
    alert("Llenar todos los campos es obligatorio")
  }  else{
        alert("Registro exitoso")
        window.location.href='index.html'
    }
});