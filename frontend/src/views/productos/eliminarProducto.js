import Swal from "sweetalert2";
export const eliminarProducto = async (a) => {
    try {
        const request = await fetch(`http://localhost:3000/api/productos/${a}`, {
            method: 'DELETE',
        });
        const result = await request.json();
        if (result.success) {
            // const tr = document.querySelector(`#producto_${a}`);
            const tr = document.querySelector(`#producto_${a}`);
            //tr.remove();
            if (tr) tr.remove();
            Swal.fire({
                title: 'Muy bien!',
                text: result.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: result.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        console.error(error);
    }
}