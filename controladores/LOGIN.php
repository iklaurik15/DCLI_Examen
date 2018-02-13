<?php
    require '../clases/login.class.php';    
    $login = new Login();
    $consulta=$login->loguear();
    
    $usuarios= json_encode($consulta);
    print $usuarios;
    
   
    

    

