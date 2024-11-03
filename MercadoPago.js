// Mercado Pago configuration
const mp = new MercadoPago('', {
    locale: 'es-AR' // Ajusta según tu idioma
});

// Función para finalizar la compra
function finalizePurchase() {
    // Verifica que haya productos en el carrito
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
        return;
    }

    const items = cart.map(product => ({
        title: product.name,
        unit_price: product.price,
        quantity: 1 // O la cantidad que desees manejar
    }));

    // Crea la preferencia de pago
    mp.checkout.createPreference({
        items: items,
        back_urls: {
            success: 'http://www.tu-sitio.com/success',
            failure: 'http://www.tu-sitio.com/failure',
            pending: 'http://www.tu-sitio.com/pending'
        },
        auto_return: 'approved',
        notification_url: 'http://www.tu-sitio.com/notifications', // URL para recibir notificaciones
    }).then((preference) => {
        // Redirigir al usuario a la URL de pago
        window.location.href = preference.init_point;
    }).catch((error) => {
        console.error('Error al crear la preferencia', error);
    });}