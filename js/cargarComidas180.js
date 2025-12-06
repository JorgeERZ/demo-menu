const dataComidas180 = {
  comidas180: [
    {
      nombre: "Croque Monsieur",
      precio: "$180",
      descripcion:
        "Sandwich de jamon y queso, bañado en salsa bechamel y coronado con costra de queso manchego. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de pollo a la plancha",
      precio: "$180",
      descripcion:
        "Baguette relleno de pollo y queso manchego sobre cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de albóndigas",
      precio: "$95",
      descripcion:
        "Baguette de albondigas con salsa pomodoro y queso gratinado. Acompanado de ensalada o papas.",
    },
    {
      nombre: "Croque Madame",
      precio: "$180",
      descripcion:
        "Sandwich de jamón y queso, bañado en salsa bechamel y coronado con un huevo estrellado tierno. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: " Baguette napolitana",
      precio: "$180",
      descripcion:
        "Baguette de pollo relleno de jamón y queso, bañado en salsa pomodoro. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de carnes frias",
      precio: "$140",
      descripcion:
        "Baguette relleno de mezcla de carnes frias y queso manchego, sobre una cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Chilaquiles rellenos",
      precio: "$160",
      descripcion:
        "8 totopos rellenos de queso oaxaca, bañados con salsa roja y acompañados con la proteína de su elección. (+$30 si desea cecina)",
    },
    {
      nombre: "Chilaquiles rellenos (masa azul)",
      precio: "$160",
      descripcion:
        "8 totopos de masa azul rellenos de queso oaxaca, bañados con salsa roja y acompañados con la proteína de su elección.(+$30 si desea cecina)",
    },
  ],
};
function cargarComidas180() {
  const contenedor = document.getElementById("lista-comidas180");

  dataComidas180.comidas180.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", cargarComidas180);