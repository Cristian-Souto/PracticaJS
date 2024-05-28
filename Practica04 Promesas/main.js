const limit = 4; // Límite de productos por página
let page = 2; // Página inicial

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`);
    const data = await response.json()
    displayProducts(data)
    page += 1;
    console.log(data);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

displayProducts(fetchAndDisplayProducts())

function displayProducts(products) {
  const contenedorProductos = document.getElementById("product-container")
  products.forEach(producto => {
    const div = document.createElement("div")
    div.classList.add("col-lg-4", "col-md-6", "mb-4")
    div.innerHTML += `<div class="card" style="width:18rem;">
                            <img src="${producto.image}"class="card-img-top" alt="...">
                           <div class="card-body">
                             <h5 class="card-title">${producto.title}</h5>    
                             <p class="card-text">Precio:$ ${producto.price}</p>
                             <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>  
                           </div>
                         </div>`
    contenedorProductos.appendChild(div)
  })
  if (products.length === limit) {
    const loadMoreButton = document.createElement("button");
    loadMoreButton.classList.add("btn", "btn-danger", "btn-load-more");
    loadMoreButton.textContent = "+";
    loadMoreButton.addEventListener("click", fetchAndDisplayProducts);
    contenedorProductos.appendChild(loadMoreButton)
  }
}




