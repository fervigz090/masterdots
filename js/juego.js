/**
 * JS para el juego Masterdots
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

/**
 * Devuelve un numero aleatorio entre 0 y max
 * @date 2023-07-07
 * @param { * } max limite maximo
 */
function getRamdomInt(max){
    return Math.floor(Math.random() * max);
}

function rellenarFormularioUsuario(){
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg;
}

function pintarPanelJuego(){
    document.getElementById("juego").style.gridTemplateColumns = "repeat("+tamano+", 1fr)";
    document.getElementById("juego").style.gridTemplateRows = "repeat("+tamano+", 1fr)";

    //Elementos de forma automatica
    let items = "";
    let color = ["rojo", "verde"];
    let colorRnd = 0;
    for (let index = 0; index < (parseInt(tamano) * parseInt(tamano)); index++) {
        if(index%2 > 0){
            colorRnd = getRamdomInt(2);
        }
        items += `<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML = items;
}

/**
 * Añadir los eventos al juego
 * @date 2023-07-07
 */
function programarEventosJuego() {
    const items = document.getElementsByClassName('item');
    for (let item of items){
        item.addEventListener('mousedown', comenzarMarcar);
    }
}

/* Funciones del juego*/

/**
 * Iniciar el marcado de los dots
 * @date 2023-07-07
 * @param { * } event mousedown
 */
function comenzarMarcar(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else containerItem.classList.add('verde');
    
    console.log("Pinchado sobre un circulo");
}

//Capturamos los datos del usuario
getDatosUsuario();
//Comprobamos los datos. Si esta mal el formulario (o se salta) nos reenvia a index
if(!comprobacionDatosUsuario()) location = "index.html";
// Rellenamos el formulario
rellenarFormularioUsuario();

pintarPanelJuego();

programarEventosJuego();
