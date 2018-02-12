<?php
    require '../clases/login.class.php';
    $DatosRecibidos= json_decode($_POST['Datoslogin']);
    $login = new Login();
    $consulta=$login->loguear($DatosRecibidos->usuario,$DatosRecibidos->pass,$DatosRecibidos->rol);
    
    $respuesta= json_encode($consulta);
    print $respuesta;
    
    alert ($respuesta);
    
    
    

