import React, {Component} from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button} from 'react-bootstrap'
import './Register.css';
export class Register extends Component{

    constructor(){
        super()
        this.state = {
             firstname : '',
             lastname  : '',
             email :'',
             password :'',
             address : '',
             city :'',
             state : '',
             zip: 0,
             cellphone:'',
             gender:'',
             dateofbirth:'',
             colorgroup:''
        }

    }

    handleTextChange = (e) => {
      this.setState({
         [e.target.name] : e.target.value
      })
  }

  handleSaveClick = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/api/userprofiles',{
        method:'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
    body: JSON.stringify({
        firstname : this.state.firstname,
        lastname: this.state.lastname,
        emailaddress: this.state.email,
        password : this.state.password,
        streetaddress : this.state.address,
        city : this.state.city,
        state : this.state.state,
        zip: this.state.zip,
        cellphone: this.state.cellphone,
        gender : this.state.gender,
        dateofbirth : this.state.dateofbirth,
        colorgroup : this.state.colorgroup
    })
}).then(response => response.json())
.then(result => {
  if(result.success) {
    //console.log('success')
    //   this.populateAllBooks
  this.props.history.push('/login')
  }
})

}
    render(){
      return(
        <Form className='form-style'>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name ="email" placeholder="Enter email" onChange={this.handleTextChange} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name ="password"placeholder="Password" onChange={this.handleTextChange} />
          </Form.Group>
        </Form.Row>
        

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>firstname</Form.Label>
            <Form.Control type="firstname" name ="firstname"placeholder="Enter firstname" onChange={this.handleTextChange} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>lastname</Form.Label>
            <Form.Control type="lastname" name ="lastname"placeholder="lastname" onChange={this.handleTextChange} />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="address"onChange={this.handleTextChange} />
        </Form.Group>
      
       
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name ="city"onChange={this.handleTextChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name ="state"onChange={this.handleTextChange}>
              <option>Choose...</option>
              <option>Tx</option>
              {/* <option></option> */}
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name ="zip"onChange={this.handleTextChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cell Phone</Form.Label>
            <Form.Control type="cell phone" name ="cellphone" placeholder="Enter cell phone" onChange={this.handleTextChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
           <Form.Control as="select" name ="gender"onChange={this.handleTextChange}>
             <option>Choose</option>
        <option>Male</option>
        <option>Female</option>
       </Form.Control>
        </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="Date of Birth" name ="dateofbirth"placeholder="Enter Date of Birth" onChange={this.handleTextChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Color Group</Form.Label>
      <Form.Control as="select" name ="colorgroup"onChange={this.handleTextChange}>
        <option>Choose</option>
        <option>Blue - 6 mins per mile or under</option>
        <option>Green - 9 mins per mile</option>
        <option>Red - 11 to 12 mins per mile </option> 
        <option>Orange - 12 to 14 mins per mile </option> 
        <option>Purple - 15 to 20 mins per mile</option>
      </Form.Control>
    </Form.Group>
        </Form.Row>

       
        <Button variant="primary" className="btncolor" type="submit" onClick= {this.handleSaveClick}>
          Submit
        </Button>
      </Form>

      )
    }




}