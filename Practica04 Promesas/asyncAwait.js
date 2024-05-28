/*
  PROMESAS --->
  En JavaScript, una promesa es un objeto que representa la eventual finalización (o falla) de una operación
  asíncrona y la devolución de su resultado. 
  Una promesa puede tener tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected).
*/

/* async function obtenerUsuario() {

  const url = `https://swapi.dev/api/people/${1}/`;

  try {
    // Realiza una solicitud GET a la URL especificada.
    const respuesta = await fetch(url);
    // Comprueba si la solicitud se realizó correctamente.
    if (!respuesta.ok) {
      throw new Error(`¡Error HTTP! Estado: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}
obtenerUsuario() */

//buscar personaje por su nombre
async function buscarPersonaje(nombre) {
  const url = `https://swapi.dev/api/people/?search=${nombre}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  }
  catch (error) {
    console.error(error);
  }
}

async function mostrarInformacionPersonaje(nombre) {
  try {
    const resultados = await buscarPersonaje(nombre);

    if (resultados.length === 0) {
      console.log(`No se encontró ningún personaje con el nombre "${nombre}".`);
      return;
    }
    // Mostrar información del primer personaje encontrado
    /* const primerPersonaje = resultados[0]; */
    console.log(`${resultados[0].name} - color eyes: ${resultados[0].eye_color} - hair color: ${resultados[0].hair_color}`);
  } catch (error) {
    console.error(error);
  }
}

const nombrePersonaje = "Luke Skywalker"; // Cambia esto al nombre del personaje que deseas buscar
mostrarInformacionPersonaje(nombrePersonaje);