import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button} from 'react-bootstrap'
import { withRouter } from "react-router";


class Schedule extends Component {
  constructor(){
    super()
    this.state = {

      colorgroup : ''
    }
  }

    handleTextChange = (e) => {
      this.setState({
         [e.target.name] : e.target.value
      },() => {
        this.scheduleSelection()
      })
      

    }

      
    scheduleSelection() {
      if (this.state.colorgroup === 'Blue') {
        console.log("hi")
        this.props.history.push('/BlueSchedule')
      }else if (this.state.colorgroup === 'Green')
      {
        this.props.history.push('/GreenSchedule')
      }else if (this.state.colorgroup === 'Yellow')
      {
        this.props.history.push('/YellowSchedule')
      }else if (this.state.colorgroup === 'Red')
      {
        this.props.history.push('/RedSchedule')
      }else if (this.state.colorgroup === 'Orange')
      {
        this.props.history.push('/OrangeSchedule')
      }else if (this.state.colorgroup === 'Purple')
      {
        this.props.history.push('/PurpleSchedule')
      }
}


   render (){

       return(
        <div>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Color Group</Form.Label>
          <Form.Control as="select" name ="colorgroup"onChange={this.handleTextChange}>
            <option>Choose</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
            <option>Red</option> 
            <option>Orange </option> 
            <option>Purple</option>
          </Form.Control>
        </Form.Group>
        
        </div>
           
       )

   }



}export default withRouter(Schedule)
