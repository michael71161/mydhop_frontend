import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import  './bootstraptheme.min.css' ;
import TestPage from './app/TestPage';
import Huyaks from './app/Huyaks';
import Products from './app/Products/Products';
import MyHome from './app/MyHome';
import Error from './app/Error';
import ProductDetails from './app/Products/ProductDetails';
import Login from './app/Login/Login';
import Register from './app/Login/Register';
import Cart from './app/Cart/Cart';
import User from './app/Users/User';
import UserInfo from './app/Users/UserInfo';
import UserOrders from './app/Users/UserOrders';
import OrderDetails from './app/Orders/OrderDetails';
import UpdateUser from './app/Users/UpdateUser';
import About from './app/About';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<MyHome />} />
      <Route path="/test" element={<TestPage />} /> 
      <Route path="/huyak" element={<Huyaks />} />
      <Route path="/home" element={<MyHome />} />
      <Route path="/products" element={<Products />}/>
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
        <Route path="/user" element={<User/>} >
          <Route path="/user/info" element={<UserInfo/>} />
          <Route path="/user/orders" element={<UserOrders/>} />
          <Route path="/user/orders/orderdetails/:id" element={<OrderDetails/>} />
          <Route path='/user/info/upduser/:id' element={<UpdateUser/>} />
        </Route>
      
      
      

      
        

      <Route path='*' element={<Error />} />
        
      
    </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
