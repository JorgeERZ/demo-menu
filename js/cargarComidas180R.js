const dataComidas180 = {
  comidas180: [
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
    {
      nombre: "Tampiqueña de ternera",
      precio: "$180",
      descripcion:
        "Filete de ternera acompañado de 3 dobladas en salsa a su elección. Guarnición de rajas con crema y frijoles, ensalada mixta y arroz.",
    },
    {
      nombre: "Filete de pescado al gusto",
      precio: "$180",
      descripcion:
        "Preparación a su gusto (mojo de ajo, ajillo, almendrado, o talla) acompañado con ensalada mixta y guarnición a elegir ( puré de papa, verduras al vapor, arroz o pasta)",
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
