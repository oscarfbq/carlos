// =================================================================
// BASE DE DATOS DE PRODUCTOS
// =================================================================
const baseDeDatos = {
    fruteria: [
        { 

            nombre: 'Aguacate', 

            precio: 59.00, 

            img: 'frutas/aguacate.jpg' 

        },

        { 

            nombre: 'Albahaca', 

            precio: 49.00, 

            img: 'frutas/albhaca.jpg' 

        },

        { 

            nombre: 'Apio', 

            precio: 39.50, 

            img: 'frutas/apio.jpg' 

        },

        { 

            nombre: 'Ajo', 

            precio: 149.00, 

            img: 'frutas/ajo.jpg' 

        },

        { 

            nombre: 'Brocoli', 

            precio: 36.00, 

            img: 'frutas/brocoli.jpg' 

        },



         { 

            nombre: 'Calabaza italiana', 

            precio: 18.00, 

            img: 'frutas/calabazaitaliana.jpg' 

        },

        { 

            nombre: 'cebolla', 

            precio: 17.00, 

            img: 'frutas/cebolla.jpg' 

        },

        { 

            nombre: 'Cebolla blanca grande', 

            precio: 22.50, 

            img: 'frutas/cebolla.jpg' 

        },

        { 

            nombre: 'Cebolla blanca mediana', 

            precio: 27.00, 

            img: 'frutas/cebolla.jpg' 

        },

        { 

            nombre: 'Cebolla cambray', 

            precio: 35.00, 

            img: 'frutas/cebolla cambray.jpg' 

        },

        { 

            nombre: 'Cebolla morada', 

            precio: 25.00, 

            img: 'frutas/cebolla morada.jpg' 

        },

        { 

            nombre: 'Champiñón', 

            precio: 105.00, 

            img: 'frutas/champinon.jpg' 

        },

        { 

            nombre: 'Chayote', 

            precio: 25.00, 

            img: 'frutas/chayote.jpg' 

        },

        

        { 

            nombre: 'Chile habanero', 

            precio: 179.00, 

            img: 'frutas/habanero.jpg' 

        },

        { 

            nombre: 'Chile jalapeño', 

            precio: 35.00, 

            img: 'frutas/chile jalapeno.jpg' 

        },

       

       

        { 

            nombre: 'Chileserrano verde', 

            precio: 45.00, 

            img: 'frutas/chileserrano.jpg' 

        },

        { 

            nombre: 'Cilantro', 

            precio: 89.00, 

            img: 'frutas/cilantro.jpg' 

        },

        { 

            nombre: 'Col blanca', 

            precio: 29.50, 

            img: 'frutas/colblanca.jpg' 

        },

        { 

            nombre: 'Col morada', 

            precio: 39.00, 

            img: 'frutas/colmorada.jpg' 

        },

        { 

            nombre: 'Coliflor', 

            precio: 39.00, 

            img: 'frutas/coliflor.jpg' 

        },

        { 

            nombre: 'Fresa', 

            precio: 79.00, 

            img: 'frutas/fresa.jpg' 

        },

        { 

            nombre: 'Hierbabuena', 

            precio: 169.00, 

            img: 'frutas/hierbabuena.jpg' 

        },

        { 

            nombre: 'Jícama', 

            precio: 19.50, 

            img: 'frutas/jicama.jpg' 

        },

        { 

            nombre: 'Jitomate bola', 

            precio: 37.00, 

            img: 'frutas/jitomate bola.jpg' 

        },

        { 

            nombre: 'Jitomate primera', 

            precio: 18.50, 

            img: 'frutas/jitomate primera.jpg' 

        },

        { 

            nombre: 'Jitomate segunda', 

            precio: 16.00, 

            img: 'frutas/jitomate segunda.jpg' 

        },

        { 

            nombre: 'Lechuga bola', 

            precio: 22.00, 

            img: 'frutas/lechugabola.jpg' 

        },

        { 

            nombre: 'Lechugas finas', 

            precio: 32.00, 

            img: 'frutas/lechuga finas.jpg' 

        },

        { 

            nombre: 'Limón agrio grande', 

            precio: 25.00, 

            img: 'frutas/limonagriogrande.jpg' 

        },

        { 

            nombre: 'Limón agrio mediano', 

            precio: 21.00, 

            img: 'frutas/limonagriomediano.jpg' 

        },

        { 

            nombre: 'Limón sin semilla', 

            precio: 18.50, 

            img: 'frutas/limon sin semilla.jpg' 

     

        },

        { 

            nombre: 'Manzana golden', 

            precio: 44.80, 

            img: 'frutas/manzanagolden.jpg' 

        },

        { 

            nombre: 'Naranja amarilla', 

            precio: 39.50, 

            img: 'frutas/naranja amarilla.jpg' 

        },

        { 

            nombre: 'Naranja verde', 

            precio: 21.50, 

            img: 'frutas/naranja verde.jpg' 

        },

        { 

            nombre: 'Papa blanca', 

            precio: 19.50, 

            img: 'frutas/papablanca.jpg' 

        },

        { 

            nombre: 'Pepinillo', 

            precio: 34.50, 

            img: 'frutas/pepinillos.jpg' 

        },

        { 

            nombre: 'Pepino', 

            precio: 29.00, 

            img: 'frutas/pepino.jpg' 

        },

        { 

            nombre: 'Pera', 

            precio: 89.80, 

            img: 'frutas/pera.jpg' 

        },

        { 

            nombre: 'Pimiento morrón', 

            precio: 67.00, 

            img: 'frutas/morron.jpg' 

        },

        { 

            nombre: 'Poro', 

            precio: 39.00, 

            img: 'frutas/poro.jpg' 

        },

        { 

            nombre: 'Rábanos', 

            precio: 39.00, 

            img: 'frutas/rabanos.jpg' 

        },

        { 

            nombre: 'Sandía personal', 

            precio: 19.50, 

            img: 'frutas/sandiapersonal.jpg' 

        },

        { 

            nombre: 'Tomate', 

            precio: 13.00, 

            img: 'frutas/tomate.jpg' 

        },

        { 

            nombre: 'Uva verde sin semilla', 

            precio: 159.00, 

            img: 'frutas/uva verde.jpg' 

        },

        { 

            nombre: 'Zanahoria', 

            precio: 19.50, 

            img: 'frutas/zanahoria.jpg' 

        },
    ],
    carniceria: [
        { 
          nombre: 'Pechuga fileteada', 
           precio: 149.00, 
           img: 'carniceria/pechuga filetiada.jpg' 
         },
         { 
          nombre: 'Pierna y muslo', 
           precio: 145.00, 
           img: 'carniceria/pierna y muslo.JPG' 
         },
         { 
          nombre: 'Milanesa de cerdo', 
           precio: 129.00, 
           img: 'carniceria/milanesa de cerdo.JPG' 
         },
         { 
          nombre: 'Bistec picado', 
           precio: 95.00, 
           img: 'carniceria/bistec picado.JPG' 
         },
         { 
          nombre: 'Carne molida', 
           precio: 139.00, 
           img: 'carniceria/carne molida.JPG' 
         },
         { 
          nombre: 'Pechuga de pollo', 
           precio: 149.00, 
           img: 'carniceria/pechuga de pollo.jpg' 
         },
    ],
    semillas: [
        { 
            nombre: 'Almendra entera', 
            precio: 195.00, 
            img: 'semillas y secos/almendra entera.jpeg' 
        },

        { 
            nombre: 'Almendra fileteada', 
            precio: 209.00, 
            img: 'semillas y secos/almendra filetiada.png' 
        },
        { 
            nombre: 'Alpiste', 
            precio: .00, 
            img: 'semillas y secos/alpiste.jpeg' 
        },
        { 
            nombre: 'Arina de trigo', 
            precio: 28.00, 
            img: 'semillas y secos/arina de trigo.webp' 
        },
        { 
            nombre: 'Arros paisa', 
            precio: 24.50, 
            img: 'semillas y secos/arros paisa.webp' 
        },
        { 
            nombre: 'Arros saman', 
            precio: 26.00, 
            img: 'semillas y secos/arroz saman.jpg' 
        },
        { 
            nombre: 'Azucar', 
            precio: 24.90, 
            img: 'semillas y secos/azucar.png' 
        },
        { 
            nombre: 'Azucaradas', 
            precio: 75.00, 
            img: 'semillas y secos/azucaradas.webp' 
        },
        { 
            nombre: 'Camaron sin cabeza ', 
            precio: 289.00, 
            img: 'semillas y secos/camaron sin cabeza.jpg' 
        },
        { 
            nombre: 'Casta braba', 
            precio: 19.50, 
            img: 'semillas y secos/casta brava.jpeg' 
        },
        { 
            nombre: 'Choco nubis', 
            precio: 89.00, 
            img: 'semillas y secos/choconubis.webp' 
        },
        { 
            nombre: 'Coco rallado', 
            precio: 95.90, 
            img: 'semillas y secos/coco rallado.jpg' 
        },
        { 
            nombre: 'Cueritos rayados', 
            precio: 29.50, 
            img: 'semillas y secos/cueritos rayados.webp' 
        },
         { 

            nombre: 'Chile morita', 

            precio: 149.00, 

            img: 'frutas/chilemorita.jpg' 

        },
         { 

            nombre: 'Chile puya', 

            precio: 139.00, 

            img: 'frutas/chilepuya.jpg' 

        },
        { 

            nombre: 'Chile de árbol', 

            precio: 129.00, 

            img: 'frutas/chile de arbol.jpg' 

        },

        { 

            nombre: 'Chile guajillo', 

            precio: 149.00, 

            img: 'frutas/chileguajillo.jpg' 

        },
        { 
            nombre: 'Cueritos enteros', 
            precio: 29.50, 
            img: 'semillas y secos/cueritosn enteros.webp' 
        },
        { 
            nombre: 'Frijol flor de junio', 
            precio: 29.50, 
            img: 'semillas y secos/frijol de junio.png' 
        },
        { 
            nombre: 'Frijol peruano', 
            precio: 36.00, 
            img: 'semillas y secos/frijpl peruano.jpg' 
        },
        { 
            nombre: 'Maiz palomero', 
            precio: 29.50, 
            img: 'semillas y secos/maiz palomero.webp' 
        },
        
        { 
            nombre: 'Sal de grano', 
            precio: 14.50, 
            img: 'semillas y secos/sal de grano.jpeg' 
        },
        { 
            nombre: 'Sal', 
            precio: 12.50, 
            img: 'semillas y secos/sal.webp' 
        },
        { 
            nombre: 'Tamarindo', 
            precio: 89.00, 
            img: 'semillas y secos/tamarindo.jpeg' 
        },
        
        
    ]
};


// =================================================================
// (NUEVA) FUNCIÓN PARA CARGAR PRODUCTOS EN EL HTML
// =================================================================
function cargarProductos(productos, gridElementId) {
    const grid = document.getElementById(gridElementId);
    
    // Si no encuentra el grid, avisa en la consola y no hace nada
    if (!grid) {
        console.warn(`No se encontró el elemento con id: ${gridElementId}`);
        return; 
    }

    grid.innerHTML = ''; // Limpiamos el grid

    // Recorremos la lista de productos
    productos.forEach(producto => {
        
        // Creamos el HTML para la tarjeta
        const tarjetaHTML = `
            <div class="producto-card">
                <img src="${producto.img}" alt="${producto.nombre}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio.toFixed(2)} / kg</p>
                
                <div class="kilo-selector">
                    <button type="button" class="btn-kilo btn-menos" aria-label="Disminuir">-</button>
                    <input class="kilo-input" type="text" value="1.0" readonly>
                    <button type="button" class="btn-kilo btn-mas" aria-label="Aumentar">+</button>
                    <span class="kilo-label">kg</span>
                </div>
                
                <button class="btn-compra" data-nombre="${producto.nombre}" data-precio="${producto.precio.toFixed(2)}">
                    Añadir a la Cesta
                </button>
            </div>
        `;
        
        // Añadimos la tarjeta al grid
        grid.innerHTML += tarjetaHTML;
    });
}


// =================================================================
// LÓGICA PRINCIPAL DEL CARRITO
// =================================================================

// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES IMPORTANTES ---
    
    let carrito = {};

    // ¡¡¡CAMBIA ESTE NÚMERO POR EL TUYO!!!
    const TU_NUMERO_DE_WHATSAPP = "524613267745"; 

    // Seleccionamos los elementos del DOM
    const listaCarrito = document.getElementById('lista-carrito');
    const totalPedido = document.getElementById('total-pedido');
    const carritoContador = document.getElementById('carrito-contador');
    const btnEnviarWhatsApp = document.getElementById('enviar-whatsapp');
    
    // Selectores de los Grids de productos
    const gridFruteria = document.getElementById('grid-fruteria');
    const gridCarniceria = document.getElementById('grid-carniceria');
    const gridSemillas = document.getElementById('grid-semillas');


    // --- (NUEVO) CARGA INICIAL DE PRODUCTOS ---
    // Carga los productos en sus respectivos grids
    cargarProductos(baseDeDatos.fruteria, 'grid-fruteria');
    cargarProductos(baseDeDatos.carniceria, 'grid-carniceria');
    cargarProductos(baseDeDatos.semillas, 'grid-semillas');


    // --- FUNCIONES DEL CARRITO ---

    /**
     * Maneja todos los clics dentro de un grid de productos
     * (Añadir al carrito o gestionar kilos)
     */
    function manejarClicEnGrid(evento) {
        const target = evento.target; // Elemento donde se hizo clic
        
        // Si se hizo clic en "Añadir a la Cesta"
        if (target.classList.contains('btn-compra')) {
            anadirAlCarrito(target); 
        }
        // Si se hizo clic en "+" o "-"
        if (target.classList.contains('btn-kilo')) {
            gestionarKilos(target); 
        }
    }
    
    /**
     * Sube o baja la cantidad de kilos en el input
     */
    function gestionarKilos(boton) {
        const card = boton.closest('.producto-card');
        const input = card.querySelector('.kilo-input');
        let valor = parseFloat(input.value);

        if (boton.classList.contains('btn-mas')) {
            valor += 0.5;
        } else if (boton.classList.contains('btn-menos')) {
            valor -= 0.5;
        }

        // El mínimo siempre es 0.5 kg
        if (valor < 0.5) {
            valor = 0.5;
        }
        input.value = valor.toFixed(1);
    }

    /**
     * Añade el producto seleccionado al objeto 'carrito'
     */
    function anadirAlCarrito(boton) {
        const card = boton.closest('.producto-card');
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        const kilos = parseFloat(card.querySelector('.kilo-input').value);

        if (kilos > 0) {
            // Si el producto ya está en el carrito, suma los kilos
            if (carrito[nombre]) {
                carrito[nombre].kilos += kilos;
            } else {
                // Si es nuevo, lo añade
                carrito[nombre] = {
                    precio: precio,
                    kilos: kilos
                };
            }
            // Actualiza la UI del carrito
            actualizarCarritoUI();
        } else {
            alert("Por favor, selecciona una cantidad mayor a 0.");
        }
    }

    /**
     * Dibuja los productos del carrito en el modal
     */
    function actualizarCarritoUI() {
        listaCarrito.innerHTML = ''; // Limpia la lista
        let total = 0;
        let numItems = 0;

        // Recorre cada producto en el objeto 'carrito'
        for (const nombre in carrito) {
            const item = carrito[nombre];
            const subtotal = item.precio * item.kilos;
            total += subtotal;
            numItems++; // Incrementa el contador de items

            const li = document.createElement('li');
            li.innerHTML = `
                <span>${nombre} (${item.kilos.toFixed(1)} kg) - $${subtotal.toFixed(2)}</span>
                <button class="btn-eliminar" data-nombre="${nombre}">×</button>
            `;
            listaCarrito.appendChild(li);
        }
        
        // Actualiza el total y el contador del ícono
        totalPedido.textContent = `Total: $${total.toFixed(2)}`;
        carritoContador.textContent = numItems;
    }

    /**
     * Elimina un producto del carrito al hacer clic en la 'x'
     */
    function eliminarDelCarrito(evento) {
        if (evento.target.classList.contains('btn-eliminar')) {
            const nombre = evento.target.dataset.nombre;
            delete carrito[nombre]; // Lo borra del objeto
            actualizarCarritoUI(); // Vuelve a dibujar el carrito
        }
    }

    /**
     * Genera el mensaje y abre la ventana de WhatsApp
     */
    function enviarPedidoWhatsApp() {
        // Recoge los datos del cliente
        const nombreCliente = document.getElementById('cliente-nombre').value;
        const telefonoCliente = document.getElementById('cliente-telefono').value;
        const direccionCliente = document.getElementById('cliente-direccion').value;

        // Valida que los campos no estén vacíos
        if (!nombreCliente || !telefonoCliente || !direccionCliente) {
            alert("Por favor, completa tu Nombre, Teléfono y Dirección.");
            return;
        }

        // Valida que el carrito no esté vacío
        if (Object.keys(carrito).length === 0) {
            alert("Tu carrito está vacío. Añade productos antes de enviar.");
            return;
        }

        // --- Construcción del Mensaje ---
        let mensaje = `¡Hola D'LCAMPO! 👋 Quiero hacer un pedido:\n\n`;
        mensaje += `*Cliente:* ${nombreCliente}\n`;
        mensaje += `*Teléfono:* ${telefonoCliente}\n`;
        mensaje += `*Dirección:* ${direccionCliente}\n\n`;

        // Parte de Factura eliminada

        mensaje += `*MI PEDIDO:*\n`;
        let total = 0;

        for (const nombre in carrito) {
            const item = carrito[nombre];
            const subtotal = item.precio * item.kilos;
            total += subtotal;
            mensaje += `- ${nombre} (${item.kilos.toFixed(1)} kg) - $${subtotal.toFixed(2)}\n`;
        }

        mensaje += `\n*TOTAL A PAGAR: $${total.toFixed(2)}*`;

        // Codifica el mensaje para la URL y abre WhatsApp
        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TU_NUMERO_DE_WHATSAPP}&text=${mensajeCodificado}`;

        window.open(urlWhatsApp, '_blank');
    }

    // --- EVENT LISTENERS (Aquí conectamos todo) ---

    // 1. Escuchar clics en los grids de productos
    // Usamos 'if (grid)' por si algún grid no existe en el HTML, para evitar errores
    if (gridFruteria) {
        gridFruteria.addEventListener('click', manejarClicEnGrid);
    }
    if (gridCarniceria) {
        gridCarniceria.addEventListener('click', manejarClicEnGrid);
    }
    if (gridSemillas) {
        gridSemillas.addEventListener('click', manejarClicEnGrid);
    }

    // 2. Escuchar clics en la lista del carrito para "Eliminar"
    listaCarrito.addEventListener('click', eliminarDelCarrito);

    // 3. Escuchar clic en el botón de "Enviar Pedido"
    btnEnviarWhatsApp.addEventListener('click', enviarPedidoWhatsApp);
    
    // 4. Listener de Factura eliminado

});












