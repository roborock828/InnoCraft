document.addEventListener("DOMContentLoaded", function () {
  
  /* ======== Menu Toggle (Mobile) ======== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // إغلاق القائمة بعد النقر على أي رابط (في الجوال)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  /* ======== Smooth Scrolling Effect ======== */
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    });
  });

  /* ======== Contact Form Submission Effect ======== */
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // استخراج بيانات النموذج
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // عرض رسالة نجاح بعد الإرسال
    const successMessage = document.createElement("p");
    successMessage.textContent = "Votre message a été envoyé avec succès !";
    successMessage.style.color = "green";
    successMessage.style.marginTop = "10px";

    // إزالة أي رسالة سابقة
    const existingMessage = document.getElementById("form-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    successMessage.id = "form-message";
    contactForm.appendChild(successMessage);

    // إعادة تعيين النموذج بعد الإرسال
    contactForm.reset();
  });

});
