<?php

require('../clases/alumno.class.php');
$objCiclo=new Ciclo;
$consulta=$objCiclo->mostrar_ciclos();

print $consulta;
return $consulta;
?>
