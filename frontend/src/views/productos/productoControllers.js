export const productoController = async () => {

    await new Promise (requestAnimationFrame);

    const responseProductos = await fetch("http://localhost:3000/api/productos");
    const { data: productos } = await responseProductos.json();

    const responseCategorias = await fetch("http://localhost:3000/api/categorias");
    const { data: categorias } = await responseCategorias.json();

    /**
     * Función para crear una fila en la tabla de productos
     * @param {Object} Producto - Objeto que representa un producto
     */
    const crearFila = (Producto) => {

        const tbody = document.getElementById('productos-list');

        const tr = document.createElement('tr');

        const cellNombre = document.createElement('td');
        const cellDescripcion = document.createElement('td');
        const cellPrecio = document.createElement('td');
        const cellCategoria = document.createElement('td');
        const cellAcciones = document.createElement('td');

        cellNombre.textContent = Producto.nombre;
        cellDescripcion.textContent = Producto.descripcion;

        //cellPrecio.textContent = Producto.precio;

        cellPrecio.textContent = `$ ${parseFloat(Producto.precio).toFixed(2)}`; // hacer un parce float para que el precio se vea con dos decimales

        // buscar categoria por ID
        // cellCategoria.textContent = categoria ? categoria.nombre : 'Sin categoría';
        const categoria = categorias.find((categoria)=> categoria.id === Producto.categoria_id);
        cellCategoria.textContent = categoria.nombre;

        // Crear botones de editar y eliminar
        const btnEditar = document.createElement('a');
        btnEditar.textContent = 'Editar';
        btnEditar.setAttribute('href', `#editarProducto/${Producto.id}`);
        btnEditar.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2');
        // btnEditar.addEventListener('click', () => {

        //     //btnGuardar.setAttribute('disabled', true);

        //     // btnEditar.setAttribute('disabled', true);

        //     document.querySelectorAll('.btn-primary').forEach((btn) => {
        //         btn.setAttribute('disabled', true);
        //     });

        //     document.querySelectorAll('.btn-danger').forEach((btn) => {
        //         btn.setAttribute('disabled', true);
        //     });

        //     const editWindow = document.createElement('div');
        //     editWindow.classList.add('ventana-editar');
            
        //     const titulo = document.createElement('h2');
        //     titulo.textContent = 'Editar Producto';
        //     editWindow.appendChild(titulo);

        //     const formEditar = document.createElement('form');
        //     formEditar.classList.add('form-editar');

        //     const inputNombre = document.createElement('input');
        //     inputNombre.type = 'text';
        //     inputNombre.placeholder = Producto.nombre;
        //     inputNombre.value = Producto.nombre;

        //     const inputDescripcion = document.createElement('input');
        //     inputDescripcion.type = 'text';
        //     inputDescripcion.placeholder = Producto.descripcion;
        //     inputDescripcion.value = Producto.descripcion;

        //     const inputPrecio = document.createElement('input');
        //     inputPrecio.type = 'number';
        //     inputPrecio.placeholder = Producto.precio;
        //     inputPrecio.value = Producto.precio;

        //     const inputCategoria = document.createElement('select');
        //     inputCategoria.id = 'categoria_id';
        //     categorias.forEach((categoria) => {
        //         const opcion = document.createElement('option');
        //         opcion.value = categoria.id;
        //         opcion.textContent = categoria.nombre;
        //         inputCategoria.appendChild(opcion);
        //     });
        //     inputCategoria.value = Producto.categoria_id;

        //     const btnActualizar = document.createElement('button');
        //     btnActualizar.textContent = 'Actualizar';
        //     btnActualizar.classList.add('btn', 'btn-success', 'btn-sm');
        //     btnActualizar.addEventListener('click', async (evento) => {

        //         evento.preventDefault();



        //         const data = {
        //             nombre: inputNombre.value,
        //             descripcion: inputDescripcion.value,
        //             precio: parseFloat(inputPrecio.value),
        //             categoria_id: inputCategoria.value
        //         };

        //         console.log('Datos enviados al backend:', data);
        //         const response = await fetch(`http://localhost:3000/api/productos/${Producto.id}`, {
        //             method: 'PUT',
        //             body: JSON.stringify(data),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });

        //         //form.reset();
        //         editWindow.remove();

        //         // Devolver los botones a su estado original
        //         //btnGuardar.removeAttribute('disabled');
        //         document.querySelectorAll('.btn-primary').forEach((btn) => {
        //             btn.removeAttribute('disabled');
        //         });
        //         document.querySelectorAll('.btn-danger').forEach((btn) =>{
        //             btn.removeAttribute('disabled');
        //         });
        //         //location.reload();
        //     });


        //     const btnCancelar = document.createElement('button');
        //     btnCancelar.textContent = 'Cancelar';
        //     btnCancelar.classList.add('btn', 'btn-danger', 'btn-sm');
        //     btnCancelar.addEventListener('click', (e) => {
        //         e.preventDefault();

        //         editWindow.remove();
                 
        //         //btnGuardar.removeAttribute('disabled');

        //         document.querySelectorAll('.btn-primary').forEach((btn) => {
        //             btn.removeAttribute('disabled');
        //         });

        //         document.querySelectorAll('.btn-danger').forEach((btn) =>{
        //             btn.removeAttribute('disabled');
        //         });
        //     });

        //     const btnDiv = document.createElement('div');
        //     btnDiv.classList.add('btn-div');
        //     btnDiv.append(btnActualizar, btnCancelar);

        //     formEditar.append(inputNombre, inputDescripcion, inputPrecio, inputCategoria, btnDiv);

        //     editWindow.appendChild(formEditar);

        //     // Agregar el div al DOM
        //     document.body.appendChild(editWindow);

        // });

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        btnEliminar.addEventListener('click', async () => {

            const confirmacion = confirm (`¿Deseas Eliminar el elemento ${Producto.nombre}?`);
            if (confirmacion) {
                fetch(`http://localhost:3000/api/productos/${Producto.id}`, {
                    method: 'DELETE',
                });

            }

        });

        // Agregar los botones a la celda de acciones
        cellAcciones.append(btnEditar, btnEliminar);

        // Agregar las celdas a la fila
        tr.append(cellNombre, cellDescripcion, cellPrecio ,cellCategoria, cellAcciones);
        
        tbody.appendChild(tr);
    }

    /**
     * Función para cargar la tabla de productos
     * @param {Array} productos - Array de objetos que representan productos
     */
    const cargarTabla = () => {
        productos.forEach((producto) => {
            crearFila(producto); // Crear una fila para cada categoría
        });
    };

    cargarTabla();

}