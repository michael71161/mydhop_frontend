import axios from "axios";

const PRODUCTS_GET = "https://myshop-django-postgre.onrender.com/api/products/"

export function getProd(id) {
    return new Promise((resolve,reject) =>
    axios(PRODUCTS_GET + id).then((res) => resolve({ data: res.data }))
    .catch((error) =>reject(new Error('Failed to fatch data')))
    );
  }

