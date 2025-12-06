const dataComidas155 = {
  comidas155: [
    {
      nombre: "Enchiladas Verdes",
      precio: "$155",
      descripcion: "Tortillas pochadas rellenas de pollo, bañadas en salsa verde. Acompañadas de crema, queso y cebolla.",
    },
    {
      nombre: "Los Conquistadores",
      precio: "$155",
      descripcion:
        "Chilaquiles banados en nuestras 3 salsas (verde, roja y suprema) con un huevo estrellado, carne y pollo.",
    },
    {
      nombre: "Plato de la casa",
      precio: "$155",
      descripcion:
        "Cecina asada con chilaquiles rojos hervidos. Acompañada de ensalada.",
    },
    {
      nombre: "Enchiladas Suizas",
      precio: "$155",
      descripcion:
        "Tortillas pochadas rellenas de pollo y banadas en cremosa salsa verde, con queso gratinado.",
    },
    {
      nombre: "Wrap de pollo empanizado",
      precio: "$155",
      descripcion:
        "Tortilla de harina con cama de ensalada, pollo relleno con queso y jamón. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Wrap de pollo a la plancha",
      precio: "$155",
      descripcion:
        "Tortilla de harina rellena de pollo a la plancha y vegetales. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Wrap de pollo a las finas hierbas",
      precio: "$155",
      descripcion:
        "Tortilla de harina rellena de pollo a las finas hierbas montado sobre una cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Baguette de pollo a las finas hierbas",
      precio: "$155",
      descripcion:
        "Baguette relleno de pollo a las finas hierbas y cama de ensalada. Acompañado de papas a la francesa o ensalada.",
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