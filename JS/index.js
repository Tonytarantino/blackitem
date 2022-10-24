const clickanadir = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = [] /* global en donde guardo datos de productos */

clickanadir.forEach(btn => {
    btn.addEventListener('click', addToCarrito)
})

function addToCarrito(e) {
    const button = e.target
    const item = button.closest('.card')/* toma el contenedor mas cerca .card */
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.imgCard').src;

    const newItem = {
        titulo: itemTitulo,
        precio: itemPrecio,
        imagen: itemImg,
        cantidad: 1,
    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {

const inputElemento = tbody.getElementsByClassName('inputCantidad') /* elemento del html que se va a modificar cuando renderice */

    for (let i = 0; i < carrito.length; i++) { /* para calcular productos repetidos por el "titulo" */
        if (carrito[i].titulo === newItem.titulo) {
            carrito[i].cantidad++;
            const inputValue = inputElemento[i] 
            inputValue.value++; /* suma a su valor */
            carritoTotal() /* funcion más abajo que acomoda el total */
            return null;
        }
    }

    carrito.push(newItem) /* se suma item al carrigo global */
    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr') /* creo elemento cuando se seleccione el producto */
        tr.classList.add('itemCarrito') /* clase al elemento creado */
        const Content = `
        <th scope="row">1</th>
        <td class="tablaProducto">
            <img src=${item.imagen} class="imgCarrito">
            <h6>${item.titulo}</h6>
        </td>
        <td class="tablaPrecio">
            <p>${item.precio}</p>
        </td>
        <td class="tablaCantidad">
            <input type="number" min="1" value=${item.cantidad} class="inputCantidad">
            <button class="delete btn btn-danger">X</button>
        </td>
        `
        tr.innerHTML = Content;
        tbody.append(tr)
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    })

    carritoTotal()
}

function carritoTotal(){
    let total = 0;
    const itemCarritoTotal = document.querySelector(".itemTotal")
    carrito.forEach((item) => { /* recorre precios */
        const precio = Number (item.precio.replace("$",' '))
        total = total + precio*item.cantidad;
    })
    itemCarritoTotal.innerHTML = `Total $ ${total}`;
}

function removeItemCarrito (e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".itemCarrito")
    const title = tr.querySelector('.title').textContent;

    tr.remove()
}