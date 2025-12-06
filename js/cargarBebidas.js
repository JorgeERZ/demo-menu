const dataBebidas = {
  bebidas: [
    {
      nombre: "Desechable Chico",
      precio: "$5",
    },
    {
      nombre: "Desechable Grande",
      precio: "$10",
    },
    {
      nombre: "Café Americano",
      precio: "$45",
    },
    {
      nombre: "Café Capuccino",
      precio: "$55",
    },
    {
      nombre: "Café Expresso",
      precio: "$55",
    },
    {
      nombre: "Café Latte",
      precio: "$55",
    },
    {
      nombre: "Café Moka",
      precio: "$55",
    },
    {
      nombre: "Chocolate",
      precio: "$55",
    },
    {
      nombre: "Te (sabor a elegir)",
      precio: "$35",
    },
    {
      nombre: "Jarra de agua o jugo",
      precio: "$50",
    },
    {
      nombre: "Refrescos",
      precio: "$40",
    },
    {
      nombre: "Agua Mineral",
      precio: "$30",
    },
  ],
};
function cargarBebidas() {
  const contenedor = document.getElementById("lista-bebidas");

  dataBebidas.bebidas.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("our-menu-item", "wow", "fadeInUp");

    card.innerHTML = `
                    <div class="menu-item-body">
    <div class="menu-item-title">
      <h3>${item.nombre}</h3><hr/><span>${item.precio}</span>
    </div>
  </div>
                `;
    contenedor.appendChild(card);
  });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarBebidas);