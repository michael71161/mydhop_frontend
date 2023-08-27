import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  Link,useParams} from "react-router-dom";
import Loader from '../Loader';
//import { updateUserAsync,getUserIsUpdated,getUserOrdersisLoading,getUserOrdersError } from './userSlice';
import { updateUserAsync,getUsersAsync,selectUserList,selectUserLoading,selectUserError,selectUsersFetched,selectUserUpdated } from './updateUserSlice';
import { selectToken,selectUsername,selectEmail,selectFirstname, selectUserid } from '../Login/loginSlice';
import LoaderSmall from '../LoaderSmall';
import Button from 'react-bootstrap/esm/Button';



const UpdateUser = () => {
  let params = useParams()
  let user_id = params.id
  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState("")
  const [newFirst_name, setNewFirst_name] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const username = useSelector(selectUsername)
  const first_name = useSelector(selectFirstname)
  const email=useSelector(selectEmail);
  const updError = useSelector(selectUserError)
  const updLoading = useSelector(selectUserLoading)
  const token = useSelector(selectToken)
  const tokenId = useSelector(selectUserid)
  const isUpd = useSelector(selectUserUpdated)
  const userList = useSelector(selectUserList)


  useEffect(() => {
    dispatch(getUsersAsync(token));
  }, [JSON.stringify(userList)]); 

  const handleSubmit =  (e) => {
    e.preventDefault();
    
     dispatch(
      updateUserAsync({
            newUsername: newUsername,
            newFirst_name: newFirst_name,
            newEmail: newEmail,
            token: token,
            id: user_id


        })
    )  
}

  return (
    <div>
      <br/>
      <br/>
      {updLoading && <div><LoaderSmall/></div>}
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="newUsername">New User Name: </label>
          <br/>
          <input
            type="text"
            name='newUsername'
            placeholder={username}
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="newFirst_name"> New First Name: </label>
          <br/>
          <input
            type="text"
            name='newFirst_name'
            placeholder={first_name}
            id="newFirst_name"
            value={newFirst_name}
            onChange={(e) => setNewFirst_name(e.target.value)}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="newEmail"> Email: </label>
          <br/>
          <input
            type="email"
            name='newEmail'
            placeholder={email}
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          ></input>
        </p>
        
        
        <Button variant="outline-primary" type="submit" disabled={updLoading}> {updLoading ? "Loading " : "Update User"}</Button>
      </form> 
      <br/>
      <br/>
      {updError && <h5>Failed to update user </h5>}
      {isUpd && <h5>Updated successfully</h5>}
    </div>

  )
}

export default UpdateUser