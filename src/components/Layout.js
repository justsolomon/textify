import React from 'react';
import Header from './Header';
import '../assets/scss/app.scss';

function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
