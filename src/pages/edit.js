import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import QueryDetails from '../components/QueryDetails';
import MetaData from '../components/MetaData';

function Edit() {
  return (
    <Layout>
      <MetaData title='Edit Query | Textify' />
      <Router basepath='/edit'>
        <QueryDetails path='/:id' />
      </Router>
    </Layout>
  );
}

export default Edit;
