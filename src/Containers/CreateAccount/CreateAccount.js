import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import { addUser } from '../../utils/apiCalls';
import './CreateAccount.scss';


class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      success: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createAccount = async (e) => {
    this.setState({ error: '' })
    try{
      await addUser(this.state)
      this.setState({ success: true })
    } catch({ message }) {
      this.setState({ error: message })
    }
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', email: '', password:''})
  }

  render() {
    if(this.state.success) {
      return <Redirect to='/login' />
    }
    return (
      <section className='form-section'>
        {this.state.error && <h2 className='error-msg'>{this.state.error}</h2>}
        <form className='create-account-form'>
          <h2 className='create-account-h2'>Create Account: </h2>
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
          <button 
            className='login-btn' 
            type='button'
            disabled={!this.state.name || !this.state.email || !this.state.password}
            onClick={this.createAccount} 
          >Create Account</button>
        </form>
      </section>
    )
  }
}

export default CreateAccount;