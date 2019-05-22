import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios'
// import { setAuthenticationHeader } from '../utils/authenticate'
import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super()
    
        this.state = {
          emailaddress: '',
          password: ''
        }
      }
    handleLoginClick = () => {
        axios.post('http://localhost:8080/login',{
            emailaddress: this.state.emailaddress,
            password: this.state.password
          }).then(response => {

            let token = response.data.token
            console.log(token)

      // save the token in local storage
            localStorage.setItem('jsonwebtoken',token)
            this.props.onAuthenticated(token)
            
        
          }).catch(error => console.log(error))


    }

    handleTextBoxChange = (e) => {

        this.setState({
          [e.target.name]: e.target.value
        })
    
      }

    render() {
        return (
            <div>
        <input name="emailaddress" onChange={this.handleTextBoxChange} placeholder='login'></input>
        <input name="password" onChange={this.handleTextBoxChange} placeholder='password'></input>
        <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleHelloClick}>Say Hello</button>
        </div>

            // <h1>login</h1>

            )
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
          onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', token: token })
        }
      }
      
export default connect(null, mapDispatchToProps)(Login)
      