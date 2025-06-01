import { getData } from "../../helpers/auth";

export const editarCategoriaController = async (categoria) => {
    
    const { accessToken } = getData();

    const req = await fetch (`http://localhost:3000/api/categorias/${categoria.id}`,{
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    const {data} = await req.json();
    //const {datos} = await req.json();

    //console.log(data);
    //console.log(datos);
    console.log(data.nombre);
    

    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');


    //nombre.value = data.nombre;

    nombre.value = data.nombre;
    descripcion.value = data.descripcion;


    // nombre.value = datos.nombre;

    const update = async (e) => {

        e.preventDefault();

        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value
        };

        console.log('Datos enviados al backend:', data);
        const response = await fetch(`http://localhost:3000/api/categorias/${categoria.id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        })

        .then((response) => response.json())
        .then((json) => console.log(json));

    }

    form.addEventListener('submit', update);
    
}