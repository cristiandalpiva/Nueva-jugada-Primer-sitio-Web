
//FUNCION PARA EXPANDIR CAMPO SI QUIERE RECIBIR NOVEDADES DEL SITIO
function mostrarOpciones(){


var valorRecibirNovedades=document.getElementById("recibirNovedades").checked;


    
     if (valorRecibirNovedades==true){
    
         
         document.getElementById("mostrarMedios").style.display="block";
     }
     else{
         alert("Puede cambiar de opinión si en algún momento desea recibir nuestras noticias")
         document.getElementById("mostrarMedios").style.display="none";

     }

}


////////////////////////////////////////////////////////////

//VALIDACIÒN FORMULARIO DE CONTACTO


function validarFormulario(){

    var todoCorrecto=true

    //Valida campo nombre 
           
    campoNombre = document.getElementById("nombre").value;
    

    if(campoNombre.length == 0){
    document.getElementById("nombre").style.backgroundColor = "red";
    todoCorrecto=false;
    } 
    else{
        document.getElementById("nombre").style.backgroundColor= "white";
    }

     //Valida campo apellido

        campoApellido = document.getElementById("apellido").value;

     if(campoApellido.length == 0){

     document.getElementById("apellido").style.backgroundColor = "red";
     todoCorrecto=false;} 

     else{
        document.getElementById("apellido").style.backgroundColor= "white";
    }

    //Valida campo fecha de nacimiento
   
    var valorDia, valorMes, valorAnio, validacion, biciesto;
    validacion=true;
    
   
       valorDia=document.getElementById("dia").value;
       valorMes=document.getElementById("mes").value;
       valorAnio=document.getElementById("anio").value;
   
   
       biciesto = valorAnio % 4;//Año biciesto = 0
   
       if( isNaN(valorDia) || valorDia.length==0 ||
       isNaN(valorMes) || valorMes.length==0 ||isNaN(valorAnio) || valorAnio.length==0){
           document.getElementById("dia").style.backgroundColor="red";
           document.getElementById("mes").style.backgroundColor="red";
           document.getElementById("anio").style.backgroundColor="red";
           validacion=false;
   
       }
   
   if(valorAnio < 1900 || valorAnio > 2010 ){ //Vamos a tomar que entre este rango es correcto
       validacion=false;
       document.getElementById("dia").style.backgroundColor="red";
       document.getElementById("mes").style.backgroundColor="red";
       document.getElementById("anio").style.backgroundColor="red";
   
   }
   
       if(valorAnio >=1900 && valorAnio <=2010){
           
   
           //ENERO
           if(valorMes==1){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
                   } 
                }
   
           //FEBRERO
           if(valorMes==2){
           if (biciesto == 0 && valorDia > 29) {
               var validacion= false; 
               document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
               } else if (biciesto != 0 && valorDia > 28) {
               validacion = false;
               document.getElementById("dia").style.backgroundColor="red";
               document.getElementById("mes").style.backgroundColor="red";
               document.getElementById("anio").style.backgroundColor="red";
               } }}
   
           //MARZO
           if(valorMes==3){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
               
                   }  }
               
            //ABRIL
            if(valorMes==4){
               if (valorDia > 30){
                   validacion = false; //No puede tener mas de 30 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
               
                   } 
                }
   
           //MAYO
           if(valorMes==5){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
   
      
                } 
              }
   
            //JUNIO
            if(valorMes==6){
               if (valorDia > 30){
                   validacion = false; //No puede tener mas de 30 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
      
                } 
              }
   
            //JULIO
            if(valorMes==7){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
      
                } 
              }
           
           
             //AGOSTO
             if(valorMes==8){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
      
                }
              }  
   
           
              //SEPTIEMBRE
             if(valorMes==9){
               if (valorDia > 30){
                   validacion = false; //No puede tener mas de 30 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
      
                } 
              }  
   
              //OCTUBRE
              if(valorMes==10){
               if (valorDia > 31){
                   validacion = false; //No puede tener mas de 31 días
                   document.getElementById("dia").style.backgroundColor="red";
                   document.getElementById("mes").style.backgroundColor="red";
                   document.getElementById("anio").style.backgroundColor="red";
      
                } 
              } 
              
               //NOVIEMBRE
               if(valorMes==11){
                   if (valorDia > 30){
                       validacion = false; //No puede tener mas de 31 días
                       document.getElementById("dia").style.backgroundColor="red";
                       document.getElementById("mes").style.backgroundColor="red";
                       document.getElementById("anio").style.backgroundColor="red";
          
                    } 
                  }  
   
               
               //DICIEMBRE
               if(valorMes==12){
                   if (valorDia > 31){
                       validacion = false; //No puede tener mas de 31 días
                       document.getElementById("dia").style.backgroundColor="red";
                       document.getElementById("mes").style.backgroundColor="red";
                       document.getElementById("anio").style.backgroundColor="red";
          
                    } }

//Si el valor de mes es superior a 12 hacer...

               if(valorMes>12){
                validacion = false; 
                document.getElementById("dia").style.backgroundColor="red";
                document.getElementById("mes").style.backgroundColor="red";
                document.getElementById("anio").style.backgroundColor="red";
                    }
   
               if(validacion==true){
                   document.getElementById("dia").style.backgroundColor="white";
                   document.getElementById("mes").style.backgroundColor="white";
                   document.getElementById("anio").style.backgroundColor="white";
               }
    
    
    //Valida campo telèfono

    campoCelular= document.getElementById("celular").value;
    
    if( isNaN(campoCelular) || campoCelular.length<6 || campoCelular.length>12){

        document.getElementById("celular").style.backgroundColor = "red";
        todoCorrecto=false;
    } 
    else{
        document.getElementById("celular").style.backgroundColor= "white";
    }
    

     //Valida campo Email
    camporEmail= document.getElementById("email").value;

    if(camporEmail.includes('@') && camporEmail.includes('.') ){
        document.getElementById("email").style.backgroundColor = "white";  

        }

     else{ 
     document.getElementById("email").style.backgroundColor = "red";
     todoCorrecto=false
    } 

    //Validar input radio-Recibir novedades

   var opciones=document.getElementsByName("recibirNoticias");
    var seleccionado=false;
    for(var i=0;i<opciones.length;i++){
        if(opciones[i].checked){
            seleccionado=true;
            break;
        }
    }
    if(!seleccionado){
        alert("Completa si desea recibir las noticias")
        todoCorrecto=false;
    }

    //Validar input radio-Medios para recibir novedades
    var opcionesMedios=document.getElementsByName("medioNovedades");
    var seleccionadoMedios=false;
    for(var i=0;i<opcionesMedios.length;i++){
        if(opcionesMedios[i].checked){
            seleccionadoMedios=true;
            break;
        }
    }

    valorRecibirNovedades=document.getElementById("recibirNovedades").checked;

    if(!seleccionadoMedios && valorRecibirNovedades==true){
        alert("Completa porque medio desea recibir las novedades")
      

        todoCorrecto=false;
    }
    

    if(todoCorrecto==true &&validacion==true){ //NOTIFICIACION QUE SE ENVIO BIEN EL FORMULARIO Y RESETEO


        document.getElementById(  "formularioContacto").reset(); //RESETEA LOS CAMPOS DEL FORMULARIO
       /*  document.getElementById("nombre").style.border = "white solid";
        document.getElementById("apellido").style.border = "white solid";
        document.getElementById("edad").style.border = "white solid";
        document.getElementById("celular").style.border = "white solid";
        document.getElementById("email").style.border = "white solid"; */

        alert("El formulario ha sido enviado correctamente. Muchas gracias!!!")
  
    }}

    


///////////////////////////////////////////

//VALIDAR FORMULARIO DE OPINION

//Validar campo-¿Qué te interesa saber de los deportes?
function validarFormOpinion(){
    todoCorrectoFormOpinion=true;


    var opciones=document.getElementsByName("Intereses");
    var seleccionado=false;
    for(var i=0;i<opciones.length;i++){
        if(opciones[i].checked){
            seleccionado=true;
            break;
        }
    }
    if(!seleccionado){
        alert("Completa que te interesa del deporte ")

        todoCorrectoFormOpinion=false;
    }


    campoDisciplinasRezagadas = document.getElementById("mencionDisciplinasRezagadas").value;

    if(campoDisciplinasRezagadas.length == 0){
    document.getElementById("mencionDisciplinasRezagadas").style.borderColor = "red"
    todoCorrectoFormOpinion=false;
    } 

    else{
        document.getElementById("mencionDisciplinasRezagadas").style.borderColor = "";
    }

    if(todoCorrectoFormOpinion==true){ //NOTIFICIACION QUE SE ENVIO BIEN EL FORMULARIO DE OPINIÓN
    
        document.getElementById("formularioOpinion").reset();//RESETEA LOS CAMPOS DEL FORMULARIO
        document.getElementById("mencionDisciplinasRezagadas").style.borderColor = "";
alert("Muchas gracias por brindarnos tu opinión");
        

}
}