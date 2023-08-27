import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//seting initial state for constants 
const initialState = {
    myCart: (JSON.parse(localStorage.getItem("myCart"))) ? (JSON.parse(localStorage.getItem("myCart"))) : ([]),
    id: 0,
    status: 'idle',
  };
  
  // All async actiones thagt we will use ,processing the data that we get from server
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItemToCart: (state, action) => {
        console.log("per 1 item",action.payload)
        let temp = state.myCart.find((x) => x._id === action.payload._id);
        // function for adding item to cart, amount to buy and price calculating of the cart , setting the cart into local storage
        if (temp) {
          if (temp.amount === 1 && action.payload.amount === -1) {return state.myCart = state.myCart.filter(x => x._id !== temp._id),localStorage.setItem("myCart", JSON.stringify(state.myCart))}
          else {
            return temp.amount += action.payload.amount,
            temp.total = action.payload.price* temp.amount,
            localStorage.setItem("myCart", JSON.stringify(state.myCart))}
        } 
        else {
          state.myCart = [...state.myCart, action.payload]
        }
        localStorage.setItem("myCart", JSON.stringify(state.myCart))
        //alert(`${action.payload.desc} added to cart`)
      },

      //clear cart from storage
      deleteCart: (state, action) => {
        
        state.myCart = ([])
        console.log(state.myCart)
        localStorage.clear()
  
      },
      // removing single item from the cart 
      removeItemFromCart: (state, action) => {
        console.log(action.payload)
        state.myCart = state.myCart.filter(x => x._id !== action.payload)
        console.log(state.myCart)
  
        localStorage.setItem("myCart", JSON.stringify(state.myCart))
  
      }
     
    },
  
    extraReducers: (builder) => {
  
    },
  });
  
  // methods to export
  export const { addItemToCart, deleteCart, removeItemFromCart, DelFromCart, changeAmount } = cartSlice.actions;
  
  
  // selctors to export
  export const selectMyCart = (state) => state.cart.myCart;
  // export const selectOrderList = (state) => state.order.orderList;
  
  export default cartSlice.reducer;