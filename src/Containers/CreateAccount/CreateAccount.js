import React, { Component } from 'react'
import './CreateAccount.scss'
import { Link } from 'react-router-dom'


class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section className='form-section'>
        <form className='create-account-form'>
          <label>Create Account: </label>
          <input type='text' placeholder='Enter Email'/>
          <input type='text'  placeholder='Enter Password'/>
          <Link to='/login'>
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

export default CreateAccount;