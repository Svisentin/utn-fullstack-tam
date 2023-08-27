const cambio = document.querySelectorAll(".cambio");

for (let i = 0; i < cambio.length; i++) {
  cambio[i].addEventListener("mouseover", () => {
    // Cambiar el contenido y estilo cuando el mouse está sobre el elemento
    cambio[i].style.transition = "opacity 0.5s"; // Agregar la transición
    cambio[i].style.opacity = 0;
  });

  cambio[i].addEventListener("mouseout", () => {
    // Cambiar el contenido y estilo cuando el mouse está fuera del elemento
     cambio[i].style.transition = "opacity 0.5s"; // Agregar la transición
    cambio[i].style.opacity = 1;
  });
}
