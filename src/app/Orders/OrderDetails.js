import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import { selectOrderDetails,selectDetailsisLoading,selectDetailsError,selectDetailsFetched,orderDetailsAsync } from './detailsSlice';
import { getProdsAsync,selectProdsList } from '../Products/productSlice';
import { selectToken } from '../Login/loginSlice';

import Loader from '../Loader';
import Button from 'react-bootstrap/Button';

const OrderDetails = () => {
   
    const orderDetails = useSelector(selectOrderDetails)
    const prodsList = useSelector(selectProdsList)
    const isLoading = useSelector(selectDetailsisLoading)
    const detailsError = useSelector(selectDetailsError)
    const isFetched = useSelector(selectDetailsFetched)
    const [myProdNmae, setmyProdname] = useState("") 
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    let params = useParams()
    let order_id = params.id

    
    useEffect(() => {
      dispatch(getProdsAsync(0));
    }, [JSON.stringify(prodsList)]);


    useEffect(() => {
      dispatch(orderDetailsAsync({id:order_id, token: token }));
    }, [JSON.stringify(orderDetails)]);


    const getProdName = (orderprod) => {
      const neededName = prodsList.filter((x) => x._id ==orderprod.product_id)
      console.log(neededName)
      return neededName
    }

  let content 
  if (isLoading){
     content = <div>
      <Loader/>
    </div>
  } 
  else if (isFetched){
    content = <div><h4>Order Details</h4><br/>
   
    {orderDetails.map(det =>(
       <ul>
      <li key={det._id}>
        <h6>
          Product Name: {getProdName(det)[0].prod_name} &nbsp; |
          Amount: {det.amount} &nbsp; |
          Price for Product: {det.total} 
        </h6>

      </li>
      </ul> 
    ))}

   

    </div>

  }
  else if(detailsError){
    content = <p>{detailsError}</p>
  }   
    
  return (
   <div>
    {content}
    <br/>
    <br/>
    <p> <Link to="/user/orders"> Back to orders</Link></p>

    </div>
  )
}

export default OrderDetails
