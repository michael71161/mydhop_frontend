import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUsername, selectToken } from './Login/loginSlice'
import MyCarusel from './MyCarusel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



const MyHome = () => {
  const username = useSelector(selectUsername)
  const token = useSelector(selectToken)
  return (
    <div>
        <h1>Mike's Smart Home</h1>
        <h3>The best place for smart home gadgets</h3>
        <br/>
        {token && <div>
          <h2><i>
            hello {username}
            </i></h2></div>}
            
            <Row>
            <Col xs={12}>
            <MyCarusel/>
            </Col>
            </Row>
            
    
    </div>
  )
}

export default MyHome