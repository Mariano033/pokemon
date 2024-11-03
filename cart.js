let cart = [];

// Función para agregar productos al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ''; // Limpiar el contenedor

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    }
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1); // Eliminar el producto
    }
    updateCartDisplay();
}

// Función para finalizar la compra
function finalizePurchase() {
    if (cart.length > 0) {
        alert('Compra finalizada. Detalles: ' + JSON.stringify(cart));
        cart = []; // Vaciar el carrito después de la compra
        updateCartDisplay();
    } else {
        alert('No hay productos en el carrito.');
    }
}
// Función para mostrar u ocultar el modal del carrito
function toggleCartModal() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = (cartModal.style.display === "none" || cartModal.style.display === "") ? "block" : "none";
}