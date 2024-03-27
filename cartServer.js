/*
// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 5.99 },
];

// Display products in the cart
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let totalPrice = 0;
  for (const product of productsInCart) {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    cartItems.appendChild(li);
    totalPrice += product.price;
  }

  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(
    2
  )}`;
}

// Handle checkout button click
document.getElementById("checkout-btn").addEventListener("click", function () {
  alert("Checkout completed!");
});

// Initialize cart
const productsInCart = products.slice(); // Initially add all products to cart
displayCart();
*/
