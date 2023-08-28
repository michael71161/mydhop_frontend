import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProdsAsync,selectProdsList,getProdsisLoading,getProdsError,getProdsFetched } from './productSlice';
import Loader from '../Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link, useLocation, Outlet } from "react-router-dom";
import {addItemToCart,selectMyCart } from '../Cart/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const Products = () => {
    const prodsList = useSelector(selectProdsList)
    const prodsLoading = useSelector(getProdsisLoading)
    const prodsError = useSelector(getProdsError)
    const prodsFetched =useSelector(getProdsFetched)
    const dispatch = useDispatch()
    const currentPath = useLocation().pathname

    const notify = () => toast.success(`product added to cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });


    useEffect(() => {
        dispatch(getProdsAsync(0));
      }, [JSON.stringify(prodsList)]); 


    
    let content 
    if (prodsLoading ){
        content = <Loader/>
    }
    else if(prodsFetched){
        content = 
        <div >
            <h2>All Products</h2>
        <Container>
            
            <Row className="justify-content-md-center">
                {prodsList.map(product => (
                 <Col key ={product._id}  sm={12} md={6} lg={4} xl={3}>
                    <Card className="my-3 p-3 rounded" style={{ width: '19rem' }}>
                    <Card.Img variant="top" width="330px" height="370px" src={`https://raw.githubusercontent.com/michael71161/myshop_backend/main/${product.image}`} />
                    <Card.Body>
                    <Card.Title>{product.prod_name}</Card.Title>
                    <Card.Text>
                        <h3>{product.price}₪</h3>
                    </Card.Text>
                    <Link to={`${product._id}`}>
                        
                    <Button variant="outline-primary"> <i class="fa-solid fa-circle-info"></i> Details</Button>
                    </Link>
                    <br/> <br/>
                    <Button variant="outline-success"  onClick={() =>{
                         notify()
                         dispatch(addItemToCart({ _id: product._id, desc: product.prod_name, amount: 1,price:product.price,total: product.price }))}}> <i class="fa-solid fa-cart-plus"></i> Add to cart </Button>
                         <ToastContainer/>
                    </Card.Body>

                    </Card>
                 </Col> 
                ))}
            </Row>
        </Container>
        
        
        </div>



    }
    else if(prodsError){
        content = <div className='redText'>{prodsError}</div>
    }



  return (
    <div>
        {content}
    </div>
  )
}

export default Products




