import React from 'react';
import PropTypes from 'prop-types';

const Section01 = (props) => {
  return (
    <section className="st st01">
      <div className="ani-container">
        <article className="sky">
          <img src="/images/section01/sun.png" className="sun" />
          <img src="/images/section01/cloud1.png" className="cloud1" />
          <img src="/images/section01/cloud2.png" className="cloud2" />
        </article>
        <article className="town">
          <img src="/images/section01/town_day.png" className="day" />
          <img src="/images/section01/town_day.png" className="day2" />
          <img src="/images/section01/circle.png" className="circle" />
        </article>
        <article className="people">
          <img src="/images/section01/man.png" className="man" />
        </article>
      </div>
    </section>
  );
};

Section01.propTypes = {};

export default Section01;
