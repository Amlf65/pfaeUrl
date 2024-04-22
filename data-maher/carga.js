$(document).ready(function() {
   // Cargar cabecera.html dentro de #contenido
   $('#contenido').load('cabecera.html', function(response, status, xhr) {
     if (status == "error") {
       console.log("Error al cargar la cabecera: " + xhr.status + " " + xhr.statusText);
     } else {
       console.log("Cabecera cargada correctamente.");
     }
   });
 });
 