

const mercadopago = new MercadoPago('<PUBLIC_KEY>', {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });

  document.getElementById("checkout-btn").addEventListener("click",function(){
    const orderData = {
        quantity:document.getElementById("quantity").innerHTML,
        description:document.getElementById("product-description").innerHTML,
        price:document.getElementById("unit-price").innerHTML,
    
        
    };

    fetch("http://localhost:8080/create_preference"),{
        method:"POST",
        headers:{
           "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    }
})