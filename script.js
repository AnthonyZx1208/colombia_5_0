// Glosario tecnico generado con JavaScript.
const terminos = [
  ["Figma", "Diseno", "Herramienta para crear interfaces, prototipos y sistemas de diseno."],
  ["UI", "Interfaz", "Conjunto de elementos visuales que permiten interactuar con una aplicacion."],
  ["UX", "Experiencia", "Percepcion y facilidad de uso que tiene una persona al usar un producto."],
  ["Componente", "Diseno", "Elemento reutilizable que mantiene consistencia en una interfaz."],
  ["Variante", "Diseno", "Estado o version diferente de un mismo componente."],
  ["Auto Layout", "Figma", "Funcion que acomoda elementos automaticamente segun el contenido."],
  ["Frame", "Figma", "Contenedor usado para organizar pantallas o grupos de elementos."],
  ["Asset", "Recursos", "Archivo o elemento visual que puede reutilizarse en el proyecto."],
  ["9-slice", "Videojuegos", "Tecnica para escalar paneles sin deformar sus esquinas."],
  ["Prototipo", "Validacion", "Simulacion interactiva para probar una idea antes de programarla."],
  ["HTML5", "Web", "Lenguaje que estructura el contenido de una pagina."],
  ["CSS3", "Web", "Lenguaje que define estilos, colores, espacios y diseno visual."],
  ["JavaScript", "Web", "Lenguaje que permite agregar acciones e interactividad."],
  ["Bootstrap", "Framework", "Biblioteca que facilita crear sitios adaptables con componentes listos."],
  ["Grid", "Maquetacion", "Sistema de filas y columnas para distribuir contenido."],
  ["Responsive", "Diseno web", "Capacidad de adaptarse a celulares, tablets y computadores."],
  ["Navbar", "Navegacion", "Barra de menu que permite desplazarse por la pagina."],
  ["Card", "Componente", "Bloque visual para presentar informacion de forma ordenada."],
  ["Carousel", "Componente", "Elemento que muestra informacion en diapositivas."],
  ["SEO", "Web", "Practicas para mejorar la comprension de una pagina por buscadores."],
  ["Accesibilidad", "Calidad", "Diseno pensado para que mas personas puedan usar un sitio."],
  ["IA", "Tecnologia", "Sistemas capaces de analizar informacion y apoyar tareas complejas."],
  ["Automatizacion", "Productividad", "Ejecucion de tareas mediante sistemas tecnologicos."],
  ["Datos", "Informacion", "Elementos que permiten analizar procesos y tomar decisiones."],
  ["Privacidad", "Etica", "Proteccion de la informacion personal de los usuarios."],
  ["Ciberseguridad", "Seguridad", "Proteccion frente a ataques, perdidas o accesos no autorizados."],
  ["Algoritmo", "Programacion", "Conjunto de pasos ordenados para resolver un problema."],
  ["Repositorio", "Desarrollo", "Espacio donde se guarda y organiza el codigo de un proyecto."],
  ["GitHub Pages", "Publicacion", "Servicio para publicar sitios web desde un repositorio."],
  ["Etica digital", "Responsabilidad", "Criterios para usar tecnologia de forma justa y segura."]
];

const tabla = document.querySelector("#glosarioTabla");

if (tabla) {
  terminos.forEach(([termino, categoria, explicacion]) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><strong>${termino}</strong></td>
      <td>${categoria}</td>
      <td>${explicacion}</td>
    `;
    tabla.appendChild(fila);
  });
}

// Botones para mostrar ideas clave en las tarjetas de charlas.
document.querySelectorAll(".reveal-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.querySelector(`#${targetId}`);

    if (target) {
      target.classList.toggle("is-visible");
      button.textContent = target.classList.contains("is-visible") ? "Ocultar idea clave" : "Mostrar idea clave";
    }
  });
});

// Cierre automatico del menu en pantallas pequenas.
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#menuPrincipal");
    const instance = bootstrap.Collapse.getInstance(menu);

    if (instance) {
      instance.hide();
    }
  });
});
