import React, { useEffect, useState } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import useStorage from '../hooks/useStorage';
import QueryButton from './QueryButton';
import useQueryActions from '../hooks/useQueryActions';
import AlertMessage from './AlertMessage';

function QueryDetails({ id }) {
  const [imageText, setImageText] = useState('');
  const [comparisonText, setComparisonText] = useState('');
  const [disabledState, setDisabledState] = useState(true);
  const [alert, setAlert] = useState({ status: false, message: '' });
  const [, fetchQuery, editQuery] = useStorage();
  const [translateText, copyText, confirmDelete] = useQueryActions();

  useEffect(() => {
    fetchQuery(id)
      .then((value) => {
        setImageText(value.imageText);
        setComparisonText(value.imageText);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (comparisonText !== imageText) setDisabledState(false);
    else setDisabledState(true);
  }, [imageText, comparisonText]);

  const displayAlert = (message) => {
    setAlert({ status: true, message });
    setTimeout(() => setAlert({ status: false, message: '' }), 2500);
  };

  return (
    <div className='query-details'>
      <div className='input-group mb-3'>
        <textarea
          className='query-details__text form-control w-100 h-200 border rounded p-3'
          value={imageText}
          onChange={(e) => setImageText(e.target.value)}
        ></textarea>
      </div>
      <div className='query-details__action-buttons'>
        <QueryButton
          icon={faCopy}
          text='Copy text'
          action={() => {
            copyText();
            displayAlert('Text copied to clipboard successfully!');
          }}
        />
        <QueryButton
          icon={faSave}
          text='Save changes'
          disabledState={disabledState}
          action={() => {
            editQuery(id, imageText);
            setComparisonText(imageText);
            displayAlert('Changes saved successfully!');
          }}
        />
        <QueryButton
          icon={faGlobe}
          text='Translate text'
          action={() => translateText(imageText)}
        />
        <QueryButton
          icon={faTrashAlt}
          text='Delete query'
          deleteQuery={true}
          action={() => confirmDelete(id)}
        />
      </div>

      {alert.status && <AlertMessage message={alert.message} />}
    </div>
  );
}

export default QueryDetails;
