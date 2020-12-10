import React from 'react';
import Header from './Header';
import '../assets/scss/app.scss';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      {children}
    {/* <Footer /> */}
    </div>
  );
}

export default Layout;
