// =====================
// General Functions
// =====================

// Greeting (requirement)
function greetUser() {
  console.log("Welcome to the Product Review Site!");
}
greetUser();

// Populate product dropdown in form.html
const productsList = [
  { id: "fc-1888", name: "Flux Capacitor", rating: 4.5 },
  { id: "fc-2050", name: "Power Laces", rating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", rating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", rating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", rating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#product");
  if (!select) return; // Only run on form.html

  productsList.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
