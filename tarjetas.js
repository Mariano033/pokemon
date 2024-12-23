const categories = [
    {
        title: 'Figuras de Pokemon',
        products: [
            { id: 1, name: 'Turtwing', price:20000, image: './img/tuerwing2.jpg' },
            { id: 2, name: 'Pikachu', price: 26000, image: './img/pikachu22.jpg' },
            { id: 3, name: 'Pikachu', price: 27000, image: './img/pikachu222.jpg' },
            { id: 4, name: 'Magamar', price: 37000, image: './img/magmar22.jpg' },
            { id: 5, name: 'Tyranitar', price: 53000, image: './img/tyra.jpg' },
            { id: 6, name: 'Charmander', price: 27000, image: './img/charmender.jpg' },
            { id: 7, name: 'Charmeleon', price: 37000, image: './img/charmel.jpg' },
            { id: 8, name: 'Charizard', price: 40000, image: './img/chari.jpg' },
            { id: 9, name: 'Bulbasaur', price: 27000, image: './img/bolbasor222.jpg' },
            { id: 10, name: 'Scyther', price: 38000, image: './img/ss.jpg' },
        ],
    },
    {
        title: 'Paquetes de Pokemon',
        products: [
            { id: 11, name: 'Paquete doble', price: 38000, image: './img/pikachu y bol.jpg' },
            { id: 12, name: 'Paquete triple', price: 57000, image: './img/packx3.jpg' },
            { id: 13, name: 'Paquete triple', price:'Consultar', image: './img/charizard.jpg' },
            { id: 14, name: 'Paquete triple', price: 57000, image: './img/paquete agua y tokepi.jpg' },
            { id: 15, name: 'Paquete triple', price: 57000, image: './img/paquete char y meta.jpg' },
        ]
    },

    {
        title: 'Cartas TCG',
        products: [
            { id: 11, name: '50 Cartas TCG', price: 36500,image: './img/cartas.png' },
            { id: 11, name: 'Base Set Booster ', price: 36500,image: './img/Booster.png' },
        ]
    },

    {
        title: 'LLaveros',
        products: [
            { id: 11, name: ' Llaveros Pokedex ', price: 6500 ,image: './img/llaveros.jpg' },

            { id: 11, name: ' Llaveros con Luz Led  ', price:35000 ,image: './img/llaveroled.jpg' },
            
        ]
    },

    {
        title: 'Mochilas',
        products: [
            { id: 11, name: 'Mochila Maestro PKD', price: 65000 ,image: './img/mochila1.jpg' },
            { id: 11, name: ' Mochila Pikachu Rojo ', price:69000 ,image: './img/mochila2.jpg' },
            { id: 11, name: ' Mochila Pikachu Gens ', price:75000 ,image: './img/mochila3.jpg' },
            
        ]
    },
];

const instagramUsername = "pokedexcordoba"; // Reemplaza con el nombre de usuario de tu empresa en Instagram

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
            card.style.width = '250px';

            card.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button 
                        class="btn btn-primary botonn" 
                        onclick="redirectToInstagram('${product.name}', ${product.price})">
                        Consultar en Instagram
                    </button>
                </div>
            `;

            productWrapper.appendChild(card);
        });

        categoryContainer.appendChild(productWrapper);
        productContainer.appendChild(categoryContainer);
    });
}

// Función para redirigir al chat de Instagram
function redirectToInstagram(productName, productPrice) {
    const message = `Hola, estoy interesado en el producto ${productName} con precio $${productPrice}.`;
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;
    window.open(instagramUrl, "_blank"); // Abrir el perfil de Instagram en una nueva pestaña
}

// Llamada para mostrar los productos al cargar la página
displayProducts();
