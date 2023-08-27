import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import { selectUsername,selectEmail,selectFirstname,selectDatejoined,selectToken,selectUserid  } from '../Login/loginSlice';
import {  Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';



const UserInfo = () => {
    const userName = useSelector(selectUsername)
    const userEmail = useSelector(selectEmail)
    const userFirstName = useSelector(selectFirstname)
    const userJoined = useSelector(selectDatejoined)
    const userToken = useSelector(selectToken)
    const userId = useSelector(selectUserid)
    
   


    const dispatch = useDispatch

    let content
    if (userToken){
        content = 
        <div>
            <h4>User information</h4>
            <h6>Username: {userName} </h6>
            <h6> user Email address: {userEmail} </h6>
            <h6> First Name: {userFirstName ? userFirstName : userName} </h6>
            <h6> Member Since: {userJoined.slice(1,11)} </h6>
            <br/>
            
        </div>

    }
    else { content = 
        <div>
            <br/>
            <br/>
            <br/>
            <h5><i> Please log in to get your data</i></h5>
            <br/>
            <Link to="/login"><i> Go to login</i></Link>


        </div>
    }


  return (
    <div>
      {content}  
    </div>
  )
}

export default UserInfo