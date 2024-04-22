$(document).ready(function() {
  // Obtener el nombre del archivo de la cabecera desde el atributo data
  var nombreCabecera = $('#contenido').data('cabecera');
  var nombrePie = $('#pie').data('pie');
  // Verificar si se ha proporcionado el nombre del archivo de la cabecera
  if (nombreCabecera) {
    // Cargar la cabecera en #contenido
    $('#contenido').load(nombreCabecera, function(response, status, xhr) {
      if (status == "error") {
        console.log("Error al cargar la cabecera: " + xhr.status + " " + xhr.statusText);
      } else {
        console.log("Cabecera cargada correctamente.");
      }
    });
  } else {
    console.log("No se proporcionó el nombre del archivo de la cabecera.");
  }
  $('#pie').load(nombrePie);
});
