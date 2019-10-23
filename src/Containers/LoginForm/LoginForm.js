import React, { Component } from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom'
import { postUser } from '../../utils/apiCalls'


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {

    postUser('http://localhost:3001/api/v1/login')
    return (
      <section className='form-section'>
        <form>
          <input type='text' placeholder='Enter User Name'/>
          <input type='text'  placeholder='Enter Password'/>
          <Link to='/'>
            <button className='login-btn' type='button'>Login</button>
          </Link>
        </form>
      </section>
    )
  } 
}

export default LoginForm;