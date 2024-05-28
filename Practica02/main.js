/* fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
          const userList = document.getElementById('user-list');
          const li = document.createElement('li');
          li.textContent = `${user.name}`;
          userList.appendChild(li);
        });
      })
      .catch(error => console.log(error)); */

/*  const URL = 'https://jsonplaceholder.typicode.com/users';
 function obtenerDatosDeAPI(url) {
   return new Promise((resolve, reject) => {
     fetch(url)
       .then(response => {
         if (!response.ok) {
           throw new Error('Error al obtener los datos');
         }
         return response.json();
       })
       .then(data => resolve(data))
       .catch(error => reject(error));
   });
 }
 
 obtenerDatosDeAPI(URL)
   .then(data => console.log(data))
   .catch(error => console.log(error));
*/

const libros = [
  {
    id: 1,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    anioPublicacion: 1943,
    precio: 200,
    cantidad: 10
  },
  {
    id: 2,
    titulo: 'La Odisea',
    autor: 'Homero',
    anioPublicacion: -800,
    precio: 250,
    cantidad: 5
  },
  {
    id: 3,
    titulo: 'El Gran Gatsby',
    autor: 'F. Scott Fitzgerald',
    anioPublicacion: 1925,
    precio: 150,
    cantidad: 3
  }
];

function calcularPrecioTotal(libros) {
  return libros.reduce((total, libro) => total + libro.precio, 0);
}
const priceTotal = calcularPrecioTotal(libros)

console.log(`El precio total es: $ ${priceTotal}`);

const filtrarLibrosMasCaros = libros.filter(libro => libro.precio >= 250);

console.log(filtrarLibrosMasCaros);

function buscarLibrosPorAutor(libros, autor) {
  return libros.filter(libro => libro.autor === autor);
}

console.log(buscarLibrosPorAutor(libros, 'Antoine de Saint-Exupéry'));

//eliminar un libro por su ID de la lista
function eliminarLibroPorId(libros, id) {
  const indice = libros.findIndex(libro => libro.id === id);
  console.log(`El indice es: ${indice}`);
  //si el indice es diferente de -1, retorna el libro
  //es decir, si se encontró el objeto en el array.
  if (indice !== -1) {
    //el metodo splice elimina el libro en la posicion indicada de la lista
    return libros.splice(indice, 1);
  }
}

const libroEliminado = eliminarLibroPorId(libros, 2);
console.log("El libro eliminado es: ", libroEliminado);

function agregarLibro(libros, libro) {
  libros.push(libro);
  return libros
}

const nuevoLibro = {
  id: 4,
  titulo: 'El señor de los anillos',
  autor: 'J.R.R. Tolkien',
  anioPublicacion: 1954,
  precio: 250,
  cantidad: 1
};

const agregado = agregarLibro(libros, nuevoLibro);
console.log(" El libro agregado es: ", agregado[3]);

const heroes = [
  {
    name: 'Batman',
    team: 'Justice League',
    power: 25
  },
  {
    name: 'Superman',
    team: 'Justice League',
    power: 30
  },
  {
    name: 'Thor',
    team: 'Avengers',
    power: 35
  },
  {
    name: 'Hulk',
    team: 'Avengers',
    power: 40
  },
  {
    name: 'Ironman',
    team: 'Avengers',
    power: 45
  }
]

const teams = { avenger: [], justice: [] }

heroes.forEach(heroe => {
  if (heroe.team === 'Avengers') {
    teams.avenger.push(heroe)
  } else {
    teams.justice.push(heroe)
  }
  /*  teams[heroe.team].push(heroe) */
})

console.log(teams);
