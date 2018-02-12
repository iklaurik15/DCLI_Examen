<?php
include_once("conexion.class.php");
$filas=array();
class Alumno{
  //constructor
  var $db;
  function Alumno(){
    $this->db = conectar::conexion();
  }
  
  public function mostrar_alumnos(){
    $sql="SELECT * FROM ikasleak ";
    foreach ($this->db->query($sql) as $res){
      $this->usuarios[]=$res;
    }
    return $this->usuarios;
    $this->db=null;
  }




  public function insertar($id,$nombre,$apellido1,$apellido2,$ciclo,$curso){
    $sql="INSERT INTO ikasleak (id,nombre,apellido1,apellido2,ciclo,curso,seleccionada) VALUES (".$id.", '".$nombre."','".$apellido1."','".$apellido2."','".$ciclo."','".$curso."','false')";
    $this->db->query($sql);
    $this->db=null;
  }




  public function eliminar($id) {
    $sql="DELETE FROM ikasleak WHERE id=".$id;
    $this->db->query($sql);
  }



}



class Ciclo{
  //constructor
  var $con;
  function Ciclo(){
    $this->db = conectar::conexion();
  }


  public function mostrar_ciclos(){
    $sql="SELECT * FROM zikloak ";
    foreach ($this->db->query($sql) as $res){
      $usuarios[]=$res;
    }
    return json_encode($usuarios);
    $this->db=null;
  }

}
?>
