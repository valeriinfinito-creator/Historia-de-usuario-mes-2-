// Mensaje de bienvenida
alert("Welcome to my portfolio");

// Cambiar texto
function cambiarTexto() {
    document.getElementById("texto").textContent =
        "The text was changed using JavaScript";
}

// Mostrar o ocultar contenido
function mostrarOcultar() {
    const contenido = document.getElementById("contenido");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}
