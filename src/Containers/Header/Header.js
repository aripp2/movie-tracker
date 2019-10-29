import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, clearFavs } from '../../actions';

import './Header.scss';

const Header = ({ user, setUser, clearFavs, favorites }) => {
  console.log('favs in header', favorites)
  return (
    <header>
      <h1 className='header-title'>Movie Tracker</h1>
      <div className='header-btn-wrapper'>
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
            clearFavs();
          }}
        >Sign Out</button>
        <Link to='/favorites'>
          <button 
            className='view-favs nav-btn'
            disabled={!user}
          >View Favorites</button>
        </Link>
        <Link to='/'>
          <button 
            className='home nav-btn'
          >Back to All Movies</button>
        </Link>
      </div>
    </header>
  )
}

const mapStateToProps = ({ user, favorites }) => ({
  user, 
  favorites
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  clearFavs: () => dispatch(clearFavs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);