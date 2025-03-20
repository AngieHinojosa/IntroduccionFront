//Cambiar texto de boton enviar con textContent
let botonEnviar = document.getElementById("boton");
botonEnviar.textContent = "Reservar ahora";

//Añadir evento click al boton enviar 
botonEnviar.addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let fechaLlegada = document.getElementById("fecha-llegada").value; // Corrección aquí
    let fechaSalida = document.getElementById("fecha-salida").value;
    let tipoHabitacion = document.getElementById("tipo-habitacion").value;

    //Validar que campos de llegada y salida no esten vacios 
    if (nombre && fechaLlegada && fechaSalida && tipoHabitacion) {
        alert("Reserva confirmada a nombre de " + nombre + " para la fecha de llegada: " + fechaLlegada + " y su tipo de habitación es " + tipoHabitacion);
    } else {
        alert("Complete el formulario completo");
    }
});
 
//Cambiar el color del botón de envío cuando pasa sobre el 
botonEnviar.addEventListener("mouseover", function() {
    botonEnviar.style.backgroundColor = "pink";
});

//Cambiar el color del boton cuando se aleja de el 
botonEnviar.addEventListener("mouseout", function() {
    botonEnviar.style.backgroundColor = "palevioletred";
});


