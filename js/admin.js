const URL = '../js/plantas.json'

fetch(URL)
    .then(res=>res.json())
    .then(json=>console.log(json))



console.log('==================================================');
console.log('==================================================');

let contenedorTarjetas = document.getElementById('contenedorTarjetas');
let carrito = [];

//Mostramos los productos en unas tarjetas para la vista del cliente
fetch('../js/plantas.json')
    .then( response => response.json() )
    .then( data => {

        //guardo la data/info que solicitamos dentro de una variable
        const misProductos = data;

        //recorremos con un bucle los datos
        misProductos.forEach(producto => {

            //crear la card
            let card = document.createElement('div');
            //card.classList.add("card");
            card.classList.add("card-image");
            //card.style.width = "18rem";

            //crear la card
            let imagen = document.createElement('img');
            imagen.classList.add("card-img-top");
        
            imagen.src = producto.imagen;
            imagen.alt = 'Producto para la compra'

            //agregamos la imagen a la card
            card.appendChild(imagen);

             //crear la card
            let cardBody = document.createElement('div');
            cardBody.classList.add("card-body");
            
            //crear hr
            let nombreProducto = document.createElement('h5');
            nombreProducto.classList.add("card-title");
            nombreProducto.innerText = producto.nombre;


            //subir el h5 a su contenedor padre
            cardBody.appendChild(nombreProducto);
            

            let descripcionProducto = document.createElement('p');
            descripcionProducto.classList.add("card-text");
            descripcionProducto.innerText = producto.descripcion;

            //subir el p a su contenedor padre
            cardBody.appendChild(descripcionProducto);
            
            let precioProducto = document.createElement('h5');
            
            precioProducto.classList.add("card-title");
            precioProducto.innerText = producto.precio;

            cardBody.appendChild(precioProducto);

            let botonComprar = document.createElement('button');
            botonComprar.classList.add("btn", "btn-success");
            botonComprar.innerText = 'Comprar';
            botonComprar.addEventListener('click', producto => {
                
                //e.preventDefault();
                
                carrito.push(producto);

                console.log(carrito);
                
                //localStorage.setItems('Carrito', JSON.stringify(carrito));
                
            });
            
            cardBody.appendChild(botonComprar);
            
            //agregamos la cardBody a la card
            card.appendChild(cardBody);

            //agregar la card al div contenedor
            contenedorTarjetas.appendChild(card);

        });
    })

