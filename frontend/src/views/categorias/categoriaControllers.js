export const categoriaController = async () => {

    await new Promise (requestAnimationFrame);

    const response = await fetch("http://localhost:3000/api/categorias");
    const {data} = await response.json();
            
    // const tbody = document.getElementById('categorias-list');

    console.log(data);

    // const form = document.querySelector('form');
    // const nombre = document.getElementById('nombre');
    // const descripcion = document.getElementById('descripcion');
    //const btnSubmit = document.querySelector('form button[type="submit"]');

    // let editando = false; // Variable booleana para controlar el modo de edición 
    // //En caso de ser false se crea una categoría nueva y en caso de ser true se actualizara una categoría existente
    // let categoriaEditada = null;// Variable para almacenar y relacionar la categoría que se está editando

    const crearFila = (categoria) => {

        const tbody = document.getElementById('categorias-list');
        console.log("Elemento tbody:", tbody);

        const tr = document.createElement('tr');

        const cellNombre = document.createElement('td');
        const cellDescripcion = document.createElement('td');
        const cellAcciones = document.createElement('td');

        cellNombre.textContent = categoria.nombre;
        cellDescripcion.textContent = categoria.descripcion;

        // Crear botones de editar y eliminar
        const btnEditar = document.createElement('a');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2');
        btnEditar.setAttribute('href', '#editarCategoria');


        // btnEditar.addEventListener ('click', () => {

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

        // };

        // btnEditar.addEventListener('click', async (e) => {

        //     e.preventDefault();

        //     // Se crea un textContent default para el botón de editar
        //     document.querySelectorAll('.btn-primary').forEach((btn) => {
        //         btn.textContent = 'Editar'; // Cambiar texto de todos los botones que no sean el de editar
        //     });
        //     /**
        //     * Restablece el texto de todos los botones con la clase `.btn-primary` a "Editar".
        //     * 
        //     * Este código se utiliza para garantizar que todos los botones vuelvan a su estado inicial
        //     * antes de realizar cualquier acción adicional. Es útil para evitar inconsistencias en la
        //     * interfaz de usuario, especialmente cuando se trabaja con botones dinámicos que cambian
        //     * su texto (por ejemplo, de "Editar" a "Cancelar").
        //     * 
        //     * Funcionamiento:
        //     * - Selecciona todos los elementos del DOM con la clase `.btn-primary`.
        //     * - Itera sobre cada botón utilizando `forEach`.
        //     * - Cambia el texto de cada botón a "Editar".
        //     * 
        //     * Contexto:
        //     * - Este fragmento de código se encuentra dentro de un evento `click` asociado a un botón
        //     *   específico. Por lo tanto, se ejecuta cada vez que el usuario interactúa con el botón.
        //     * - Garantiza que solo el botón actual pueda cambiar su texto a "Cancelar", mientras que
        //     *   los demás botones vuelven a mostrar "Editar".
        //     * - Si se usara fuera del evento `click`, afectaría a todos los botones con la clase una
        //     * sola vez cada que se carga el dominio, lo que podría no ser el comportamiento deseado. 
        //     * 
        //     * Ejemplo de uso:
        //     * - Cuando el usuario hace clic en un botón "Editar", este código asegura que todos los
        //     *   demás botones vuelvan a mostrar "Editar" antes de cambiar el texto del botón actual.
        //     */


        //     if (editando && categoriaEditada === categoria) {
        //         // Reiniciar el formulario y desactivar el modo edición
        //         form.reset();
        //         editando = false;
        //         categoriaEditada = null;
        //         btnSubmit.textContent = 'Guardar';
        //         btnEditar.textContent = 'Editar';
        //         return;
        //     }
            
        //     // Activar modo edición
        //     editando = true;
        //     categoriaEditada = categoria;
            

        //     // Cambiar el texto del botón de editar a cancelar
        //     btnEditar.textContent = 'Cancelar';

        //     // Cargar datos en el formulario
        //     nombre.value = categoria.nombre;
        //     descripcion.value = categoria.descripcion;

        //     // Cambiar texto del botón
        //     btnSubmit.textContent = 'Actualizar';

        // });

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        btnEliminar.addEventListener('click', async () => {
            
            const confirmacion = confirm (`¿Deseas Eliminar el elemento ${categoria.nombre}?`);
            if (confirmacion) {
                fetch(`http://localhost:3000/api/categorias/${categoria.id}`, {
                    method: 'DELETE',
                });

            }
        });

        // Agregar los botones a la celda de acciones
        cellAcciones.append(btnEditar, btnEliminar);

        // Agregar las celdas a la fila
        tr.append(cellNombre, cellDescripcion, cellAcciones);
        
        tbody.appendChild(tr);
    }

    // Función para cargar la tabla
    const cargarTabla = () => {

        data.forEach((categoria) => {
            crearFila(categoria); // Crear una fila para cada categoría
        });
    };

    cargarTabla();

}

    
    // const guardar = (e) => { //esta es una función que se ejecuta al enviar el formulario y solamente se encarga de guardar los datos en la base de datos
        
        //     e.preventDefault();
        
        //     const data = {
            //         nombre: nombre.value,
            //         descripcion: descripcion.value
            //     }
            
            //     console.log("Valor de nombre:", nombre.value);
            //     console.log("Valor de descripcion:", descripcion.value);
            
            //     fetch("http://localhost:3000/api/categorias", {
                
            //         method: 'POST',
            //         body: JSON.stringify(data),
            //         headers: {
                //           'Content-type': 'application/json; charset=UTF-8',
                //         },
                //     })
                //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    
    //     form.reset(); // Limpiar el formulario
    
    // }


    /**
     * Función para guardar una nueva categoría o actualizar una existente --------------------->
     * @param {Event} e - Evento de envío del formulario
     */
    // const guardar = async (e) => {

    //     e.preventDefault();

    //     const data = {
    //         nombre: nombre.value,
    //         descripcion: descripcion.value,
    //     };

    //     try {
    //         if (editando === true) {

    //             const response = await fetch(`http://localhost:3000/api/categorias/${categoriaEditada.id}`, {
    //                 method: 'PUT',
    //                 body: JSON.stringify(data),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Error al actualizar la categoría: ${response.status}`);
    //             }

    //             alert('Categoría actualizada exitosamente');

    //         } else {

    //             const response = await fetch("http://localhost:3000/api/categorias", {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Error al crear la categoría: ${response.status}`);
    //             }

    //             alert('Categoría creada exitosamente');
    //         }

    //     } catch (error) {
    //         console.error('Error al guardar la categoría:', error);
    //         alert('Ocurrió un error al guardar la categoría.');
    //     }

    //     form.reset();
    //     editando = false;
    //     categoriaEditada = null;
    //     // btnSubmit.textContent = 'Guardar';
    //     btnEditar.textContent = 'Editar';
    // };

