import axios from "axios";

const REGISTER_URL = "https://myshop-django-postgre.onrender.com/api/register/"
const LOGIN_URL = "https://myshop-django-postgre.onrender.com/api/signin/"
const REFRESH_URL = "https://myshop-django-postgre.onrender.com/api/token/refresh/"
const LOGOUT_URL = "https://myshop-django-postgre.onrender.com/api/logout/"



export function logIn(cred) {
    return new Promise((resolve,reject) =>
        axios.post(LOGIN_URL, cred,
            ).then((res) => resolve({ data: res.data }))
            .catch((error) =>reject(new Error('Failed to fatch data')))        
    );
}




export function myRegister(cred) {
    return new Promise((resolve,reject) =>
        axios.post(REGISTER_URL, cred).then((res) => resolve({ data: res.data }))
        .catch((errror) =>reject(new Error('Failed to submit data')))
    );
}


export function myLogout(token) {
    return new Promise((resolve) =>
    axios(LOGOUT_URL, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }
    }).then((res) => resolve({ data: res.data }))
    );
}


