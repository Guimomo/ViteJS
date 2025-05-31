export const setData = (data) => {

    console.log("setData called");
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('accessToken', data.accessToken);
}


export const getData = (data) => {

}

export const Autenticado = () => {
    console.log(localStorage.accessToken);
    let token = localStorage.getItem('accessToken');
    
    if (token) {
        console.log("Token encontrado:", token);
        return true; // El usuario está autenticado
    }else {
        return false; // El usuario no está autenticado
    }
    //return;
}