import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  Link, useParams} from "react-router-dom";
import LoaderSmall from '../LoaderSmall';
import { updUserAsync ,getUserOrdersError,getUserOrdersisLoading,getUserisUpd} from './userSlice';
import Button from 'react-bootstrap/Button';
import { selectToken,selectUserid,selectUsername, selectEmail,selectFirstname } from '../Login/loginSlice';

const UserinfoUpd = () => {
    let params = useParams()
    let user_id = params.id
    const dispatch = useDispatch()
    const [newUsername, setNewUsername] = useState("")
    const [newFirst_name, setNewFirst_name] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const username = useSelector(selectUsername)
    const first_name = useSelector(selectFirstname)
    const email=useSelector(selectEmail);
    const updError = useSelector(getUserOrdersError)
    const updLoading = useSelector(getUserOrdersisLoading)
    const tokenId = useSelector(selectUserid)
  return (
    <div>


    </div>
  )
}

export default UserinfoUpd