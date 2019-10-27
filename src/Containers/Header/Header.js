import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import './Header.scss';

const Header = ({ user }) => {
    console.log('in header', user)
    console.log('in header props', setUser)

  return (
    <header>
      <button>View Favorites</button>
      <h1 className='header-title'>Movie Tracker</h1>
      {user !== null && <h2>Welcome {user.name}</h2>}
      <Link to='/login'>
        <button 
          className='login'
          >Login</button>
        </Link>
      <Link to='/createaccount'>
        <button 
          className='create'
          >Create Account</button>
      </Link>
      <button 
        className='signout'
        onClick={() => setUser()}
      >Sign Out</button>
    </header>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);