import React, { Component } from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom'
import { postUser } from '../../utils/apiCalls'


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitUser = (e) => {
    postUser(this.state)
    .then(err => console.log('in form', err))
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ email: '', password:''})
  }

  render() {

    return (
      <section className='form-section'>
        <form>
          <input 
            type='text' 
            placeholder='Enter User Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input 
            type='text'  
            placeholder='Enter Password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Link to='/'>
            <button 
              className='login-btn' 
              type='button' 
              onClick={this.submitUser}
            >Login</button>
          </Link>
          <Link to='/createaccount'>
            <button 
              className='login-btn' 
              type='button' 
            >Create Account</button>
          </Link>
        </form>
      </section>
    )
  } 
}

export default LoginForm;