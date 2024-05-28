//Logica para eliminar los signos de puntuacion
function eliminarSignos(str) {
  let resultado = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '!' && str[i] !== '?' && str[i] !== '.') {
      resultado += str[i];
    }
  }
  return resultado;
}

function eliminarSignos2(str) {
  return str.replace(/[!?¿.]/g, '');
}

console.log(eliminarSignos("Hola mundo! ¿Como estas?."));

console.log(eliminarSignos2("Hola mundo! ¿Como estas?."));

//logica para encontrar el mayor y el menor de un arreglo 
function encontrarExtremos(numeros) {

  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return { mayor: mayor, menor: menor };
}

console.log(encontrarExtremos([2, 3, 4, 1, 5, 6, 12, 7, 8, 9]));

//Logica para verificar si una cadena de caracteres contiene vocales.
function contieneVocal(cadena) {
  const vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i].toLowerCase())) {
      return true;
    }
  }
}

console.log(contieneVocal("hola"));

//Dada una palabra, determine si es un palindromo (una palabra que se lee de izq a der que de der a izq)
function palindromo(palabra) {

  //toma dos argumentos, el 1 es el patron de busqueda y el 2 es el reemplazo.
  //El patron de busqueda puede ser una cadena de texto o una expresion regular.
  //Si se utiliza una cadena de texto el metodo buscarara literalmente esa cadena en la 
  //cadena de texto original. si es una expresion regular buscara cualquier conincidencia con la expresion.
  //el 2 argumento es el reemplazo, replace() devuelve una nueva cadena con las conincidencias
  //NO modifica la cadena ORIGINAL.

  //eliminamos espacion y convertimos a minusculas
  let words = palabra.replace(/\s/g, '').toLowerCase();
  //Revertimos la palabra 
  let palabraInversa = words.split("").reverse().join("");
  //verifica si la palabra original y la palabra invertida son iguales.
  if (palabraInversa === words) {
    return true;
  } else {
    return false;
  }
  return palabraInversa;
}

console.log(palindromo("radar"));

//Retos js
const manufacture = (gifts, materials) => {
  const materialsArray = Array.from(materials);

  return materialsArray;
}
const gifts = ["juego", "puzle"];
const materials = "jlepuz";

console.log(manufacture(gifts, materials));

//objetos

const getRating = (rating) => {

  const ratings = {
    1: "Bad",
    2: "Regular",
    3: "Medium",
    4: "Good",
    5: "Excelent"
  }
  return rating in ratings ? ratings[rating] : 'defaul value'
}

console.log(getRating(6));
