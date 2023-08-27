import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {logIn, myRegister, myLogout} from './loginAPI'
import jwt_decode from "jwt-decode";


const initialState = {
    username: "",
    email: "",
    first_name: "",
    token: "",
    logged: false,
    isAdmin: false,
    lastlogin: " ",
    datejoined: "",
    _id:0,
    isLoading: false,
    error: null ,
    registered: false
};


export const signinAsync = createAsyncThunk(
    'login/signinAsync',
    async (cred) => {
        const response = await logIn(cred);
        return response.data;
    }
);


export const registerAsync = createAsyncThunk(
    'login/registerAsync',
    async (cred) => {
        const response = await myRegister(cred);
        return response.data;
    }
);


export const logoutAsync = createAsyncThunk(
    'login/logoutAsync',
    async (token) => {
        const response = await myLogout(token);
        return response.data;
    }
);


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
       
        },
    

    extraReducers: (builder) => {
        builder
            .addCase(signinAsync.fulfilled, (state, action) => {
                if (action.payload.access) {
                    state.token = action.payload.access
                    state.logged = true;
                    state.username= jwt_decode(action.payload.access).username
                    state.email=jwt_decode(action.payload.access).email
                    state.isAdmin=jwt_decode(action.payload.access).isAdmin
                    state.first_name=jwt_decode(action.payload.access).first_name
                    state.lastlogin=jwt_decode(action.payload.access).lastlogin
                    state.datejoined=jwt_decode(action.payload.access).datejoined
                    state._id = jwt_decode(action.payload.access).userid
                    state.isLoading = false
                    
                }
            })
            .addCase(signinAsync.rejected, (state, action) => {
                state.isLoading = false
                state.error = 'Error - Invalid username or password or server error'
                console.log(state.error)
            })
            .addCase(signinAsync.pending, (state, action) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                
                    console.log('Register successfully')
                    state.isLoading = false
                    state.error = null 
                    state.registered  = true
                
            
            
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false
                state.error = 'Error - unable to register , check form or try again later'
                console.log(state.error)
            })
            .addCase(registerAsync.pending, (state, action) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                state.token =""
                state.logged = false;
                state.username= ""
                state.email=""
                state.isAdmin=false;
                state.first_name="";
                state.lastlogin=""
                state.datejoined="" 
                state._id= null   
            })
    }
});

export const selectToken = (state) => state.login.token 
export const selectLogged = (state) => state.login.logged
export const selectUsername = (state) => state.login.username
export const selectEmail = (state) => state.login.email
export const selectAdmin = (state) => state.login.isAdmin
export const selectFirstname = (state) => state.login.first_name
export const selectLastlogin = (state) => state.login.lastlogin
export const selectDatejoined = (state) => state.login.datejoined
export const selectLoginisLoading = (state) => state.login.isLoading
export const selectLoginerror = (state) => state.login.error
export const selectRegistered = (state) => state.login.registered
export const selectUserid = (state) => state.login._id

export default loginSlice.reducer










