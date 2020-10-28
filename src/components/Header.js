import React from 'react';
import { Link } from 'gatsby';
import AppLogo from '../assets/images/logo.png';

function Header() {
  return (
    <header className='header mb-3'>
      <nav className='navbar p-0'>
        <Link
          to='/'
          className='navbar-brand app-name d-flex align-items-center'
        >
          <img
            className='app-name__logo my-0 mr-1'
            src={AppLogo}
            alt='App logo'
          />
          <span>Textify</span>
        </Link>
        <Link to='/all-queries'>All Queries</Link>
      </nav>
    </header>
  );
}

export default Header;
