//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonIngresar = document.querySelector("#boton-ingresar");

$botonIngresar.onclick = function(){
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoNombreUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;
    document.querySelector("h1").innerText = "Bienvenido, "+primerNombreUsuario;

    document.querySelector("#resultado").innerText = "Datos Ingresados\r\n\r\nNombre: " + primerNombreUsuario
                                                  + "\r\nSegundo Nombre: " + segundoNombreUsuario
                                                  + "\r\nApellido: " + apellidoNombreUsuario
                                                  + "\r\nEdad: " + edadUsuario;


    return false;
}



/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
