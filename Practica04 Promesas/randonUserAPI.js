const URL = "https://randomuser.me/api/";
const usersContainer = document.getElementById("user-container");
const getRandomUser = document.getElementById("get-random-user");

getRandomUser.addEventListener("click", () => {
  getUsers();
});
// Llama a la función getUsers al cargar la página
const getUsers = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    // Verifica si 'results' existe en los datos
    if (data.results) {
      // Limpia el contenedor antes de agregar nuevos usuarios
      usersContainer.innerHTML = "";
      // Itera sobre los resultados y agrega cada usuario al contenedor
      data.results.forEach((user) => {
        const userDiv = createUserDiv(user);
        usersContainer.appendChild(userDiv);
      });
    } else {
      console.log("No se encontraron resultados en la respuesta de la API.");
    }
  } catch (error) {
    console.error(error);
  }
};

// Función para crear un div para un usuario
const createUserDiv = (user) => {
  const div = document.createElement("div");
  div.classList.add("user-info", "col-md-4");
  // Modifica esta parte para adaptarla a la estructura de los datos del usuario
  div.innerHTML = `
  <div class="card-body text-center">
    <img class="mb-2 mx-auto d-block" src="${user.picture.large}" alt="${user.name.first}" />
    <p class="card-text "><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
 </div>
  `;
  return div;
};

getUsers()