import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, updateUser } from "./userAPI";

const initialState = {
    usersList: [],
    
    isLoading: false,
    UsersFetched: false,
    error: null,
    isUpdated: false
   
    
  };


  export const getUsersAsync = createAsyncThunk(
    "updateUser/getUsersAsync",
    async (token) => {
      const response = await getAllUsers(token);
      // console.log(response.data);
      return response.data;
    }
  );


  
  export const updateUserAsync = createAsyncThunk(
    'updateUser/updateUserAsync',
    async (userCreds) => {
      const response = await updateUser( userCreds, userCreds.id, userCreds.token )
      return response.data
    }

  )



  export const updateUserSlice = createSlice({
    name: "updateUser",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
      builder
        .addCase(getUsersAsync.fulfilled, (state, action) => {
          state.usersList = action.payload
          state.UsersFetched = true
          state.isLoading = false 
          state.error = null 
          console.log(action.payload)

        })
        .addCase(getUsersAsync.pending, (state,action) => {
          state.isLoading = true 
          state.UsersFetched = false 
          state.error = null 
        })
        .addCase(getUsersAsync.rejected, (state,action) => {
          state.isLoading = false
          state.UsersFetched = false 
          state.error = 'Failed to fatch users! Try again later'
        })
        .addCase(updateUserAsync.fulfilled, (state,action) => {
          let oldUser = state.usersList.find((x) => x.id === action.payload.id)
          oldUser.username = action.payload.newUsername
          oldUser.first_name = action.payload.newFirst_name
          oldUser.email = action.payload.newEmail
          state.isUpdated = true
          state.error = null 
          state.isLoading = false 
          console.log(action.payload)
        })
        .addCase(updateUserAsync.pending, (state,action) => {
          state.isLoading = true
          state.isUpdated=false
          state.error = null 
        })
        .addCase(updateUserAsync.rejected, (state,action) => {
          state.isLoading = false
          state.isUpdated=false
          state.error = 'Failed to update user! Check creds or try again later '

        })
    }
  })





export const selectUserList = (state) => state.updateUser.usersList
export const selectUserLoading = (state) => state.updateUser.isLoading
export const selectUserError = (state) => state.updateUser.error
export const selectUsersFetched = (state) => state.updateUser.UsersFetched
export const selectUserUpdated = (state) => state. updateUser.isUpdated
export default updateUserSlice.reducer