<?php
$nuevo=array();
require('../clases/alumno.class.php');
//$phpAlumnoNuevo=json_decode($_POST['ikaslea']);
$DatosRecibidos=json_decode($_POST['DatosalumnoNuevo']);

    $alumno=New Alumno();
    $alumno->insertar($DatosRecibidos->id, $DatosRecibidos->nombre,$DatosRecibidos->apellido1,$DatosRecibidos->apellido2,$DatosRecibidos->ciclo,$DatosRecibidos->curso);
    $mensaje="El alumno se ha insertado correctamente";



print $mensaje;
return $mensaje;
?>




  