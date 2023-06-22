/**
 * JS para el juego Masterdots
 */

//Capturamos los datos del usuario
getDatosUsuario();
//Comprobamos los datos. Si esta mal el formulario (o se salta) nos reenvia a index
if(!comprobacionDatosUsuario()) location = "index.html";

