// Product Data (object + array)
const products = [
  { name: "Flux Capacitor", rating: 4.5 },
  { name: "Power Laces", rating: 4.7 },
  { name: "Time Circuits", rating: 3.5 },
  { name: "Low Voltage Reactor", rating: 3.9 },
  { name: "Warp Equalizer", rating: 5.0 }
];

// Display products on the Products page
function displayProducts() {
  const container = document.querySelector("#products");
  if (!container) return; // Avoid errors on pages without #products

  products.forEach(product => {
    let message;

    // Conditional branching for rating
    if (product.rating >= 4) {
      message = "Highly Recommended ⭐";
    } else if (product.rating >= 3) {
      message = "Average Product ⚡";
    } else {
      message = "Not Recommended ❌";
    }

    // Template literal for product card
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rating: ${product.rating}</p>
      <p>${message}</p>
      <button class="save-btn">Save</button>
    `;

    // Event listener + localStorage
    card.querySelector(".save-btn").addEventListener("click", () => {
      localStorage.setItem("selectedProduct", product.name);
      alert(`${product.name} saved to your favorites!`);
    });

    container.appendChild(card);
  });
}

// Populate product dropdown in form.html
function populateProductDropdown() {
  const select = document.querySelector("#product");
  if (!select) return; // Avoid errors on pages without #product

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// Run functions after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  populateProductDropdown();
});
