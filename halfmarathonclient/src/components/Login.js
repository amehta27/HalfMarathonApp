import React, { Component } from 'react';
import axios from 'axios';
import { Nav,Navbar,Form,FormControl,Col,Button} from 'react-bootstrap'
import './Login.css';
import { setAuthenticationHeader } from '../utils/authenticate'
import { connect } from 'react-redux'
// import { Http2ServerResponse } from 'http2';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          emailaddress: '',
          password: ''
        }
      }

    handleLoginClick = (e) => {
      e.preventDefault()
      console.log('clicked')
      
      axios.post('http://localhost:8080/login', {
        emailaddress: this.state.emailaddress,
        password: this.state.password
      }).then(response => {
        let token = response.data.token


        // save the token in local storage
        localStorage.setItem('jsonwebtoken',token)
        this.props.onAuthenticated(token)

        setAuthenticationHeader(token)
        this.props.history.push('/schedule')
      })
    }

       handleTextBoxChange = (e) => {

        this.setState({
          [e.target.name]: e.target.value
        })
    
      }

    render() {
        return (
          // <div>
          //   <input name='emailaddress' onChange={this.handleTextBoxChange}/>
          //   <input name='password' type='password' onChange={this.handleTextBoxChange}/>
          //   <button onClick={this.handleLoginClick}>Submit</button>
          // </div>
        <Form className = "formstyling">
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="emailaddress" onChange={this.handleTextBoxChange}placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"onChange={this.handleTextBoxChange} placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" className="btncolor" onClick={this.handleLoginClick} type="submit">
         Submit
         
        </Button>
        
         </Form>
 
  



        //     <div>
        // <input name="emailaddress" onChange={this.handleTextBoxChange} placeholder='login'></input>
        // <input name="password" onChange={this.handleTextBoxChange} placeholder='password'></input>
        // <button onClick={this.handleLoginClick}>Login</button>
          
        // </div>

            // <h1>login</h1>

            )
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
          onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', value: token })
        }
      }
      
export default connect(null, mapDispatchToProps)(Login)
      