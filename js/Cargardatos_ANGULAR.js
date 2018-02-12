
var miAplicacion = angular.module('miAplicacion', []);

miAplicacion.controller('mainController', ["$scope", "$http", function($scope, $http) {

        //////////////////////////////////////////////////////////////////////
        ///Cogemos los datos de los alumnos de la Base de Datos 
        //////////////////////////////////////////////////////////////////////
        $http.get('controladores/IKASLEAKbilatu.php').success(function(data) {                
                $scope.alumnos=data;                       
            });
            
        $http.get('controladores/ZIKLOAKbilatu.php').success(function(data) {
                $scope.ciclos = data;       
        });
        
        $http.get('controladores/LOGIN.php').success(function(data){
                $scope.usuarios=data;
        });
            
//             $scope.ciclos = [];
//            var misciclos = {
//                method: 'GET',
//                url: 'controladores/ZIKLOAKbilatu.php'
//            };
//
//            var response = $http(misciclos);
//            response.success(function(data) {
//                $scope.ciclos = data;
//                
//            });
            
        $scope.misDatos={
        id:"",
        nombre:"",
        apellido1:"",
        apellido2:"",
        ciclo:"",
        curso:""
        };
        
        $scope.datosLogin={
            usuario:"",
            pass:"",
            rol:""
        };
        
        function esconder(){
            $scope.verLogin=false;
            $scope.verZonaLogin=false;
            $scope.verBotonesUsuario=false;
            $scope.verBotonesAdmin=false;
            $scope.verZonaCiclos=false;
            $scope.verZonaAlumnos=false;
            $scope.verFormularioAlumno=false;
            $scope.verEliminarAlumno=false;
            $scope.verBuscarAlumno=false;            
        }
        
        esconder();
        $scope.verLogin=true;
        
        $scope.mostrarLogin = function(){
            esconder();
            $scope.verZonaLogin=true;
        };
        
        $scope.login= function(){           
            var Datoslogin = $scope.datosLogin;
            Datoslogin=JSON.stringify(Datoslogin);
            
            $http({
                 method: "GET",
                 url: "controladores/LOGIN.php",
                 data:Datoslogin,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                 
            }).success(function(response){
                alert(response);
//                if($scope.datosLogin.rol==$scope.usuarios[0].rol){
//                    esconder();
//                    $scope.verBotonesAdmin=true;
//                }else if($scope.datosLogin.rol=="lector"){
//                    esconder();
//                    $scope.verBotonesUsuario=true;
//                }else{
//                    esconder();
//                    alert("El usuario o la contraseña no coinicden.Vuelve a intentarlo");
//                    $scope.verLogin=true;
//                    
//                    $scope.datosLogin.usuario="";
//                    $scope.datosLogin.pass="";
//                    $scope.datosLogin.rol="";
//                }
            });
            
            
        };
       
       
        

        /////////////////////////////////////////////////////////////////////////////
        ///Cogemos los datos de los ciclos de la Base de Datos .ESTA COMPLETO
        ///////////////////////////////////////////////////////////////////////////////
        $scope.mostrarCiclos = function(){
            esconder();
            $scope.verZonaCiclos=true;
            $scope.verBotones=true;
            
        };
        
        $scope.gestionarAlumnos = function(){
             esconder();  
             $scope.verZonaAlumnos=true;   
             $scope.verBotones=true;
             
        };
       
       /////////////////////////////////////////////////////////////////////////////////
       ////////////////////////////////////////////////////////////////////////////////
       //////////// la función agregar no está completa//////////////////////////////
       
       $scope.iniciarAgregarAlumno = function(){
           esconder();
           $scope.verZonaAlumnos=true; 
           $scope.verFormularioAlumno=true;           
           $scope.ultimoId = $scope.alumnos[parseInt($scope.alumnos.length)-1].id;
           $scope.misDatos.id = parseInt($scope.ultimoId)+1;
       };
       
        $scope.agregar = function() {            
            if (comprobarCampoNombre()){
                var DatosalumnoNuevo =$scope.misDatos;
            DatosalumnoNuevo = JSON.stringify(DatosalumnoNuevo);

                $http({
                    method: "POST",
                    url: "controladores/IKASLEberria.php",
                    data: DatosalumnoNuevo,                                        //////////
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                        .success(function(response) {
                            alert(response);
                            
                             $scope.alumnos.push({ //Recarga de página
                                id:$scope.misDatos.id,
                                nombre:$scope.misDatos.nombre,
                                apellido1:$scope.misDatos.apellido1,
                                apellido2:$scope.misDatos.apellido2,
                                ciclo:$scope.misDatos.ciclo,
                                curso:$scope.misDatos.curso
                            });
                        $scope.misDatos.id++;
                        $scope.misDatos.nombre='';
                        $scope.misDatos.apellido1='';
                        $scope.misDatos.apellido2='';
                        $scope.misDatos.ciclo='';
                        $scope.misDatos.curso='';    
                            
             });
            }else{
                 alert('¡El campo nombre esta vacio!');   
            }
            
            };
            
             $scope.cancelar = function(){        
                $scope.misDatos.id = $scope.alumnos.id;
                $scope.misDatos.nombre = '';
                $scope.misDatos.apellido1 = '';
                $scope.misDatos.apellido2 = '';
                $scope.misDatos.ciclo = '';
                $scope.misDatos.curso = '';
                $scope.verFormularioAlumno=false;
                $scope.verEliminarAlumno=false;
             };
           
        /////////////////////////////////////////////////////////////////////////////////
       ////////////////////////////////////////////////////////////////////////////////
       //////////// la función borrarAlumno no está completa//////////////////////////////
       
       $scope.iniciarBorrarAlumno = function(){
           esconder();
           $scope.verZonaAlumnos=true; 
           $scope.verEliminarAlumno=true;
          
       };
        
        $scope.borrarAlumno = function(id) {
         confirmar = confirm("¿Seguro que quieres borrar tu usuario?");   
            if(confirmar==true){
                var dato=id;
                alert(dato);
                
                $http({
                    method: "POST",
                    url: "controladores/IKASLEAezabatu.php",
                    data:dato,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                        .success(function(response) {
                            alert(response);
                    
                            var miLista = $scope.alumnos; 
                            $scope.alumnos=[]; 

                              angular.forEach(miLista, function(item){ 
                                  if(item.id != id){
                                     $scope.alumnos.push(item);
                                 }
                              });      
                              
                              $scope.verEliminarAlumno=false;
                            
                        });
                ///////////////////borrear de la lista del scope//////////////////////   
              
                ////// 
            
        }else {
          alert("Operación cancelada.");
      }
      };
            
            $scope.mostrarConsultas = function(){
                esconder();
                $scope.verBuscarAlumno=true;
                $scope.TEXTObusqueda="";
            };
            
            $scope.salir=function(){
                esconder();
                $scope.verBotones=true;               
            };
       
   

    }]);
