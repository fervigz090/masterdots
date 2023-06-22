/**
 * JS para la gestion de los datos de usuario.
 * (se utiliza en index.html y en juego.html).
 */
var nick;

function datosUsuario(nick){
    //Almacenamos el nick con la clave 'nick' con sessionStorage
    sessionStorage.setItem('nick', nick.value);

    //Almacenamos el nick con la clave 'nick' con localStorage
    //localStorage.setItem('nick', nick.value);



}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);

    // Ahora devolvemos el almacenado en localStorage para ver la diferencia
    // En localStorage se queda almacenado aunque cerremos la pestaña
    //name = localStorage.getItem('nick');
    //console.log(name);
}

function comprobacionDatosUsuario() {
    if(nick == null){
        sessionStorage.setItem('error', "No se ha rellenado el formulario correctamente");
        return false;
    }
    return true;
}

//localStorage
function historicoUsuarios(nick) {
    let registroUsuario = {
        usuario : nick.value,
        fecha : Date.now()
    }
    localStorage.setItem('historico', JSON.stringify(registroUsuario));
}