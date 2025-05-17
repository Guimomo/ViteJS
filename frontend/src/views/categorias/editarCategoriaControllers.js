export const editarCategoriaController = async (categoria) => {
    
    const req = await fetch (`http://localhost:3000/api/categorias/${categoria.id}`)
    const {data} = await req.json();
    //const {datos} = await req.json();

    //console.log(data);
    //console.log(datos);
    console.log(data);
    

    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');

    //nombre.value = data.nombre;

    nombre.value = data.nombre;
    descripcion.value = data.descripcion;

    // nombre.value = datos.nombre;

    
}