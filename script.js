document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.getElementById("saludo");
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "¡Buenos días!";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes!";
  } else {
    mensaje = "¡Buenas noches!";
  }

  saludo.textContent = mensaje;
});

const toggleBtn = document.getElementById("toggleExperiencia");
const experienciaContent = document.getElementById("experienciaContent");

experienciaContent.addEventListener("shown.bs.collapse", () => {
  toggleBtn.textContent = "Ocultar Experiencia";
});

experienciaContent.addEventListener("hidden.bs.collapse", () => {
  toggleBtn.textContent = "Mostrar Experiencia";
});
