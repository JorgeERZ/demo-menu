const dataComidas = {
  pastas: [
    {
      nombre: "Espagueti al burro",
      precio: "$95",
      descripcion:
        "Pasta salteada con mantequilla, decorada con queso parmesano.",
    },
    {
      nombre: "Espagueti alfredo",
      precio: "$95",
      descripcion:
        "Pasta salteada en una cremosa salsa blanca y queso parmesano.",
    },
    {
      nombre: "Pasta arrabiata",
      precio: "$95",
      descripcion:
        "Pasta salteada en salsa picante de jitomate, decorada con queso rallado.",
    },
    {
      nombre: "Espagueti a la boloñesa",
      precio: "$95",
      descripcion:
        "Pasta salteada en salsa boloñesa, decorada con queso parmesano.",
    },
    {
      nombre: "Pasta al chipotle",
      precio: "$95",
      descripcion: "Pasta banda en salsa cremosa de chipotle.",
    },
  ],
};
function cargarPastas() {
  const contenedor = document.getElementById("lista-pastas");

  dataComidas.pastas.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("our-menu-item", "wow", "fadeInUp");

    card.innerHTML = `
                    <div class="menu-item-body">
    <div class="menu-item-title">
      <h3>${item.nombre}</h3><hr/>
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
document.addEventListener("DOMContentLoaded", cargarPastas);