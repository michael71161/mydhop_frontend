import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserOrders ,updateUser} from "./userAPI";




const initialState = {
    userOrderList: [],
    
    isLoading: false,
    ordersFetched: false,
    error: null,
    isUpdated: false
   
    
  };
  
  // Async methodes
  export const getUserOrderAsync = createAsyncThunk(
    "user/getUserOrderAsync",
    async (token) => {
      const response = await getUserOrders(token);
      // console.log(response.data);
      return response.data;
    }
  );

/*
 
 
  export const updateUserAsync = createAsyncThunk(
    'user/updateUserAsync',
    async (newData) => {
      const response = await updateUser(
        newData.tempUser,
        newData.id,
        newData.token
      )
      return response.data
    }

  )

*/
  





  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder
  
        .addCase(getUserOrderAsync.fulfilled, (state, action) => {
         
          state.userOrderList = action.payload
          console.log(state.userOrderList)
          state.isLoading = false
          state.error = false
          state.ordersFetched = true
        })
        .addCase(getUserOrderAsync.pending, (state, action) => {
            state.isLoading = true
            state.error = false
            state.ordersFetched = false
        })
        .addCase(getUserOrderAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = 'Server error! try again later'
            state.ordersFetched = false
        })
        /*
        .addCase(updateUserAsync.fulfilled, (state, action) =>{
          state.status = "Done"
          state.isUpdated = true
          state.isLoading = false
          state.error = null
          console.log(action.payload)
          
        })
        .addCase(updateUserAsync.pending , (state, action) => {
          state.isLoading = true 
          state.isUpdated = false
          state.error = null
        })
        .addCase(updateUserAsync.rejected, (state ,action) => {
          state.isLoading=false
          state.error = 'failed to update user, check info or try again later'
          state.isUpdated  = false
        })
      */
       
        
        
    }
  })  
  
  
export const selectUserOrdersList = (state) => state.user.userOrderList
export const getUserOrdersisLoading = (state) => state.user.isLoading
export const getUserOrdersError = (state) => state.user.error
export const getUserOrdersFetched = (state) => state.user.ordersFetched
export const getUserIsUpdated = (state) => state.user.isUpdated


export default userSlice.reducer