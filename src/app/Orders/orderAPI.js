import axios from 'axios'
const ADD_ORDER_URL = "http://127.0.0.1:8000/api/addorder/"
const ORDER_DETAILS_URL = "http://127.0.0.1:8000/api/orderdetails/"


// async(2)
export function sendOrder(myCart,token) {
    return new Promise((resolve,reject) =>
        axios.post(ADD_ORDER_URL,myCart,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => resolve({ data: res.data }))
        .catch((error)=> reject(new Error('Failed to send order! Please try again later')))
    );
}

export function orderDetails(id, token) {
    return new Promise((resolve,reject) =>
      axios(ORDER_DETAILS_URL + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => resolve({ data: res.data }))
      .catch((error) => reject(new Error('Failed get details')))
    );
  }
