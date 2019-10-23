import React, { Component } from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom'


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section>
        <form>
          <input type='text' placeholder='Enter User Name'/>
          <input type='text'  placeholder='Enter Password'/>
          <Link to='/'>
            <button type='button'>Login</button>
          </Link>
        </form>
      </section>
    )
  } 
}

export default LoginForm;