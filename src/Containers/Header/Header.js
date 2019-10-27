import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, getFavs } from '../../actions';
import './Header.scss';

const Header = ({ user, setUser, getFavs }) => {

  return (
    <header>
      <h1 className='header-title'>Movie Tracker</h1>
      {user !== null && <h2>Welcome {user.name}</h2>}
      <Link to='/login'>
        <button 
          className='login nav-btn'
          disabled={user}
          >Login</button>
        </Link>
      <Link to='/createaccount'>
        <button 
          className='create nav-btn'
          disabled={user}
          >Create Account</button>
      </Link>
      <button 
        className='signout nav-btn'
        disabled={!user}
        onClick={() => {
          setUser(null);
          getFavs([]);
        }}
      >Sign Out</button>
      <button 
        className='view-favs nav-btn'
        disabled={!user}
      >View Favorites</button>
    </header>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  getFavs: favs => dispatch(getFavs(favs))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);