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

// Statiscts chart

const canvas = document.getElementById("deliveryChart");
const context = canvas.getContext("2d");

const onTimePercentage = 85.47;
const latePercentage = 14.53;

// Function to draw the pie chart
function drawPieSlice(
  ctx,
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  color
) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

// Calculate where each segment ends
const onTimeAngle = (onTimePercentage / 100) * 2 * Math.PI; // Full circle is 2*PI radians
const lateAngle = (latePercentage / 100) * 2 * Math.PI;

// Draw each segment
drawPieSlice(context, centerX, centerY, radius, 0, onTimeAngle, "#339966"); // Green for on-time
drawPieSlice(
  context,
  centerX,
  centerY,
  radius,
  onTimeAngle,
  onTimeAngle + lateAngle,
  "#003366"
); // Blue for late

// Legend
let legend = document.getElementById("legend");
legend.innerHTML +=
  '<h3 style="color: #339966; margin: 5px;">&#9632; On Time - ' +
  onTimePercentage.toFixed(2) +
  "%</h3>";
legend.innerHTML +=
  '<h3 style="color: #003366; margin: 5px;">&#9632; Running Late - ' +
  latePercentage.toFixed(2) +
  "%</h3>";
