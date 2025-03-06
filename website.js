function addToCart(event) {
  const button = event.target;
  const item = button.getAttribute("data-item");
  const image = button.getAttribute("data-image");

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
