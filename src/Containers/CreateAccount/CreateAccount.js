import React, { Component } from 'react';
import './CreateAccount.scss';
import { Link } from 'react-router-dom';
import { addUser } from '../../utils/apiCalls';


class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createAccount = (e) => {
    addUser(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', email: '', password:''})
  }

  render() {
    return (
      <section className='form-section'>
        <form className='create-account-form'>
          <h2>Create Account: </h2>
          <input 
            type='text' 
            placeholder='Enter Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            type='text' 
            placeholder='Enter Email'
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
          <Link to='/login'>
            <button 
              className='login-btn' 
              type='button'
              onClick={this.createAccount} 
            >Create Account</button>
          </Link>
        </form>
      </section>
    )
  }
}

export default CreateAccount;