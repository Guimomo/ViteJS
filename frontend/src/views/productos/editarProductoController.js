export const editarProductoController = async (producto) => {

    // await new Promise(requestAnimationFrame);

    const responseProductos = await fetch(`http://localhost:3000/api/productos/${producto.id}`);
    const { data: productos } = await responseProductos.json();

    console.log(productos.nombre);
    

    const responseCategorias = await fetch("http://localhost:3000/api/categorias");
    const { data: categorias } = await responseCategorias.json();

    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const precio = document.getElementById('precio');

    const selectCategoria = document.getElementById('categoria_id');
    categorias.forEach((categoria)=>{

        const opcion = document.createElement('option');
        opcion.value = categoria.id;
        opcion.textContent = categoria.nombre;
        selectCategoria.appendChild(opcion);
    });

    nombre.value = productos.nombre;
    descripcion.value = productos.descripcion;
    precio.value = productos.precio;
    selectCategoria.value = productos.categoria_id;

    //  selectCategoria.value = productos.categoria_id;

        const update = async (e) => {

        e.preventDefault();

        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio: precio.value,
            categoria_id: selectCategoria.value
        };

        console.log('Datos enviados al backend:', data);
        const response = await fetch(`http://localhost:3000/api/productos/${producto.id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then((response) => response.json())
        .then((json) => console.log(json));

    }

    form.addEventListener('submit', update);
}