function addToCart(event) {
  const button = event.target;
  const item = button.getAttribute("data-item");
  const image = button.getAttribute("data-image");

  console.log("Item:", item);
  console.log("Image:", image);

  const cartItem = {
    itemName: item,
    itemImage: image,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item + "has been added to your cart!");
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", addToCart);
});

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "Your cart is empty.";
    return;
  }

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `
   <img src="${item.itemImage}" alt="${item.itemName}" />
  <p>${item.itemName}</p>
  `;

    cartContainer.appendChild(itemElement);
  });
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();

function changeImage(clickedImage) {
  document.getElementById("mainImage").src = clickedImage.src;
}
