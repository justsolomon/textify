import React from 'react';
import { navigate } from 'gatsby';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import useStorage from './useStorage';
import ConfirmDelete from '../components/ConfirmDelete';

function useQueryActions() {
  const [, , , deleteQuery] = useStorage();
  const translateText = (imageText) => {
    navigate(
      encodeURI(
        `https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=${imageText}`
      )
    );
  };

  const copyText = () => {
    let textarea = document.querySelector('.query-details__text');
    textarea.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    textarea.blur();
  };

  const confirmDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDelete
            closeModal={onClose}
            deleteQuery={() => deleteQuery(id)}
          />
        );
      },
    });

    //align confirmation modal to page content
    document
      .querySelector('.react-confirm-alert-overlay')
      .classList.add('container');
  };

  return [translateText, copyText, confirmDelete];
}

export default useQueryActions;
