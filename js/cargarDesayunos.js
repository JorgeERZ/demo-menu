const jsondata = {
  desayunos: [
   
    {
      nombre: "Huevos al gusto (3 piezas)",
      precio: "$140",
      descripcion:
        "A elección 2 ingredientes: jamón, salchicha, champiñones, tocino, a la mexicana. Acompañado de chilaquiles o frijoles. (+$10 ingrediente extra o bañados en salsa)",
    },
     {
      nombre: "Sincronizadas",
      precio: "$140",
      descripcion: "2 sincronizadas acompañadas con delicioso pico de gallo.",
    },
    {
      nombre: "Molletes",
      precio: "$140",
      descripcion:
        "4 piezas con jamón y queso manchego gratinado. Acompañados con pico de gallo.",
    }
  ],
};

function cargarDesayunos() {
  const contenedor = document.getElementById("lista-desayunos");

  jsondata.desayunos.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", cargarDesayunos);
