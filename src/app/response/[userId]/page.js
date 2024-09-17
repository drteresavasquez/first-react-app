import React from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';
import { readFacts } from '../../../api/facts';

export default async function ResponsePage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact.text} />
      ))}
    </div>
  );
}

ResponsePage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
