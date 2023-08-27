
import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  Link} from "react-router-dom";
import { signinAsync,selectLoginisLoading, selectLoginerror,selectUsername,selectToken } from './loginSlice';
import { useNavigate } from 'react-router-dom';
import LoaderSmall from '../LoaderSmall';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const isLoading = useSelector(selectLoginisLoading)
    const loginError = useSelector(selectLoginerror)
    const token = useSelector(selectToken)
    const navigate = useNavigate()

   
    

    useEffect(() => {
      if (loginError) {
      alert("wrong username or password")
      window.location.reload() 
      }
    }, [loginError]);

    useEffect(() => {
      if (token) {
      alert(`Hello ${username}, you are logged in!`)
      navigate('/home')
      
      
      }
    }, [token]);
   
    const handleSubmit =  (e) => {
        e.preventDefault();
        
         dispatch(
            signinAsync({
                username: username,
                password: password
            })
        )
        
        

      }
    
    

    const myStyle =   {


      backgroundColor:  '#fdffcd',
      padding: '50px' 
  
      
  
    };
  
   
          
   
    

  return (
    <div>
      <br/>
      <br/>
        <div>
        {isLoading && <div><LoaderSmall/></div>}
        <br/>
        <br/>
        <div style = {myStyle}>
        <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username"> User Name: </label>
          <br/>
          <input
            type="text"
            name='username'
            placeholder="User Name"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </p>
        <p>
        <label htmlFor="password">Password: </label>
          <br/>
          <input
            type="password"
            name='Password'
            id="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </p>
        <br/>
        
        <Button variant="outline-primary" type="submit" disabled={isLoading}> {isLoading ? "Loading " : "Log in"}</Button>
      </form>
      </div>
      </div>
      <br/>
      <p><i className='redText'> After Logging in you will be redirected to home</i></p>
      <p>Dont have an  account yet? <Link to="/register"> Register now</Link></p>
      <br/>
      <p> <Link to="/home"> Go to home</Link></p>
      <br/>
      {loginError && <h5 className='redText'>Wrong username or password</h5>}
      {token && <h5>Hello {username} , you are logged in!!</h5>}
    
    </div>
  )
}

export default Login

