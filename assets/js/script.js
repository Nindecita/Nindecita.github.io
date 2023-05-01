$(document).ready(function() { 


  $("#paisaje").click( function() { 
    $("#paisaje-text").toggle("slow");
  });

  $("#lago").click( function() { 
    $("#lago-text").toggle("slow");
  });

  $("#desierto").click( function() { 
    $("#desierto-text").toggle("slow");
  });

  $("#bosque").click( function() { 
    $("#bosque-text").toggle("slow");
  });

  $("#completardatos").on('click', function() {
    alert("Los datos se ingresaron exitosamente");

  });

  $("#enviarAsunto").tooltip({show: true})

  $("#IngresarNombre").tooltip({show: true})

 

});
