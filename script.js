// Get elements
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a"); // Select all nav links

// Toggle the nav list visibility on mobile
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Close the menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active"); // Hide menu after clicking a link
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

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      emailjs
        .send("service_aio1q43", "template_y7lbo2d", {
          from_name: name,
          from_email: email,
          message: message,
        })
        .then(function (response) {
          alert("Thank you, " + name + "! Your message has been sent.");
          document.getElementById("contact-form").reset(); // Reset form after submission
        })
        .catch(function (error) {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
});

