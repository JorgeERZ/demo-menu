const jsondata160 = {
  desayunos160: [
    {
      nombre: " The Wall",
      precio: "$160",
      descripcion:
        "Un desayuno americano que consta de 3 huevos estrellados o revueltos, tocino y 3 deliciosos hotcakes. ",
    },
    {
      nombre: "Huevos divorciados",
      precio: "$160",
      descripcion:
        "2 huevos estrellados sobre sincronizadas, bañados con salsa roja y verde.",
    },
    {
      nombre: "Huevos ahogados",
      precio: "$160",
      descripcion: "3 piezas de huevo cocinados en salsa roja.",
    },
    {
      nombre: "Grilled cheese",
      precio: "$160",
      descripcion:
        "Sandwich de mezcla de quesos, acompañado de crema de jitomate.",
    },
    {
      nombre: "Enchiladas verdes",
      precio: "$160",
      descripcion:
        "Tortillas pochadas rellenas de pollo, bañadas en salsa verde, acompañadas de crema, queso y cebolla.",
    },
    {
      nombre: "Sandwich philly",
      precio: "$160",
      descripcion:
        "Pan brioche con queso manchego y centro de res, con un toque de cebolla al chipotle. Acompañado de ensalada o papas a la francesa.",
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
    {
      nombre: "Omelette al gusto",
      precio: "$160",
      descripcion:
        "Elaborado con 3 piezas de huevo y a elegir 2 ingredientes: jamón, tocino, salchicha, espinaca, queso, champinones.($+10 ingrediente extra o bañado en salsa)",
    },
    {
      nombre: "Plato de la casa",
      precio: "$160",
      descripcion:
        "Cecina asada y chilaquiles rojos hervidos, acompañado de ensalada.",
    },
    {
      nombre: "Enchiladas suizas",
      precio: "$160",
      descripcion:
        "Tortillas pochadas rellenas de pollo, bañadas en una cremosa salsa verde, con queso gratinado.",
    },
    {
      nombre: "Wrap de pollo empanizado",
      precio: "$160",
      descripcion:
        "Tortilla de harina con cama de ensalada, pollo relleno con queso y jamón. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Wrap de pollo a la plancha",
      precio: "$160",
      descripcion:
        "Tortilla de harina rellena de pollo a la plancha y vegetales. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Wrap de pollo a las finas hierbas",
      precio: "$160",
      descripcion:
        "Tortilla de harina rellena de pollo a las finas hierbas montado sobre una cama de ensalada. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Croissant toast",
      precio: "$160",
      descripcion:
        "Croissant caramelizado en miel maple. Con jamón, queso gratinado, lechuga, germen de alfalfa y guacamole. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Croissant sabayón",
      precio: "$160",
      descripcion:
        "Croissant relleno de jamón y queso derretido, coronado con 2 piezas de huevo pochado. Bañado en salsa sabayón. Acompañado de ensalada o papas a la francesa.",
    },
    {
      nombre: "Chilaquiles",
      precio: "$160",
      descripcion: "Verdes o rojos, acompañados  de bistec, pollo o huevo.",
    },
    {
      nombre: "Enchiladas veracruzanas",
      precio: "$160",
      descripcion:
        "Enchiladas rellenas de huevo a la mexicana, bañadas en salsa de frijol, con un toque de chorizo.",
    },
    {
      nombre: "Huevos turcos",
      precio: "$160",
      descripcion:
        "Huevos escalfados servidos sobre una cama de yogurt preparada con ajo pochado y perejil, el plato es terminado con mantequilla al chile.",
    }
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