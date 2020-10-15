import React from 'react';

function ConfirmDelete({ closeModal, deleteQuery }) {
  return (
    <div className='custom-ui p-3 shadow-lg rounded bg-white text-center'>
      <h1>Are you sure?</h1>
      <p className='mb-3'>
        Once deleted, you will not be able to recover this query
      </p>
      <div className='d-flex justify-content-between action-buttons'>
        <button onClick={closeModal} className='btn btn-secondary'>
          Cancel
        </button>
        <button
          className='btn btn-danger'
          onClick={() => {
            deleteQuery();
            closeModal();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
