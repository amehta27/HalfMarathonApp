import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button,Carousel,Card} from 'react-bootstrap'



class Nutrition extends Component {

    render(){
        return(
        <div>
            <h2>Good Nutrition Is the Foundation for Success</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Consuming a wide variety of healthy foods containing good carbohydrates, lean proteins, 
              and healthy fats provides essential nutrients. 
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>

        )

        }
    }export default Nutrition;