import React, { Component } from 'react'
import './LoginForm.scss'
import { Redirect, Link } from 'react-router-dom'
import { postUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { setUser } from '../../actions';


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitUser = async (e) => {
    this.setState({ error: '' })
    const { setUser } = this.props
    try {
      const user = await postUser(this.state)
      setUser(user)
    } catch({ message }){
      this.setState({ error: message })
    }
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ email: '', password:''})
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }
    return (
      <section className='form-section'>
        <form>
          {this.state.error && <h2>{this.state.error}</h2>}
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
          <button 
            className='login-btn' 
            type='button' 
            onClick={this.submitUser}
          >Login</button>
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

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);