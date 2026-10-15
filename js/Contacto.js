
const formulario = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaContacto");
const boton = document.getElementById("btnEnviar");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar campos vacíos
    if (!nombre || !correo || !mensaje) {
        respuesta.textContent = "Por favor, completa todos los campos.";
        return;
    }

    // Validar formato del correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        respuesta.textContent = "Escribe un correo electrónico válido.";
        return;
    }

    // Dirección que recibirá el mensaje
    const destino = "TU_CORREO@EJEMPLO.COM";

    const asunto = "Nuevo mensaje desde mi portafolio";

    const contenido =
        "Nombre: " + nombre + "\n" +
        "Correo: " + correo + "\n\n" +
        "Mensaje:\n" + mensaje;

    const enlace =
        "mailto:" + destino +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(contenido);

    respuesta.textContent =
        "¡Todo listo! Abriendo tu aplicación de correo...";

    boton.disabled = true;

    // Abrir la aplicación de correo
    window.location.href = enlace;

    // Habilitar nuevamente el botón
    setTimeout(function() {
        boton.disabled = false;
    }, 1500);
});
