import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="hd">
      <div className="fd-container-fluid inner">
        <h1>
          <a href="#">Logo</a>
        </h1>

        <ul className="gnb">
          <li>
            <a href="#">section1</a>
          </li>
          <li>
            <a href="#">section2</a>
          </li>
          <li>
            <a href="#">section3</a>
          </li>
          <li>
            <a href="#">section4</a>
          </li>
          <li>
            <a href="#">section5</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
