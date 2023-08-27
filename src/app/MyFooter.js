import React from 'react'

const MyFooter = () => {

    const myStyle = {
        padding: '10px',
        marginTop: '15px'     //notice marginTop instead of margin-top , we are inside js component not css file!
       
    }
  return (
    <div className='myfooter'  style={myStyle}>
   
        Made By Michael Mogilianski 2023 

    </div>
  )
}

export default MyFooter