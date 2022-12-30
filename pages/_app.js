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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
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
