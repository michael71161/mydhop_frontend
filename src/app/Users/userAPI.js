import axios from "axios";

const USER_ORDERS_URL = "http://127.0.0.1:8000/api/userorders/"
const UPDATE_USER_URL = "http://127.0.0.1:8000/api/upduser/"
const GET_USERS_URL = "http://127.0.0.1:8000/api/getusers/"

export function getUserOrders(token) {
    return new Promise((resolve,reject) =>
      axios(USER_ORDERS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => resolve({ data: res.data }))
      .catch((error)=>reject(new Error('failed to fatch data!')))

    );
  }


  export function updateUser(userCreds, id, token) {
    return new Promise((resolve,reject) =>
      axios
        .put(UPDATE_USER_URL + id, userCreds, {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        })
        .then((res) => resolve({ data: res.data }))
        .catch((error) =>reject(new Error('failed to find user')))
    );
  }





  export function getAllUsers(token) {
    return new Promise((resolve,reject) =>
      axios(GET_USERS_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => resolve({ data: res.data }))
      .catch((error)=>reject(new Error('failed to fatch data!')))

    );
  }





