import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from './Products/productSlice'
import loginReducer from './Login/loginSlice'
import cartReducer from './Cart/cartSlice'
import orderReducer from './Orders/orderSlice'
import userReducer from './Users/userSlice'
import detailsReducer from './Orders/detailsSlice'
import updateUserReducer from './Users/updateUserSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    login: loginReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
    details: detailsReducer,
    updateUser: updateUserReducer
  
    
 
    
  },
});
