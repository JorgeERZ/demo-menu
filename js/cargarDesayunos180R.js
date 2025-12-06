const jsondata180 = {
  desayunos180: [
    {
      nombre: "Pepitos",
      precio: "$180",
      descripcion:
        "3 mini baguettes rellenos de arrachera, acompañado con papas al centro y chiles en escabeche.",
    },
    {
      nombre: "Los Conquistadores",
      precio: "$180",
      descripcion:
        "Chilaquiles de tortilla azul con 2 huevos pochados, acompañados con una mezcla de champiñón y nopal bañados en salsa roja y espolvoreados con queso de cabra.",
    },
  ],
};

function cargarDesayunos180() {
  const contenedor = document.getElementById("lista-desayunos180");

  jsondata180.desayunos180.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("our-menu-item", "wow", "fadeInUp");

    card.innerHTML = `
                    <div class="menu-item-body">
    <div class="menu-item-title">
      <h3>${item.nombre}</h3><hr/><span>${item.precio}</span>
    </div>
    <div class="menu-item-content">
      <p>${item.descripcion}</p>
    </div>
  </div>
                `;
    contenedor.appendChild(card);
  });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarDesayunos180);
