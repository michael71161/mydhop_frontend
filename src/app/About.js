import React from 'react'
const myStyle =   {


  backgroundColor:  '#fdffcd',
  padding: '30px' 

  

};
const About = () => {
  return (
    <div style={myStyle}>
        
        <h5>Mikes Shop - smart home E commerce </h5>
      
        <h5><i className='textPurple'>
            This project made by Michael Mogilianski
            </i>
        </h5>
       
        <h6>

        <i><b><i class="fa-solid fa-star fa-beat fa-lg"></i> &nbsp;&nbsp;&nbsp; I am open to work!!! &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-star fa-beat fa-lg"></i> <br/>Check out my socials and links!</b></i></h6>
        <br/>
        
        
        <a href="https://www.linkedin.com/in/michaelmog/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="https://github.com/michael71161/"><i class="fa-brands fa-github fa-2xl"></i></a>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="mailto:michael71161@gmail.com/"><i class="fa-solid fa-envelope fa-2xl"></i></a>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="https://michaelmogilianski.onrender.com"><i class="fa-solid fa-desktop fa-2xl"></i></a>
        <br/>
        <br/>
        <img width="270px" height="350px"
        src='https://raw.githubusercontent.com/michael71161/myshop_backend/main/media/Posted_images/misha_programmer.jpeg'
        alt='me'/>
        
        <br/>
        <br/>
        <h5>Tech Stack</h5>
        <h6>Server Side: Django, Database: PostgreSQL </h6>
        <h6>Client side: HTML, CSS, React.js, Redux Toolkit, bootstrap
         </h6> <h6>Database, Server and client are all hosted at Render.com host platform</h6>


    </div>
  )
}

export default About