// JavaScript to toggle the menu on small screens
document.addEventListener("DOMContentLoaded", (event) => {
  const toggler = document.querySelector(".toggler");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu a"); // Selecting all anchor tags inside the menu
  const logo = document.querySelector(".main-logo a"); // Selecting the anchor tag inside the main-logo div

  // Event listener for the toggler
  toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggler.classList.toggle("active"); // Toggle class on the toggler as well
  });

  // Function to close the menu
  function closeMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggler.classList.remove("active"); // Remove the toggled class from the toggler
    }
  }

  // Event listeners for each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  // Event listener for the logo
  logo.addEventListener("click", closeMenu);
});

document.addEventListener("scroll", function (e) {
  const scrolled = window.scrollY;
  const parallax = document.querySelector(".main-svg");
  const coords = "30% " + scrolled * 0.25 + "px";
  parallax.style.backgroundPosition = coords;
});
