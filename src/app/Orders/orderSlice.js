import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendOrder } from './orderAPI';


const initialState = {
    orderList:[],
    orderDetailList :[],
    value: 0,
    status: 'idle',
    isLoading: false,
    error: null ,
    orderSent: false
  };
// creating thunk for async actions
export const addOrderAsync = createAsyncThunk('order/addOrderAsync',async (payload) => {
    const response = await sendOrder(payload.myCart, payload.token);
    // console.log(response.data);
    return response.data;
  }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        },
    extraReducers: (builder) => {
      builder
        .addCase(addOrderAsync.fulfilled, (state, action) => {
          state.status = 'Done';
          state.isLoading = false
          state.error = null
          state.orderSent = true
        })
        .addCase(addOrderAsync.pending, (state,action) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(addOrderAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = 'Error -Your order didnt sent! Please try again later. '
            console.log(state.error)
        })
        

        }
     });




export const selectOrderList = (state) => state.order.orderList;
export const selectOrderDetailList = (state) => state.order.orderDetailList;
export const selectOrderisLoading = (state) => state.order.isLoading
export const selectOrderError = (state) => state.order.error
export const selectOrderSent = (state) => state.order.orderSent
export default orderSlice.reducer;