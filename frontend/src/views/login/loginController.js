import Swal from "sweetalert2";
import { setData } from "../../helpers/auth";

export const loginController = async () => {

    const form = document.querySelector("form");
    //const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const log = async (e) => {

        e.preventDefault(); // Evitar el envío del formulario por defecto

        const data = {
            email: email.value,
            password: password.value
        }

        console.log("Valor de email:", email.value);
        console.log("Valor de password:", password.value);
        console.log("Datos enviados al backend:", data);

        const solicitud = await fetch("http://localhost:3000/api/auth/login", {
            
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });
            //.then((response) => response.json())
        
        // .then((json) => {

        //     if (json.success) {
        //         Swal.fire({
        //             title: '¡Bienvenido!',
        //             text: json.message || 'Login exitoso',
        //             icon: 'success',
        //             confirmButtonText: 'Continuar'
        //         }).then(() => {
        //             location.reload(); // Recargar la página
        //         });
        //     } else {
        //         Swal.fire({
        //             title: 'Error',
        //             text: json.message || 'Credenciales incorrectas',
        //             icon: 'error',
        //             confirmButtonText: 'Intentar de nuevo'
        //         });
        //     }
        // });

        const respuestaLogin = await solicitud.json();
        if (respuestaLogin.success) {
            Swal.fire({
                title: '¡Bienvenido!',
                text: respuestaLogin.message || 'Login exitoso',
                icon: 'success',
                confirmButtonText: 'Continuar'
            }).then(() => {
                location.reload(); // Recargar la página
            });

            setData(respuestaLogin.data);
        } else {
            Swal.fire({
                title: 'Error',
                text: respuestaLogin.message || 'Credenciales incorrectas',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            });
        }
    
        form.reset(); // Limpiar el formulario

        //Location.reload(); // Recargar la página para reflejar el cambio de estado

    }

    form.addEventListener('submit', log);
    

}