
  // ======== NAVBAR HAMBURGER TOGGLE ========
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // ======== CONTACT FORM VALIDATION ========
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission

    // Get field values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Remove existing messages
    const oldMsg = form.querySelector(".form-message");
    if (oldMsg) oldMsg.remove();

    // Create a feedback element
    const feedback = document.createElement("p");
    feedback.classList.add("form-message");

    // Simple validation
    if (!name || !email || !message) {
      feedback.textContent = "⚠️ Please fill in all fields.";
      feedback.classList.add("form-error");
      form.appendChild(feedback);
      return;
    }

    // Basic email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      feedback.textContent = "⚠️ Please enter a valid email address.";
      feedback.classList.add("form-error");
      form.appendChild(feedback);
      return;
    }

    // If valid
    feedback.textContent = "✅ Thank you! Your message has been sent.";
    feedback.classList.add("form-success");
    form.appendChild(feedback);

    // Reset form
    form.reset();
  });
