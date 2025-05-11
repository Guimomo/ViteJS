export const crearProductosController = async () => {
    
    await new Promise(requestAnimationFrame);

    
    // const responseProductos = await fetch("http://localhost:3000/api/productos");
    // const {data: productos} = await responseProductos.json();

    const responseCategorias = await fetch("http://localhost:3000/api/categorias");
    const { data: categorias } = await responseCategorias.json();

    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const precio = document.getElementById('precio');
    //const btnGuardar = document.querySelector('.btn-sumit');

    // const tbody = document.getElementById('categorias-list');

    // console.log(data);

    const selectCategoria = document.getElementById('categoria_id');
    categorias.forEach((categoria)=>{

        const opcion = document.createElement('option');
        opcion.value = categoria.id;
        opcion.textContent = categoria.nombre;
        selectCategoria.appendChild(opcion);
    });


    /**
    * Función para guardar un nuevo producto
    * @param {*} e - Evento de envío del formulario
    */

    const guardar = (e) => {

        e.preventDefault();
        
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio: parseFloat(precio.value),
            categoria_id: selectCategoria.value
        }
            
        console.log("Valor de nombre:", nombre.value);
        console.log("Valor de descripcion:", descripcion.value);
        console.log("Datos enviados al backend:", data);
            
        fetch("http://localhost:3000/api/productos", {
            
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
        .then((json) => console.log(json));
    
        form.reset(); // Limpiar el formulario
        
    }

    form.addEventListener('submit', guardar)
}