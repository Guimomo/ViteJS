export const crearCategoriaController = async () => {

    await new Promise(requestAnimationFrame);



    const response = await fetch("http://localhost:3000/api/categorias");
    const {data} = await response.json();
            
    // const tbody = document.getElementById('categorias-list');

    console.log(data);

    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    //const btnSubmit = document.querySelector('form button[type="submit"]');

    const guardar = (e) => { //esta es una función que se ejecuta al enviar el formulario y solamente se encarga de guardar los datos en la base de datos
        
            e.preventDefault();
        
            const data = {
                    nombre: nombre.value,
                    descripcion: descripcion.value
                }
            
                console.log("Valor de nombre:", nombre.value);
                console.log("Valor de descripcion:", descripcion.value);
            
                fetch("http://localhost:3000/api/categorias", {
                
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    .then((response) => response.json())
        .then((json) => console.log(json));
    
        form.reset(); // Limpiar el formulario

    }
    
    form.addEventListener('submit', guardar)
}