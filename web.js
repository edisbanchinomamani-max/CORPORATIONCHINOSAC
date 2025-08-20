// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Formulario (demo)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Gracias por contactarnos. Te responderemos pronto.");
});
