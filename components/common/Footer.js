import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="ft">
      <div className="fd-container-fluid">
        <div className="upper">
          <h1>Logo2</h1>
          <ul>
            <li>
              <a href="#">link1</a>
            </li>
            <li>
              <a href="#">개인정보보호</a>
            </li>
            <li>
              <a href="#">문의</a>
            </li>
            <li>
              <a href="#">카카오톡</a>
            </li>
          </ul>
        </div>

        <div className="lower">
          <address>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            <br />
            T. 051-111-1234 C.P. 010-1234-5678
          </address>
          <p>2022 Land1 &copy; copyright all right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
