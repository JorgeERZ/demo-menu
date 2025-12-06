const dataComidas155 = {
  comidas155: [
    {
      nombre: "Bistec de res",
      precio: "$155",
      descripcion: "Carne a la plancha acompañada de ensalada y arroz.",
    },
    {
      nombre: "Milanesa de res",
      precio: "$155",
      descripcion:
        "Milanesa de res, empanizada y acompañada de ensalada y arroz.",
    },
    {
      nombre: "Pechuga a la plancha",
      precio: "$155",
      descripcion: "Pechuga empanizada acompañada de ensalada y arroz.",
    },
    {
      nombre: "Flautas Ahogadas",
      precio: "$155",
      descripcion:
        "Flautas rellenas de papa, pollo o carne a tu elección, bañadas en salsa verde o roja.",
    },
    {
      nombre: "Enchiladas",
      precio: "$155",
      descripcion:
        "Tortillas pochadas rellenas de pollo bañadas en salsa verde, roja o mole.",
    },
    {
      nombre: "Tortitas de papa",
      precio: "$155",
      descripcion:
        "3 piezas de tortitas de papa, acompañadas de ensalada y arroz.",
    },
    {
      nombre: "Pechuga rellena (120 gr)",
      precio: "$155",
      descripcion: "Rellena de jamón y queso, acompañada de ensalada y arroz.",
    },
    {
      nombre: "Burrito de cochinita",
      precio: "$160",
      descripcion: "Tortilla de harina rellena de cochinita",
    },
    {
      nombre: "Semita de pan brioche",
      precio: "$160",
      descripcion:
        "Pan artesanal relleno de pechuga empanizada y quesillo con corona de espinaca y acompañada de papas.",
    },
  ],
};
function cargarComidas155() {
  const contenedor = document.getElementById("lista-comidas155");

  dataComidas155.comidas155.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", cargarComidas155);
