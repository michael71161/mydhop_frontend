import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";
import { selectToken ,logoutAsync} from './Login/loginSlice';
import { selectMyCart } from './Cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const MyNav = () => {
  const myCart = useSelector(selectMyCart)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  return (
    <div>
         <Navbar expand="lg"  bg="dark" data-bs-theme="dark"  sticky="top">
      
        <Navbar.Brand ><Link className="nav-link" to="home/">Mike's shop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            bg="dark" data-bs-theme="dark"  
          >
            <Nav.Link><Link className="nav-link" to="home/"> <i class="fa-solid fa-house"></i> Home</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="user/"> <i class="fa-solid fa-user"></i> User Panel</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="products/"> <i class="fa-solid fa-store"></i> Products</Link></Nav.Link>
            {!token ? <Nav.Link><Link className="nav-link" to="login/"> <i class="fa-solid fa-right-to-bracket"></i> Login</Link></Nav.Link> :<Nav.Link><Link className="nav-link" onClick={()=>{
              dispatch(logoutAsync({token}))
              alert("User logged out")}}> <i class="fa-solid fa-right-from-bracket"></i>Logout</Link></Nav.Link>  }
            <Nav.Link><Link className="nav-link" to="cart/"> <i class="fa-solid fa-cart-shopping"></i> Cart {myCart.length} products </Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="about/"> <i class="fa-solid fa-address-card"></i> About</Link></Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default MyNav