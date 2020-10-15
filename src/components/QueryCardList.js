import React from 'react';
import QueryCard from './QueryCard';

function QueryCardList({ allQueries }) {
  return (
    <div className='query-list row'>
      {allQueries.map((query, i) => {
        return <QueryCard query={query} key={i} />;
      })}
    </div>
  );
}

export default QueryCardList;
