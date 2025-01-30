document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Votre message a été envoyé !");
    this.reset();
  });
});
