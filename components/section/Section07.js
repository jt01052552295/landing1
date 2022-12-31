import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box1, Box2, Box3 } from './styled';

const Section07 = (props) => {
  useEffect(() => {}, []);

  return (
    <section className="st st07">
      <div id="container">
        <div className="firstScreen">
          <Box1>First Screen</Box1>
        </div>
        <div className="firstScreen">
          <Box2>Second screen</Box2>
        </div>
        <div className="firstScreen">
          <Box3>Third Screen</Box3>
        </div>
      </div>
    </section>
  );
};

Section07.propTypes = {};

export default Section07;
