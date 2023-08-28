import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProdsAsync,selectProdsList,getProdsisLoading,getProdsError,getProdsFetched } from './productSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';




const ProductDetails = () => {
  let params = useParams()
  let prod_id = params.id
  const prodsList = useSelector(selectProdsList)
  const prodsLoading = useSelector(getProdsisLoading)
  const prodsError = useSelector(getProdsError)
  const prodsFetched = useSelector(getProdsFetched)
  const dispatch = useDispatch()
   
  
  
  useEffect(() => {
    dispatch(getProdsAsync(prod_id));
  }, [JSON.stringify(prodsList)]); 
  
  let content 
    if (prodsLoading ){
        content = <Loader/>}
    
    else if(prodsFetched){
        content = 
        <div > 
          
      {prodsList.map(prod=><div >
        <Row className="justify-content-md-center">
        <Card  style={{ width: '34rem' }} >
    
        <Card.Body>
          <Card.Text>
            <h3>{prod.prod_name}</h3>
            <hr/>
            <h2>{prod.price} ₪</h2>
            <hr/>
           <h5>{prod.desc}</h5>
          </Card.Text>
          
       <Link to='/Products'>
          <Button variant="outline-primary">Back to products</Button>
            </Link>
        </Card.Body>
        <Card.Img variant="top"  width="330px" height="370px" src={`https://raw.githubusercontent.com/michael71161/myshop_backend/main/${prod.image}`} alt={prod.prod_name} />
      </Card>
      </Row>
    </div>)}
      
     
   </div>
    }
     
    else if (prodsError){
      content = <div>
        <hr/>
        <hr/>
        <h5 className='redText'>
        {prodsError}
        </h5>
        <br/>
        <Link to='/'>back home</Link>
      </div>
    }

  
  
  return (
    <div>
        
      
       {content}
       
       
    </div>
  )
}

export default ProductDetails