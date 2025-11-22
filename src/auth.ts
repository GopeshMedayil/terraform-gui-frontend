export const isLoggedIn = () => {
    console.log(localStorage.getItem('token'))
    return !!localStorage.getItem('token');
}