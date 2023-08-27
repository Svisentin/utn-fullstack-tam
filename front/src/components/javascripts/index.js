const t1 = document.querySelectorAll(".t1");

for (let i = 0; i < t1.length; i++) {
  t1[i].addEventListener("mouseover", () => {
    // Cambiar el contenido y estilo cuando el mouse está sobre el elemento
    t1[i].style.transition = "opacity 1s"; // Agregar la transición
    t1[i].style.opacity = 0;
    console.log(t1)
  });

  t1[i].addEventListener("mouseout", () => {
    // Cambiar el contenido y estilo cuando el mouse está fuera del elemento
     t1[i].style.transition = "opacity 1s"; // Agregar la transición
    t1[i].style.opacity = 1;
  });
}
