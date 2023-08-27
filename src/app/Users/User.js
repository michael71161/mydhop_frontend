import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { selectUserOrdersList,getUserOrderAsync,getUserOrdersisLoading,getUserOrdersError,getUserOrdersFetched } from './userSlice';
import { selectUsername } from '../Login/loginSlice';
import {  Link, Outlet} from "react-router-dom";

const User = () => {
    const username = useSelector(selectUsername)
  return (
    <div>
        <br/>
        <br/>
        <h3>Hello Dear {username} !!!</h3>
        <br/>
        <h5>From here you can view and change your personal info and browse your privious orders</h5>
        
        <h5><i>Mike's smart home team is happy to see you and bring you the best products!!!</i></h5>
        <br/>
        <Link to="/user/info"><i>My Information</i></Link>&nbsp; &nbsp; <Link to ="/user/orders"><i>My Orders</i></Link>
        <br/>
        <br/>
        <Outlet/>
        
    </div>
  )
}

export default User