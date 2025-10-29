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

document.addEventListener("DOMContentLoaded", () => {
  // buscar input (soporta varios ids o placeholder)
  const searchInput = document.getElementById("searchSkill")
    || document.getElementById("buscador")
    || document.querySelector('input[placeholder*="habilidad"], input[placeholder*="Habilidad"], input[placeholder*="Buscar"]');

  if (!searchInput) {
    console.warn('No se encontró el input de búsqueda. Añade un <input id="searchSkill"> o con id="buscador" o un placeholder que contenga "habilidad".');
    return;
  }

  // seleccionar todos los spans/chips dentro de .tags, .chips y badges sueltos
  const skillSpans = Array.from(document.querySelectorAll(".tags span, .chips span, .badge"));

  // si no hay spans, salir con aviso
  if (skillSpans.length === 0) {
    console.warn("No se encontraron 'span' de habilidades (.tags span, .chips span o .badge). Revisa tu HTML.");
    return;
  }

  // guardar texto original en data attribute y normalizar espacios
  skillSpans.forEach(sp => {
    const original = sp.textContent.trim();
    sp.dataset.original = original;
    // asegurar estilo inline-block para chips (si no lo tienes ya)
    sp.style.display = sp.style.display || "inline-block";
    sp.style.verticalAlign = "middle";
  });

  // crear mensaje "no encontrado" y colocarlo después del input (si no existe)
  let noMsg = document.getElementById("noSkillsMessage");
  if (!noMsg) {
    noMsg = document.createElement("div");
    noMsg.id = "noSkillsMessage";
    noMsg.className = "mt-2 text-muted";
    noMsg.style.display = "none";
    noMsg.textContent = "No se encontraron habilidades.";
    searchInput.parentNode.insertBefore(noMsg, searchInput.nextSibling);
  }

  // helper para escapar regex
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // la función que filtra y resalta
  function filterSkills(raw) {
    const filter = raw.trim().toLowerCase();
    let anyVisible = false;

    skillSpans.forEach(sp => {
      const original = sp.dataset.original || sp.textContent.trim();
      const textLower = original.toLowerCase();

      if (filter === "" || textLower.includes(filter)) {
        // mostrar
        sp.style.display = "inline-block";
        anyVisible = true;

        if (filter !== "") {
          // resaltar coincidencia (mantener original si no hay match por seguridad)
          try {
            const re = new RegExp("(" + escapeRegExp(filter) + ")", "ig");
            sp.innerHTML = original.replace(re, "<mark>$1</mark>");
          } catch (e) {
            // en caso de error con regex, fallback al texto original
            sp.textContent = original;
          }
        } else {
          // restaurar sin highlight
          sp.textContent = original;
        }
      } else {
        // ocultar
        sp.style.display = "none";
      }
    });

    noMsg.style.display = anyVisible ? "none" : "block";
  }

  // listener en tiempo real
  searchInput.addEventListener("input", (e) => {
    filterSkills(e.target.value);
  });

  // inicializar (por si ya hay texto en el input al cargar)
  filterSkills(searchInput.value || "");
});


