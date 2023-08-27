import axios from "axios";

const PRODUCTS_GET = "http://127.0.0.1:8000/api/products/"

export function getProd(id) {
    return new Promise((resolve,reject) =>
    axios(PRODUCTS_GET + id).then((res) => resolve({ data: res.data }))
    .catch((error) =>reject(new Error('Failed to fatch data')))
    );
  }

