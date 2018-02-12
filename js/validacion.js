

function comprobarCampoNombre() {
    nombre = document.getElementById("minombre");
    if ((nombre.value == null) || (nombre.value == "")) {        
      return false;
    } else {
      return true;
    }
}


