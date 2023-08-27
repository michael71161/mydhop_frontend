import React,{ useState,useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { registerAsync,selectLoginisLoading,selectLoginerror,selectToken,selectLogged, selectRegistered } from './loginSlice';
import { useNavigate, Link } from 'react-router-dom';
import LoaderSmall from '../LoaderSmall';
import Button from 'react-bootstrap/Button';


const Register = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginError = useSelector(selectLoginerror)
    const isLoading = useSelector(selectLoginisLoading)
    const isRegistered = useSelector(selectRegistered)
    const navigate = useNavigate()
    

    useEffect(() => {
        if (loginError) {
        alert("Register failed, change your username or try again later")
        window.location.reload() 
        }
      }, [loginError]);

      useEffect(() => {
        if (isRegistered   ) {
        alert(`Registration for ${username} completed successfully! You will get confirmation Email during the next few minutes`)
        navigate('/login')
        }
      }, [isRegistered]);

    
    
    


      
    
    const handleSubmit =  (e) => {
        e.preventDefault();
        
         dispatch(
            registerAsync({
                username: username,
                password: password,
                first_name: first_name,
                email: email,
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
      {isLoading && <div><LoaderSmall/></div>}
      
      
      <p><h4 className='textPurple'>Registration</h4></p>
      <p  ><h5><i className='redText'>*Please use a real E-mail address to be able to get notifications from this site!</i></h5></p>
      <form onSubmit={handleSubmit} style={myStyle}>
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
          <label htmlFor="first_name"> First Name: </label>
          <br/>
          <input
            type="text"
            name='first_name'
            placeholder="First Name"
            id="first_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="email"> Email: </label>
          <br/>
          <input
            type="email"
            name='email'
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </p>
        
        <Button variant="outline-primary" type="submit" disabled={isLoading}> {isLoading ? "Loading " : "Register"}</Button>
      </form> 
      <br/>
      <h6><i>After registration you will be redirected to login page</i></h6>
      <h6><i className='redText'>If your Email is valid you should get confirmation in couple of minutes</i></h6>
      <p> <Link to="/login"> Back to login</Link></p>
      <br/>
      <br/>
      {loginError && <h5 className='redText'>Register failed, change your username or try again later</h5>}
      {isRegistered && <h5>{username}  registered to the site!</h5>}
      
    </div>
  )
}

export default Register