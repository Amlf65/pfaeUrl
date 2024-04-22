$(document).ready(function() {
   // Cargar datos.html dentro de #contenido
   $('#contenido').load('datos.html', function() {
     // Una vez cargado, obtener los datos desde los atributos data-
     var nombre = $('#datos').data('nombre');
     var edad = $('#datos').data('edad');
     var ciudad = $('#datos').data('ciudad');
     
     // Mostrar los datos en la consola para verificar
     console.log("Nombre: " + nombre);
     console.log("Edad: " + edad);
     console.log("Ciudad: " + ciudad);
     
     // También puedes hacer cualquier manipulación o procesamiento adicional aquí
     $('#contenido').html( "<p>Nombre: " + nombre + "</p>" +
                           "<p>Edad: " + edad + "</p>" +
                           "<p>Ciudad: " + ciudad + "</p>");
   });
 });
 