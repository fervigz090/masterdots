/**
 * JS para el juego Masterdots
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

/* Variables glabales */
var iniciadoMarcado = false;
var adyacentes = [];
var idMarcados = [];
var classMarcada;
var tamanoPanel;


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
    tamanoPanel = parseInt(tamano);
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
        items += `<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`;
    }
    document.getElementById("juego").innerHTML = items;
}

function calcularAdyacentes(idMarcado) {
    adyacentes = [];
    //Adyacente superior
    if((idMarcado-tamanoPanel) >= 0) {adyacentes.push(idMarcado-tamanoPanel);}
    //Adyacente inferior
    if((idMarcado+tamanoPanel) < (tamanoPanel*tamanoPanel)) {adyacentes.push(idMarcado+tamanoPanel);}
    //Adyacente izquierda
    if((idMarcado%tamanoPanel) > 0) {adyacentes.push(idMarcado - 1);}
    //Adyacente derecha
    if(((idMarcado+1)%tamanoPanel) > 0) {adyacentes.push(idMarcado + 1);}
    
}

/**
 * Añadir los eventos al juego
 * @date 2023-07-07
 */
function programarEventosJuego() {
    const items = document.getElementsByClassName('item');
    for (let item of items){
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);
    }
    document.addEventListener('mouseup', finalizarMarcado);
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
    if(item.classList.contains('rojo')) {
        containerItem.classList.add('rojo');
        classMarcada = 'rojo';
    }
    else {
        containerItem.classList.add('verde');
        classMarcada = 'verde';
    }
    if(!iniciadoMarcado) {iniciadoMarcado = true;}

    //Guardar los marcados
    idMarcados.push(parseInt(item.id));
    //Calcular adyancentes
    calcularAdyacentes(parseInt(item.id));
    console.log("Comenzar a marcar");
}

/**
 * Continua el marcado de los dots
 * @date 2023-07-07
 * @param { * } event mouseover
 */
function continuarMarcando(event) {
    if(iniciadoMarcado){
        let item = event.target;
        let idNuevo = parseInt(item.id);

        // Seguimos marcando solo si es adyacente
        if(adyacentes.includes(idNuevo) && item.classList.contains(classMarcada)){
            let containerItem = event.target.parentElement;
            if(item.classList.contains('rojo')) {
                containerItem.classList.add('rojo');
            }
            else {
                containerItem.classList.add('verde');
            }
            //Guardar los marcados
            idMarcados.push(parseInt(item.id));
            //Calcular los adyacentes de nuevo
            calcularAdyacentes(parseInt(item.id));
        }
    }
    console.log("Continuar marcando");
}

/**
 * Finaliza el marcado de los dots
 * @date 2023-07-07
 * @param { * } event mouseup
 */
function finalizarMarcado(event){
    iniciadoMarcado = false;
    //Trabajar con los marcados
    for (let index = 0; index < idMarcados.length; index++) {
        //capturar el objeto
        let itemMarcado = document.getElementById(idMarcados[index]);
        itemMarcado.parentElement.classList.remove(classMarcada);
        //Cambiar el color de los objetos de forma aleatoria
        let color = ['rojo', 'verde'];
        let colorRnd = getRamdomInt(2);
        itemMarcado.classList.remove(classMarcada);
        itemMarcado.classList.add(color[colorRnd]);
    }
    console.log("Marcado finalizado");
}

//Capturamos los datos del usuario
getDatosUsuario();
//Comprobamos los datos. Si esta mal el formulario (o se salta) nos reenvia a index
if(!comprobacionDatosUsuario()) location = "index.html";
// Rellenamos el formulario
rellenarFormularioUsuario();

pintarPanelJuego();

programarEventosJuego();
