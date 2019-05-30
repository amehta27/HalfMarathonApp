import React, {Component} from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button,Carousel} from 'react-bootstrap'
import img1 from '../images/image1.png'
import img2 from '../images/slide2.jpg'
import img3 from '../images/slide3.jpg'
import './homepage.css';
class HomePage extends Component {

render(){
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imagesize"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>WELCOME TO DC HALF MARATHON TRAINING APP</h2>
            <p>HALF MARATHON TRAINING APP is dedicated to changing lives with group walking and running training programs available nationwide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagesize"
            src={img2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h2>Ready for the journey</h2>
            <p>Ready to start walking or running, or maybe you want to improve to the next level? Thsi app is the place for you!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagesize"
            src={img3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h2>Improved Overall Health</h2>
            <p>This app training foster overall improved health. Members not only receive running and walking training, but also nutrition tips, stretching and cross training direction..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
       
    }
}export default HomePage;