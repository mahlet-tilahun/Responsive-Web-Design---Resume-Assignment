// Get elements
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Toggle the nav list visibility on mobile
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
