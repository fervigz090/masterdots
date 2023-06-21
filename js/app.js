//alert("Ventana horripilante");

/**
 * JS para la comprobación de datos del formulario de entrada
 */

//Inicializacion de variables y objetos
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

//Funciones de evento
function comprobarForm(event){
    //comprobar cambios
    if(nickInput.value.length == 0){
        console.log("No hay nick");
        nickInput.focus();  //Marca el recuadro del nick
        event.preventDefault();   //Para que no se borre
        error.innerText = "El campo de nick no puede estar vacío"
        return false;
    }else if(tamanoInput.value == "0"){
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();    //Marca el cuadro del tamaño
        event.preventDefault();   //Para que no se borre
        error.innerText = "Se debe seleccionar un tamaño de panel"
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);


