import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import QueryCardList from '../components/QueryCardList';
import localForage from 'localforage';
import useStorage from '../hooks/useStorage';
import SEO from '../components/SEO';

function AllQueries() {
  const [allQueries, setAllQueries] = useState([]);
  const [, , , , getAllQueries] = useStorage();

  useEffect(() => {
    // localForage.clear().then(() => console.log('cleared boss'));
    getAllQueries().then((value) => setAllQueries(value));
  }, []);

  return (
    <Layout>
      <SEO title='All Queries' />
      {allQueries !== null && allQueries.length !== 0 ? (
        <QueryCardList allQueries={allQueries} />
      ) : (
        <p className='text-center'>You do not have any saved queries</p>
      )}
    </Layout>
  );
}

export default AllQueries;
