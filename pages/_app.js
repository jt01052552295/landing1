import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../css/style.css';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Landing</title>
      <meta property="og:title" content="Landing" />
      <meta name="description" content="desc.." />
      <meta name="og:sdescription" content="desc.." />
      <meta property="og:type" content="website" />
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

export default App;
