<?php
require('../clases/alumno.class.php');
$id=$_POST['dato'];
$objAlumno=new Alumno;
    
$consulta=$objAlumno->eliminar($id);
print $id;
return $id;
?>