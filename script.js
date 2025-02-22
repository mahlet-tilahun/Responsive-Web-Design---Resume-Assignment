/ Get elements
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Toggle the nav list visibility on mobile
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-list li a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("4N1CiWnrXpmh08rtc");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let errors = [];

      // Validate Name (at least 2 characters)
      if (name.length < 2) {
        errors.push("Name must be at least 2 characters.");
      }

      // Validate Email (basic format)
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
      }

      // Validate Message (at least 10 characters)
      if (message.length < 10) {
        errors.push("Message must be at least 10 characters.");
      }

      // If errors exist, show alerts and stop submission
      if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
      }

      // Send email if validation passes
      emailjs
        .send("service_aio1q43", "template_y7lbo2d", {
          from_name: name,
          from_email: email,
          message: message,
        })
        .then(function () {
          alert("Thank you, " + name + "! Your message has been sent.");
          document.getElementById("contact-form").reset(); // Reset form after submission
        })
        .catch(function (error) {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
});

