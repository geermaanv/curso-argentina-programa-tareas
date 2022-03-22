/*
const $botonIngresar = document.querySelector("#boton-ingresar");

$botonIngresar.onclick = function(){
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoNombreUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;
    document.querySelector("h1").innerText = "Bienvenido, "+primerNombreUsuario;
    document.querySelector("#datos-ingresados-nombre").value = primerNombreUsuario;
    document.querySelector("#datos-ingresados-segundonombre").value = segundoNombreUsuario;
    document.querySelector("#datos-ingresados-apellido").value = apellidoNombreUsuario;
    document.querySelector("#datos-ingresados-edad").value = edadUsuario;


    return false;
}
*/
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

function generarFormulario() {
    var cantCampos = document.getElementById("cantidadVideos").value;
    var cont = document.getElementById("preguntarDatosVideos");

    for(var i=1;i<=cantCampos;i++) {
      var element = document.createTextNode("Video "+i+" : ");
      cont.appendChild(element);

      var element = document.createTextNode(" | Horas: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", i);
      element.setAttribute("name", "horas"+i);
      element.setAttribute("class", "formulariovideos");
      cont.appendChild(element);

      var element = document.createTextNode(" - Minutos: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", i);
      element.setAttribute("name", "minutos"+i);
      element.setAttribute("class", "formulariovideos");
      cont.appendChild(element);

      var element = document.createTextNode(" - Segundos: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", i);
      element.setAttribute("name", "segundos"+i);
      element.setAttribute("class", "formulariovideos");
      cont.appendChild(element);


      var element = document.createElement("br");
      cont.appendChild(element);
      cont.appendChild(element);
    }

    document.getElementById("botonCantidadVideos").style.display = 'none'; // hide
    document.getElementById("botonCalcularTiempoTotal").style.display = 'inline'; // hide
    return cantCampos;
}

function calcularResultado() {
    //Create an input type dynamically.
    var duracionVideosSegundos = 0;

    var inputs=document.getElementsByClassName("formulariovideos");
      for (var j=0;j<inputs.length;j=j+3) {
        var horas = Number(inputs[j].value);
        var minutos = Number(inputs[j+1].value);
        var segundos = Number(inputs[j+2].value);

        // llevo todo a segundos para sumarlo
        duracionVideosSegundos = duracionVideosSegundos + (3600 * horas + 60 * minutos + segundos);
    }

    if (duracionVideosSegundos>=0) {
      var horas = Math.floor(duracionVideosSegundos / 3600);
      var minutos = Math.floor((duracionVideosSegundos - horas*3600)/60);
      var segundos = duracionVideosSegundos - (horas*3600) - (minutos*60);

      document.getElementById("botonCalcularTiempoTotal").style.display = 'none'; // hide

      var verResultado = document.getElementById("mostrarResultado");
      var elemento = document.createElement("br");
      verResultado.appendChild(elemento);

      var negrita = document.createElement('strong');
      elemento = document.createTextNode("Duración Total: " + horas + " horas con " + minutos + " minutos y "+segundos+" segundos." );
      negrita.appendChild(elemento);
      verResultado.appendChild(negrita);

    }
}

/*
      var element = document.createTextNode("Video "+i+" : ");
      cont.appendChild(element);

      var element = document.createTextNode(" | Horas: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", "0");
      element.setAttribute("name", "horas"+i);
      cont.appendChild(element);

      var element = document.createTextNode(" - Minutos: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", "0");
      element.setAttribute("name", "minutos"+i);
      cont.appendChild(element);

      var element = document.createTextNode(" - Segundos: ");
      cont.appendChild(element);

      var element = document.createElement("input");
      element.setAttribute("type", "number");
      element.setAttribute("value", "0");
      element.setAttribute("name", "segundos"+i);
      cont.appendChild(element);


      var element = document.createElement("br");
      cont.appendChild(element);

      var element = document.createElement("br");
      cont.appendChild(element);
*/
