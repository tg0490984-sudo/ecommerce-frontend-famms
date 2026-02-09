let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");

function updateCartCount() {
  if (cartCount) cartCount.textContent = cart.length;
}

updateCartCount();

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const product = {
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      image: btn.dataset.image,
      id: Date.now()
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    showToast();
  });
});
