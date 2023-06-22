//alert("Ventana horripilante");

/**
 * JS para la comprobación de datos del formulario de entrada
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

//Inicializacion de variables y objetos
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const emailInput = document.getElementById("email");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

//Comprobar si hay algun error de juego.html
if(sessionStorage.getItem('error')){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error'); //lo eliminamos para que desaparezca al recargar.
}

//Funciones de evento
/**
 * Comprueba que el formulario cumple los requisitos
 * @date 2023-06-22
 * @param { * } event evento presionar 'submit'
 */
function comprobarForm(event){
    //Comprobar cambios. La expresion regular de la condicion del if
    //se cumple si el campo nick no comienza con un numero.
    if(nickInput.value.match(/(?<!\s)[0-9]/)){ //
        console.log("nick incorrecto");
        nickInput.focus();  //Marca el recuadro del nick
        event.preventDefault();   //Para que no se borre
        error.innerText = "El campo de nick no puede comenzar con un numero"
        return false;
    }else if(tamanoInput.value == "0"){
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();    //Marca el cuadro del tamaño
        event.preventDefault();   //Para que no se borre
        error.innerText = "Se debe seleccionar un tamaño de panel"
        return false;
    }
    //Todo correcto
    datosUsuario(nickInput, tamanoInput, emailInput);
    historicoUsuarios(nickInput);
    return true;
}   

//Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);

//Geolocalizacion
datoGeolocalizacion();


