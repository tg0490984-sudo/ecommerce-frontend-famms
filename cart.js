let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const totalDiv = document.getElementById("cart-total");

function renderCart() {

  cartItemsDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <div class="cart-left">
        <img src="${item.image}" width="70">
        <div>
          <h4>${item.name}</h4>
          <p>Rs. ${item.price}</p>
        </div>
      </div>

      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsDiv.appendChild(div);
  });

  totalDiv.textContent = "Total: Rs. " + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
