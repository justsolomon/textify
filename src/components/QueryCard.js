import React from 'react';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';
import { navigate } from 'gatsby';

TimeAgo.addDefaultLocale(en);

function QueryCard({ query }) {
  const { imageURL, imageText, id, lastSaved } = query;
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card mb-3' onClick={() => navigate(`/edit/${id}`)}>
        <img
          src={imageURL}
          className='card-img-top mb-0'
          alt='Text illustration'
        />
        <div className='card-body'>
          <p className='card-text image-text mb-1'>{imageText}</p>
          <p className='card-text'>
            <small className='text-muted'>
              Last updated{' '}
              <ReactTimeAgo date={lastSaved} locale='en-US' timeStyle='round' />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QueryCard;
