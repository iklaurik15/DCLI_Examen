<?php

require('../clases/alumno.class.php');
$objAlumno=new Alumno;
$consulta=$objAlumno->mostrar_alumnos();

$alumnos=json_encode($consulta);
print $alumnos;

?>

