import React, { useEffect } from 'react';
import Select from 'react-select';
import languages from '../assets/json/languages.json';

function LanguageForm({ setTextLang, textLang }) {
  return (
    <Select
      value={textLang}
      onChange={(selectedLang) => setTextLang(selectedLang)}
      options={languages}
      placeholder='Select language of text'
      isClearable
      classNamePrefix='h-45'
      className='language-select'
    />
  );
}

export default LanguageForm;
