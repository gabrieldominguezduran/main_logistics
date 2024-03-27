// JavaScript to toggle the menu on small screens
document.addEventListener("DOMContentLoaded", (event) => {
  const toggler = document.querySelector(".toggler");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu a"); // Selecting all anchor tags inside the menu

  // Event listener for the toggler
  toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggler.classList.toggle("active"); // Toggle class on the toggler as well
  });

  // Event listeners for each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggler.classList.remove("active"); // Remove the toggled class from the toggler
      }
    });
  });
});
