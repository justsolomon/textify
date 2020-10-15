import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function QueryButton({ icon, text, action, deleteQuery, disabledState }) {
  return (
    <button
      className={`btn btn-block px-4 py-3 d-flex align-items-center ${
        deleteQuery ? 'btn-danger' : 'btn-primary'
      }`}
      onClick={action}
      disabled={disabledState}
    >
      <FontAwesomeIcon icon={icon} className='mr-3' />
      <span>{text}</span>
    </button>
  );
}

export default QueryButton;
