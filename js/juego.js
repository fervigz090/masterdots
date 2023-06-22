/**
 * JS para el juego Masterdots
 * 
 * @author Iván Fernández <ivanfdez@live.com> 
 * {@link https://github.com/fervigz090/masterdots.git}
 * @date 2023-06-22
 */

//Capturamos los datos del usuario
getDatosUsuario();
//Comprobamos los datos. Si esta mal el formulario (o se salta) nos reenvia a index
if(!comprobacionDatosUsuario()) location = "index.html";

