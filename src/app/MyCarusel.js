import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { selectProdsList,getProdsisLoading,getProdsAsync,getProdsError } from './Products/productSlice';
import { useSelector, useDispatch } from 'react-redux';


const MyCarusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const myStyle = {
    marginBottom: '50px',
    padding: '10px'

  }
  

  return (
    <div style={myStyle}>
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img
          width="700px" height="500px"
          src="https://raw.githubusercontent.com/michael71161/myshop_backend/main/media/joybos_trashcan.jpg"
          alt="{randOne.prod_name}"
        />
        <Carousel.Caption>
          <h3>Smart Trash cans</h3>
          <p style={{color: "blue"} }>Cans for different rooms </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          width="700px" height="500px"
          src="https://raw.githubusercontent.com/michael71161/myshop_backend/main/media/Posted_images/tikom_robocleaner.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Robo Cleaners</h3>
          <p style={{color: "blue"} }>Varity of prices </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          width="700px" height="500px"
          src="https://raw.githubusercontent.com/michael71161/myshop_backend/main/media/Posted_images/lighttower.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Smart Lighting Solutions</h3>
          <p style={{color: "blue"} }>
            Light towers and smart bulbs 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarusel