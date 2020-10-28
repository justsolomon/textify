import React from 'react';

function Footer() {
  return (
    <footer className='text-center'>
      <span>
        Made by{' '}
        <a
          href='https://www.github.com/justsolomon'
          target='_blank'
          title='Gbolahan Balogun'
          rel='noreferrer'
        >
          Solomon.
        </a>
      </span>
      <span>
        {' '}
        Icon made by{' '}
        <a
          href='https://www.flaticon.com/authors/dinosoftlabs'
          target='_blank'
          title='DinosoftLabs'
          rel='noreferrer'
        >
          DinosoftLabs
        </a>{' '}
        from{' '}
        <a
          href='https://www.flaticon.com/'
          target='_blank'
          title='Flaticon'
          rel='noreferrer'
        >
          www.flaticon.com
        </a>
      </span>
    </footer>
  );
}

export default Footer;
