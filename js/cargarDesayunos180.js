const jsondata180 = {
  desayunos180: [
    {
      nombre: "Tortilla española",
      precio: "$180",
      descripcion: "1 pieza de tortilla española acompañada de ensalada.",
    },
    {
      nombre: "Los Conquistadores",
      precio: "$180",
      descripcion:
        "Chilaquiles bañados en nuestras 3 salsas (verde, roja y suprema), con 1 huevo estrellado, carne y pollo.",
    },
    {
      nombre: "Chilaquil supremo",
      precio: "$180",
      descripcion:
        "8 totopos rellenos de queso oaxaca, bañados en salsa suprema y acompañados de cecina.",
    },
    {
      nombre: "Huevos benedictinos",
      precio: "$180",
      descripcion:
        "Huevos pochados con cama de pan brioche con jamón y queso. Acompañados de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de pollo a la plancha",
      precio: "$180",
      descripcion:
        "Baguette relleno de pollo y queso manchego sobre cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Huevos estilo Monterrey",
      precio: "$180",
      descripcion:
        "2 piezas de huevo estrellado, servidos sobre tortilla pochada, con frijoles y carne molida, bañados con salsa roja, coronados con tocino. Acompañado de frijoles refritos.",
    },
    {
      nombre: " Baguette napolitana",
      precio: "$180",
      descripcion:
        "Baguette de pollo relleno de jamón y queso, bañado en salsa pomodoro. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Croque Monsieur",
      precio: "$180",
      descripcion:
        "Sandwich de jamon y queso, bañado en salsa bechamel y coronado con costra de queso manchego. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Croque Madame",
      precio: "$180",
      descripcion:
        "Sandwich de jamón y queso, bañado en salsa bechamel y coronado con un huevo estrellado tierno. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de carnes frias",
      precio: "$180",
      descripcion:
        "Baguette relleno de mezcla de carnes frias y queso manchego, sobre una cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Club sandwich",
      precio: "$180",
      descripcion:
        "Sandwich relleno de ensalada de pollo, jamon y tocino. Acompañado de ensalada o papas a la francesa.",
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