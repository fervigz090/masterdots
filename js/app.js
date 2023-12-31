//alert("Ventana horripilante");

/**
 * JS para la comprobación de datos del formulario de entrada
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

//Inicializacion de variables y objetos
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;
var avatarItems;
var itemImg;
var avatarCont;

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
        nickInput.focus();  //Marca el recuadro del nick
        event.preventDefault();   //Para que no se borre
        error.innerText = "El campo de nick no puede comenzar con un numero"
        return false;
    }else if(tamanoInput.value == "0"){
        tamanoInput.focus();    //Marca el cuadro del tamaño
        event.preventDefault();   //Para que no se borre
        error.innerText = "Se debe seleccionar un tamaño de panel"
        return false;
    }
    //Todo correcto
    datosUsuario(nickInput, tamanoInput, emailInput, avatarCont);
    historicoUsuarios(nickInput);
    return true;
}   

function moviendoImg(event) {
    itemImg = event.target;
    console.log(itemImg.src);
}

function cambiarImg(event){
    avatarCont.src = itemImg.src;
}

/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 * @date 2023-06-22
 */
function domCargado(){
    //Captura de todos los Elements
    nickInput = document.getElementById("nick");
    tamanoInput = document.getElementById("tamano");
    emailInput = document.getElementById("email");
    formEntrada = document.getElementById("formEntrada");
    error = document.getElementById("error");

    //Comprobar su hay algun tipo de error de juego.html
    if(sessionStorage.getItem('error') != null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error'); //lo eliminamos para que desaparezca al recargar.
    }

    formEntrada.addEventListener('submit', comprobarForm);

    avatarItems = document.getElementsByClassName("avatarImgItem");
    //Eventos del D&D (Drag and Drop)
    //Añadimos el evento dragstart a cada uno de los avatares.
    for(let item of avatarItems){
        item.addEventListener('dragstart', moviendoImg);
    }
    avatarCont = document.getElementById("avatarImg");
    avatarCont.addEventListener('dragover', e=>{e.preventDefault()})
    avatarCont.addEventListener('drop', cambiarImg);
}

//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', domCargado);

//Geolocalizacion
datoGeolocalizacion();


