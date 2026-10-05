
/*=====================================
ABOUT PAGE SCRIPT
=======================================*/










/*====================================
SHOP PAGE SCRIPT
======================================*/

// Cart array to store items
let cart = [];
let total = 0;

// Add item to cart
function addToCart(product, price) {
  // Check if product already exists
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

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.product} (x${item.quantity}) - $${item.subtotal.toFixed(2)}
      <button onclick="increaseQuantity(${index})">+</button>
      <button onclick="decreaseQuantity(${index})">-</button>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Increase quantity
function increaseQuantity(index) {
  cart[index].quantity += 1;
  cart[index].subtotal += cart[index].price;
  total += cart[index].price;
  updateCart();
}

// Decrease quantity
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    cart[index].subtotal -= cart[index].price;
    total -= cart[index].price;
  } else {
    removeFromCart(index);
  }
  updateCart();
}

// Remove item completely
function removeFromCart(index) {
  total -= cart[index].subtotal;
  cart.splice(index, 1);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}



/*====================================
ORDER PAGE SCRIPT
======================================*/













/*====================================
BLOG PAGE SCRIPT
======================================*/

function togglePost(id) {
  const post = document.getElementById(id);
  if (post.style.display === "none") {
    post.style.display = "block"; // show the full content
  } else {
    post.style.display = "none";  // hide it again
  }
}





/*====================================
GIFT PAGE SCRIPT
======================================*/









/*====================================
CONTACT PAGE SCRIPT
======================================*/    