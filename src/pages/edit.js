import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import QueryDetails from '../components/QueryDetails';
import SEO from '../components/SEO';

function Edit() {
  return (
    <Layout>
      <SEO title='Edit Query' />
      {/* <MetaData title='Edit Query | Textify' /> */}
      <Router basepath='/edit'>
        <QueryDetails path='/:id' />
      </Router>
    </Layout>
  );
}

export default Edit;
