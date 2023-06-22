/**
 * JS para la gestion de los datos de usuario.
 * (se utiliza en index.html y en juego.html).
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

var nick;
var tamano;
var email;
var geolocalizacionTxt;

//Cmd+shift+p para añadir "JSdoc" automaticamente
/**
 * Almacenar los datos en el sessionStorage
 * @date 2023-06-22
 * @param { HTMLElement } nick nick del usuario
 * @param { HTMLElement } tamano tamaño del panel
 * @param { HTMLElement } email correo electronico del usuario
 */
function datosUsuario(nick, tamano, email){
    //Almacenamos el nick con la clave 'nick'
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);

    //Almacenamos el nick con la clave 'nick' con localStorage
    //localStorage.setItem('nick', nick.value);
}

/**
 * Devuelve por consola el nick del usuario
 * @date 2023-06-22
 */
function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);

    // Ahora devolvemos el almacenado en localStorage para ver la diferencia
    // En localStorage se queda almacenado aunque cerremos la pestaña
    //name = localStorage.getItem('nick');
    //console.log(name);
}

/**
 * Devuelve true si los datos de entrada son correctos
 * @date 2023-06-22
 */
function comprobacionDatosUsuario() {
    if(nick == null){
        sessionStorage.setItem('error', "No se ha rellenado el formulario correctamente");
        return false;
    }
    return true;
}

//Geolocalizacion
/**
 * Devuelve la geolocalizacion del usuario si es posible obtenerla
 * @date 2023-06-22
 */
function datoGeolocalizacion(){
    if(!navigator.geolocation){
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation";
    }else{
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt = 'Latitud: '+position.coords.latitude+', longitud: '+position.coords.longitude},
            //Error
            ()=>{geolocalizacionTxt = "La geolocalizacion no se ha podido realizar";}
        )
    }
}

//localStorage
/**
 * Almacena un historico de usuarios en localStorage
 * @date 2023-06-22
 * @param { HTMLElement } nick nick del usuario actual
 */
function historicoUsuarios(nick) {
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if(historicoStorage == null){
        historico = [];
    }else{
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario = {
        usuario:nick.value,
        fecha:Date.now()
    }
    
    historico.push(registroUsuario);    //Almacenamos registros en este array
    localStorage.setItem('historico', JSON.stringify(historico));
}