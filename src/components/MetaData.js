import React from 'react';
import { Helmet } from 'react-helmet';

function MetaData({ title }) {
  const description =
    'Free online OCR service for converting images, photos and screenshots to text';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content=''></meta>
      <meta property='og:title' content='Textify'></meta>
      <meta property='og:description' content={description}></meta>
      <meta property='og:image' content=''></meta>
      <meta property='twitter:title' content='Textify'></meta>
      <meta property='twitter:description' content={description}></meta>
      <meta property='twitter:image' content=''></meta>
      <meta property='twitter:card' content='summary'></meta>
      <meta property='twitter:creator' content='@gbsolomon1'></meta>
      <meta property='twitter:site' content='@gbsolomon1'></meta>
    </Helmet>
  );
}

export default MetaData;
