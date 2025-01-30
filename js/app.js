document.addEventListener("DOMContentLoaded", function () {
  // إنشاء زر القائمة المتنقلة (☰) للأجهزة الصغيرة
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";
  document.querySelector(".navbar .container").prepend(menuToggle);

  const navLinks = document.querySelector(".nav-links");

  // تشغيل وإيقاف القائمة عند النقر
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // تفعيل التمرير السلس عند النقر على الروابط في القائمة
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });

      // إغلاق القائمة في الأجهزة الصغيرة بعد النقر على الرابط
      navLinks.classList.remove("active");
    });
  });

  // معالجة إرسال نموذج التواصل
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // استخراج القيم من النموذج
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // عرض رسالة نجاح بعد الإرسال
    const successMessage = document.createElement("p");
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.style.color = "green";
    successMessage.style.marginTop = "10px";

    // إزالة أي رسالة سابقة
    const existingMessage = document.getElementById("form-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    successMessage.id = "form-message";
    event.target.appendChild(successMessage);

    // إعادة تعيين النموذج بعد الإرسال
    event.target.reset();
  });
});
