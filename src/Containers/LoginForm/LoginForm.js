import React, { Component } from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom'
import { postUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { throwError, setUser } from '../../actions';


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

  submitUser = (e) => {
    this.setState({error: ''})
    const { setUser } = this.props
    postUser(this.state)
    .then(user => {
      setUser(user)
    })
    .catch(error => this.setState({error: error.message}))
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ email: '', password:''})
  }

  render() {

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
          {/* <Link to='/'> */}
            <button 
              className='login-btn' 
              type='button' 
              onClick={this.submitUser}
            >Login</button>
          {/* </Link> */}
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

const mapStateToProps = ({ errorMsg }) => ({
  errorMsg
})

const mapDispatchToProps = dispatch => ({
  throwError: errorMsg => dispatch(throwError(errorMsg)),
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);