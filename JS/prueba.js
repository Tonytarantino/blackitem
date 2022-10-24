const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((producto) =>{
const div = document.createElement('div')
div.classList.add('producto')
div.innerHTML = `
<img src=${producto.img} alt=""
<h3> ${producto.nombre} </h3>
<p class="precioProducto>Precio: $ ${precio} </p>
<button id="agregar${producto.id}" class="boton-agregar"> Agregar <i class= fas fa-shopping-cart> </i></button>
`
contenedorProductos.appendChild(div)

})