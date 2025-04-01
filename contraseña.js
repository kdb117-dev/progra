function calcula_Contraseña() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;

    if ((usuario == "pavon" && contraseña == "117") || 
        (usuario == "messi" && contraseña == "110") || 
        (usuario == "de bruyne" && contraseña == "777")) {
        
        Swal.fire({
            title: "¡Acceso concedido!",
            text: "Bienvenido al sistema",
            icon: "success",
            position: "center",
        }).then((result) => {
            window.location = "index.html";
        });
    } else {
        Swal.fire({
            title: "Error de inicio de sesión",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            position: "center",
        });
    }
}





















