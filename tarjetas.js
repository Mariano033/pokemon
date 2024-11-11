// tarjetas.js

const categories = [
    {
        title: 'Figuras Jazwares',
        products: [
            { id: 1, name: 'Turtwing', price: 19000, image: './img/tuerwing2.jpg' },
            { id: 2, name: 'Pikachu', price: 21000, image: './img/pikachu22.jpg' },
            { id: 3, name: 'Pikachu', price: 21000, image: './img/pikachu222.jpg' },
            { id: 4, name: 'Magamar', price: 25000, image: './img/magmar22.jpg' },
            { id: 5, name: 'Tyranitar', price: 38000, image: './img/tyra.jpg' },
            { id: 6, name: 'Charmander', price: 21000, image: './img/charmender.jpg' },
            { id: 7, name: 'Charmeleon', price: 25000, image: './img/charmel.jpg' },
            { id: 8, name: 'Charizard', price: 38000, image: './img/chari.jpg' },
            { id: 9, name: 'Bulbasaur', price: 21000, image: './img/bolbasor222.jpg' },
            { id: 10, name: 'Scyther', price: 35000, image: './img/ss.jpg' },
        ],
    },
    {
        title: 'Paquetes Jazwares',
        products: [
            { id: 11, name: 'Paquete doble', price: 31000, image: './img/pikachu y bol.jpg' },
            { id: 12, name: 'Paquete triple', price: 48000, image: './img/packx3.jpg' },
            { id: 13, name: 'Paquete triple', price: 150000, image: './img/charizard.jpg' },
            { id: 14, name: 'Paquete triple', price: 60000, image: './img/paquete agua y tokepi.jpg' },
            { id: 15, name: 'Paquete triple', price: 55000, image: './img/paquete char y meta.jpg' },
        ]
    },
];

const cart = []; // Arreglo para almacenar los productos en el carrito

// Función para agregar productos al carrito
function addToCart(product) {
    cart.push(product); // Agregar el producto al carrito
    updateCartCount(); // Actualizar el contador del carrito
    displayCart(); // Actualizar la vista del carrito
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    const index = cart.findIndex(product => product.id === productId);
    if (index !== -1) {
        cart.splice(index, 1); // Eliminar el producto del carrito
        updateCartCount(); // Actualizar el contador del carrito
        displayCart(); // Actualizar la vista del carrito
    }
}

// Actualiza el contador del carrito
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length; // Mostrar la cantidad de productos en el carrito
}

// Función para mostrar los productos en el contenedor principal
function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los productos

    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('my-4');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.title;
        categoryTitle.classList.add('text-center');
        categoryContainer.appendChild(categoryTitle);

        const productWrapper = document.createElement('div');
        productWrapper.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

        category.products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card', 'm-2', 'text-center');
            card.style.width = '12rem';

            card.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-success botonn" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}' })">Agregar al carrito</button>
                </div>
            `;

            productWrapper.appendChild(card);
        });

        categoryContainer.appendChild(productWrapper);
        productContainer.appendChild(categoryContainer);
    });
}

// Función para mostrar el carrito dentro del modal
function displayCart() {
    const cartContainer = document.getElementById('cartSummary');
    const cartTotal = document.getElementById('cartTotal');
    cartContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar el carrito

    let total = 0; // Inicializar el total en 0

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
        removeButton.onclick = () => removeFromCart(product.id);

        listItem.appendChild(removeButton);
        cartContainer.appendChild(listItem);
        total += product.price; // Sumar el precio al total
    });

    cartTotal.textContent = total; // Mostrar el total en el modal
}

// Función para alternar el modal del carrito
function toggleCartModal() {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.toggle();
}

// Llamada para mostrar los productos al cargar la página
displayProducts();