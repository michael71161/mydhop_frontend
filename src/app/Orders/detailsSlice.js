import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderDetails } from './orderAPI';


const initialState = {
    orderDetailList :[],
    isLoading: false,
    error: null ,
    gotDetails: false
  };


export const orderDetailsAsync = createAsyncThunk('details/orderDetailAsync',
async (payload ) => {
    const response = await orderDetails(payload.id, payload.token)
    return response.data
}
)


export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

        .addCase(orderDetailsAsync.fulfilled, (state, action) => {
            state.orderDetailList = action.payload;
            state.isLoading = false
            state.error = null 
            state.gotDetails = true
          })
        .addCase(orderDetailsAsync.pending, (state, action) => {
            state.isLoading = true
            state.error = null
            state.gotDetails = false
          })
        .addCase(orderDetailsAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = 'Error - Cannot find order details'
            state.gotDetails = false
          })

        }
    });




export const selectOrderDetails = (state) => state.details.orderDetailList
export const selectDetailsisLoading = (state) => state.details.isLoading
export const selectDetailsError = (state) => state.details.error
export const selectDetailsFetched = (state) => state.details.gotDetails

export default detailsSlice.reducer
