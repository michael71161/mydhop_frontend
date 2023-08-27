import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getProd} from './productAPI'


const initialState = {
    prodList:[],
    status: 'idle',
    error: null,
    isLoading: false, 
    prodsFetched: false
  };


export const getProdsAsync = createAsyncThunk(
  'products/getProdsAsync',
  async (id) => {
    const response = await getProd(id) ;
    console.log(response.data) ;
    return  response.data ;

  }
)

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    },


    extraReducers: (builder) => {
      builder
        .addCase(getProdsAsync.pending, (state, action) => {
          state.isLoading = true
          state.error = null
        })
        .addCase(getProdsAsync.fulfilled, (state, action) => {
          state.isLoading = false
          state.error = null
          state.prodsFetched = true 
          console.log(action.payload)
          state.prodList = action.payload
        })
        .addCase(getProdsAsync.rejected, (state, action) => {
          state.isLoading= false
          state.error = 'Server error! try again later'
        })
    }

})

// export any part of the state, exporting the state of the productlist for usage
export const selectProdsList = (state) => state.products.prodList
export const getProdsisLoading = (state) => state.products.isLoading
export const getProdsError = (state) => state.products.error
export const getProdsFetched = (state) => state.products.prodsFetched

// export the reducer to the applicaion
export default productsSlice.reducer