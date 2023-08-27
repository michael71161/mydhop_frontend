import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectUserOrdersList, getUserOrderAsync,getUserOrdersisLoading ,
getUserOrdersError,getUserOrdersFetched} from './userSlice';
import Loader from '../Loader';
import { selectToken } from '../Login/loginSlice';
import { selectUsername } from '../Login/loginSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const UserOrders = () => {
  const token=useSelector(selectToken);
  const userOrders = useSelector(selectUserOrdersList)
  const isLoading = useSelector(getUserOrdersisLoading)
  const orderError = useSelector(getUserOrdersError)
  const isFetched = useSelector(getUserOrdersFetched)
  const userName = useSelector(selectUsername)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getUserOrderAsync(token));
  }, [JSON.stringify(userOrders)]); 



  let content 
  if (isLoading){
    content =<Loader/>
  }

  else if(isFetched){
    content = 
    <div>
      <h3> User {userName} orders </h3>
      <hr/>
      {userOrders.map(order => (
        <p key={order._id}>
         <h6> Order Date: {order.createdTime.slice(0,10)} &nbsp; &nbsp;
           Order Total Price: {order.total}&nbsp; <Link to={`orderdetails/${order._id}`} >Details </Link> </h6>
        </p>
      ))}
    </div>
  }

  else if(orderError){
    content = <p>{orderError}</p>
  }


  return (
    <div>
     {token ? content: <p><h6>You must be logged in to see your orders</h6></p>}
     <br/>
      <p> <Link to="/home"> Go to home</Link></p>
       
    </div>
  )
}

export default UserOrders