import "./css/main.css";
import { router } from "./router/router";


const app = document.querySelector('#app');

//---------------------------------------------------------- #1 Creación del header(encabezado) y elementos
const header = document.querySelector('#header');
header.classList.add('encabezado');

//.......... #1.1 Creación de los elemtos del header: categorias y productos

const itemsHeader_content = document.createElement('div');
itemsHeader_content.classList.add('items-content')

const linkCategorias = document.createElement('a');
linkCategorias.classList.add('item-link')
linkCategorias.textContent = 'Categorias';
linkCategorias.setAttribute('href', '#categorias');

// const linkCategorias = document.createElement('div');
// linkCategorias.classList.add('item-link')
// linkCategorias.textContent = 'Categorias';

// const crearCategoria = document.createElement('a')
// crearCategoria.setAttribute('href', '#crearCategorias');
// crearCategoria.textContent = 'Crear una categoria';

// const verCategoria = document.createElement('a')
// verCategoria.setAttribute('href', '#categorias');
// verCategoria.textContent = 'ver categorias';

// const opCategorias = document.createElement('div')
// opCategorias.classList.add ('opciones_categoria')

// opCategorias.append( crearCategoria, verCategoria )

// linkCategorias.appendChild( opCategorias )

const linkProductos = document.createElement('a');
linkProductos.classList.add('item-link')
linkProductos.textContent = 'Productos';
linkProductos.setAttribute('href', '#productos');

// const linkProductos = document.createElement('div');
// linkProductos.classList.add('item-link')
// linkProductos.textContent = 'Productos';

// const crearProducto = document.createElement('a')
// crearProducto.setAttribute('href', '#crearProductos');
// crearProducto.textContent = 'Crear un producto';

// const verProducto = document.createElement('a')
// verProducto.setAttribute('href', '#productos');
// verProducto.textContent = 'ver productos';

// const opProductos = document.createElement('div')
// opProductos.classList.add ('opciones_producto')

// opProductos.append( crearProducto, verProducto )

// linkProductos.appendChild( opProductos )

itemsHeader_content.append(linkCategorias, linkProductos);

//.......... #1.2 Creación de logo con enlace a la pagina principal
const logo = document.createElement('a');
logo.classList.add('logo');
logo.setAttribute('href', '/#');

const logo_img = document.createElement('img');
logo_img.classList.add('logo-img');
logo_img.setAttribute('src', 'src/assets/logo.png');
logo_img.setAttribute('alt', 'logo de la tienda');

logo.appendChild(logo_img);

header.append(logo, itemsHeader_content);


window.addEventListener('hashchange', () => {

    router(app);
    // cargar_tabla();
});

window.addEventListener('DOMContentLoaded', () => {

    router(app);
    // cargar_tabla();
});