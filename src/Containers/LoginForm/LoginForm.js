import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser, getFavorites } from '../../utils/apiCalls';
import { setUser, setFavs, updateFavs } from '../../actions';
import './LoginForm.scss';


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
    const { setUser, setFavs, updateFavs } = this.props
    try {
      const foundUser = await postUser(this.state)
      const favs = await getFavorites(foundUser.id)
      // console.log('in form favs', favs)
      setFavs(favs)
      updateFavs(favs)
      setUser(foundUser)
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
            disabled={!this.state.email || !this.state.password} 
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
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setFavs: favs => dispatch(setFavs(favs)),
  updateFavs: favs => dispatch(updateFavs(favs))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);