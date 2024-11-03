// tarjetas.js

const categories = [
    {
        title: 'Figuras Jazwares',
        products: [
            { id: 1, name: 'Tuerting', price: 15500, image: './img/tuerwing2.jpg' },
            { id: 2, name: 'Pikachu', price: 18000, image: './img/pikachu22.jpg' },
            { id: 3, name: 'Pikachu', price: 17500, image: './img/pikachu222.jpg' },
            { id: 4, name: 'Magamar', price: 25000, image: './img/magmar22.jpg' },
            { id: 5, name: 'Tyranitar', price: 38000, image: './img/tyra.jpg' },
            { id: 6, name: 'Charmander', price: 18000, image: './img/charmender.jpg' },
            { id: 7, name: 'Charmeleon', price: 25000, image: './img/charmel.jpg' },
            { id: 8, name: 'Charizard', price: 38000, image: './img/chari.jpg' },
            { id: 9, name: 'Boulbasaur', price: 17000, image: './img/bolbasor222.jpg' },
        ],
    },
    {
        title: 'Paquetes Jazwares',
        products: [
            { id: 1, name: 'bolbasur y pikachu', price: 28500, image: './img/bolbaypika.jpg' },
            { id: 2, name: 'Magmar, Pikachu y Tuerting', price: 48000, image: './img/packx3.jpg' },
            { id: 3, name: 'Charmander, Charmeleon, Charizard', price: 150000, image: './img/charizard.jpg' },
        ],
    },
];

// Agregar productos al contenedor
const productContainer = document.getElementById('productContainer');

// Función para mostrar productos
function displayProducts() {
    productContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los productos

    categories.forEach(category => {
        // Crear un contenedor para la categoría
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('my-4');

        // Crear un título para la categoría
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.title;
        categoryTitle.classList.add('text-center');
        categoryContainer.appendChild(categoryTitle);

        // Crear un contenedor para los productos
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
                    <button class="btn btn-success botonn" onclick="addToCart({ name: '${product.name}', price: ${product.price} })">Agregar al carrito</button>
                </div>
            `;

            productWrapper.appendChild(card);
        });

        categoryContainer.appendChild(productWrapper);
        productContainer.appendChild(categoryContainer);
    });
}

// Llamar a displayProducts al cargar la página
window.onload = displayProducts;