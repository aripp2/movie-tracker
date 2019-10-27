import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import './Header.scss';

const Header = ({ user, setUser }) => {

  return (
    <header>
      <h1 className='header-title'>Movie Tracker</h1>
      {user !== null && <h2>Welcome {user.name}</h2>}
      <Link to='/login'>
        <button 
          className='login nav-btn'
          >Login</button>
        </Link>
      <Link to='/createaccount'>
        <button 
          className='create nav-btn'
          >Create Account</button>
      </Link>
      <button 
        className='signout nav-btn'
        onClick={() => setUser(null)}
      >Sign Out</button>
      <button className='view-favs nav-btn'>View Favorites</button>
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