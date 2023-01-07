import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import Bbc01 from '../components/bbc/Bbc01';

const Bbc = (props) => {
  return (
    <AppLayout>
      <Bbc01 />
    </AppLayout>
  );
};

Bbc.propTypes = {};

export default Bbc;
