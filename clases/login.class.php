<?php
include_once ("conexion.class.php");

class Login{
    var $db;
    
    function Alumno(){
        $this->db = conectar::conexion();
    }
    
    public function loguear($usuario,$pass,$rol) {
        $sql="SELECT * FROM rolak WHERE usuario='$usuario' AND contrasena='$pass' AND rolmota='$rol'";
        foreach ($this->db->query($sql) as $res){
            $this->usuarios[]=$res;            
        }
        return $this->usuarios;
    }
}
    

