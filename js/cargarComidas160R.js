const dataComidas160 = {
  comidas160: [
    {
      nombre: "Plato de la casa",
      precio: "$160",
      descripcion:
        "Pechuga empanizada acompañada con 3 deliciosas dobladas de mole y ensalada.",
    },
    {
      nombre: "Chilaquiles Suizos",
      precio: "$160",
      descripcion:
        "Chilaquiles gratinados bañados en salsa cremosa verde, acompañado de proteína a elegir. (pollo, bistec, huevo) ",
    },
    {
      nombre: "San panchos",
      precio: "$160",
      descripcion:
        "Pechuga de pollo empanizada, gratinada con quesillo y bañada en salsa poblana.",
    },
  ],
};
function cargarComidas160() {
  const contenedor = document.getElementById("lista-comidas160");

  dataComidas160.comidas160.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", cargarComidas160);
