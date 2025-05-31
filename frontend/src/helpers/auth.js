export const setData = (data) => {

    console.log("setData called");
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('accessToken', data.accessToken);
}


export const getData = (data) => {

}