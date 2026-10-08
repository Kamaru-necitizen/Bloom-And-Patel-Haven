
/*=====================================
ABOUT PAGE SCRIPT
=======================================*/










/*====================================
SHOP PAGE SCRIPT
======================================*/

 // --- Cart array ---
let cart = [];
let total = 0;

// --- Save cart to localStorage ---
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartTotal", total);
}

// --- Load cart from localStorage ---
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  total = Number(localStorage.getItem("cartTotal")) || 0;
  updateCart();
}

// --- Add item to cart ---
function addToCart(product, price) {
  const existingItem = cart.find(item => item.product === product);

  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.subtotal += price;
  } else {
    cart.push({ product, price, quantity: 1, subtotal: price });
  }

  total += price;
  updateCart();
}

// --- Update cart display ---
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.product} (x${item.quantity}) - $${item.subtotal.toFixed(2)}
      <button class="increase-btn" data-index="${index}">+</button>
      <button class="decrease-btn" data-index="${index}">-</button>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total.toFixed(2);

  // Save cart every time it updates
  saveCart();
}

// --- Event delegation for cart buttons ---
document.getElementById("cart-items").addEventListener("click", function (event) {
  const index = event.target.dataset.index;

  if (event.target.classList.contains("increase-btn")) {
    cart[index].quantity++;
    cart[index].subtotal += cart[index].price;
    total += cart[index].price;
  }

  if (event.target.classList.contains("decrease-btn")) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      cart[index].subtotal -= cart[index].price;
      total -= cart[index].price;
    } else {
      total -= cart[index].subtotal;
      cart.splice(index, 1);
    }
  }

  if (event.target.classList.contains("remove-btn")) {
    total -= cart[index].subtotal;
    cart.splice(index, 1);
  }

  updateCart();
});

// --- Clear cart ---
function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

// --- Restore cart when page loads ---
window.addEventListener("DOMContentLoaded", loadCart);


/*====================================
ORDER PAGE SCRIPT
======================================*/













/*====================================
BLOG PAGE SCRIPT
======================================*/

 function togglePost(id) {
  const post = document.getElementById(id);
  const button = event.target; // the button that was clicked

  if (post.style.display === "none") {
    post.style.display = "block";   // show the full content
    button.textContent = "Read Less"; // change button text
  } else {
    post.style.display = "none";    // hide it again
    button.textContent = "Read More"; // revert button text
  }
}



/*====================================
GIFT PAGE SCRIPT
======================================*/









/*====================================
CONTACT PAGE SCRIPT
======================================*/    