import React from 'react';

function AlertMessage({ message }) {
  return (
    <div
      className='alert alert-success fixed-bottom mb-0 rounded-0'
      role='alert'
    >
      {message}
    </div>
  );
}

export default AlertMessage;
