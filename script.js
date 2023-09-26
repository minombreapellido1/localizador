function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const locationElement = document.getElementById("location");

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);

    dateTimeElement.textContent = `Fecha y hora actual: ${formattedDate}`;
    
    // Puedes obtener la ubicación del usuario utilizando el API de geolocalización
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationElement.textContent = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
        });
    } else {
        locationElement.textContent = "La geolocalización no está disponible en tu navegador.";
    }
}

// Actualiza la fecha, hora y ubicación cada segundo
setInterval(updateDateTime, 1000);

// Llama a la función para mostrar los datos inmediatamente
updateDateTime();
