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

const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Modo claro';
    toggleThemeBtn.classList.remove("btn-dark");
    toggleThemeBtn.classList.add("btn-light");
  } else {
    toggleThemeBtn.innerHTML = '<i class="bi bi-moon-fill"></i> Modo oscuro';
    toggleThemeBtn.classList.remove("btn-light");
    toggleThemeBtn.classList.add("btn-dark");
  }
});

const toggleContactoBtn = document.getElementById("toggleContacto");
const contactoContent = document.getElementById("contactoContent");

contactoContent.addEventListener("shown.bs.collapse", () => {
  toggleContactoBtn.innerHTML = '<i class="bi bi-eye-slash-fill"></i> Ocultar contacto';
});

contactoContent.addEventListener("hidden.bs.collapse", () => {
  toggleContactoBtn.innerHTML = '<i class="bi bi-eye-fill"></i> Mostrar contacto';
});

