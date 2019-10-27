import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className='header-title'>Movie Tracker</h1>
      <Link to='/login'><button className='login'>Login</button></Link>
      <Link to='/createaccount'><button className='create'>Create Account</button></Link>
      <Link to='/'><button className='signout'>Sign Out</button></Link>


    </header>
  )
}

export default Header;