import React from 'react';

function ConvertProgress({ progress }) {
  return (
    <div className='mt-3'>
      <div className='progress'>
        <div
          className='progress-bar progress-bar-striped progress-bar-animated bg-success'
          role='progressbar'
          aria-valuenow={progress.progress}
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: `${progress.progress}%` }}
        >
          {`${progress.progress}%`}
        </div>
      </div>
      <p className='status text-center text-capitalize'>{`${progress.status}...`}</p>
    </div>
  );
}

export default ConvertProgress;
