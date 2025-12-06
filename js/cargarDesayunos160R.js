const jsondata160 = {
  desayunos160: [
    {
      nombre: "Plato de la casa",
      precio: "$160",
      descripcion:
        "Pechuga empanizada acompañada con 3 deliciosas dobladas de mole y ensalada.",
    },
    {
      nombre: "Huevos aporreados",
      precio: "$160",
      descripcion:
        "Huevo revuelto con bistec, ahogado en salsa roja acompañado con frijol de la olla.",
    },
    {
      nombre: "Huevos al albanil",
      precio: "$160",
      descripcion: "Huevos revueltos con bistec, ahogados en salsa verde.",
    },
    {
      nombre: "Chilaquiles de mole",
      precio: "$160",
      descripcion:
        "Totopo bañado en mole, clásica receta poblana. Acompañados de bistec, huevo o pollo a su elección.",
    },
    {
      nombre: "Chilaquiles Mayas",
      precio: "$160",
      descripcion:
        "Totopos bañados en salsa roja de achiote, acompañados de cochinita, adornado con cebolla morada.",
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
    {
      nombre: "Huevos campestres",
      precio: "$160",
      descripcion:
        "Huevo a su elección, sobre cama de calabacitas a la mexicana, bañado en salsa poblana.",
    },
    {
      nombre: "Enchiladas",
      precio: "$160",
      descripcion:
        "Tortillas pochadas rellenas de pollo bañadas en salsa verde, roja o mole.",
    },
    {
      nombre: "Omelette al gusto",
      precio: "$160",
      descripcion:
        "A elección 2 ingredientes: jamón, salchicha, tocino,espinaca, queso o champiñones. Acompañado de chilaquiles o frijoles. (+$10 ingrediente extra o bañados en salsa)",
    },
    {
      nombre: "Chilaquiles",
      precio: "$160",
      descripcion:
        "Verdes o rojos, acompañados de proteína a elegir. (pollo, bistec, huevo)",
    },
    {
      nombre: "Chilaquiles Suizos",
      precio: "$160",
      descripcion:
        "Chilaquiles gratinados bañados en salsa cremosa verde, acompañado de proteína a elegir. (pollo, bistec, huevo) ",
    },
    {
      nombre: "Montados al chapu",
      precio: "$160",
      descripcion:
        "Chilaquiles verdes o rojos, costilla asada, dos huevos estrellados y tocino.",
    },
  ],
};

function cargarDesayunos160() {
  const contenedor = document.getElementById("lista-desayunos160");

  jsondata160.desayunos160.forEach((item) => {
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
document.addEventListener("DOMContentLoaded", cargarDesayunos160);
