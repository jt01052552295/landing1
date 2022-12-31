import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Section02 = (props) => {
  const [animState, setAnimState] = useState(false);
  useEffect(() => {}, []);

  return (
    <section className="st st02">
      <section id="circle" style={{ animationPlayState: `${animState ? 'paused' : 'running'}` }}>
        <article className="face1" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Co Company</h1>
          <div className="inner">
            <div>
              <p>
                <i className="fab fa-android"></i>
              </p>
              <h2>Android</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-apple"></i>
              </p>
              <h2>Apple</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-twitter-square"></i>
              </p>
              <h2>Twitter</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-facebook-square"></i>
              </p>
              <h2>Facebook</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-youtube"></i>
              </p>
              <h2>Youtube</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-google-play"></i>
              </p>
              <h2>Google</h2>
            </div>
          </div>
        </article>
        <article className="face2" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>What's New</h1>
          <div className="inner">
            <div>
              <h2>News n Articles</h2>
              <img src="/images/section02/pattern.jpg" />
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard.
                <br />
                dummy text of the printing and typesetting Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </article>
        <article className="face3" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Members</h1>
          <div className="inner">
            <div>
              <div className="pic"></div>
              <div className="con">
                <h2>Member Infomation1</h2>
                <p>Here comes Member Infomation contents in detail. Here comes Member Infomation contents in detail.</p>
                <span>2018-03-05</span>
              </div>
            </div>
            <div>
              <div className="pic"></div>
              <div className="con">
                <h2>Member Infomation2</h2>
                <p>Here comes Member Infomation contents in detail. Here comes Member Infomation contents in detail.</p>
                <span>2018-06-18</span>
              </div>
            </div>
            <div>
              <div className="pic"></div>
              <div className="con">
                <h2>Member Infomation3</h2>
                <p>Here comes Member Infomation contents in detail. Here comes Member Infomation contents in detail.</p>
                <span>2018-07-26</span>
              </div>
            </div>
          </div>
        </article>
        <article className="face4" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Advertisement</h1>
          <div className="inner">
            <div>
              <video src="/images/section02/intro.mp4" loop controls></video>
              <h2>Promotion</h2>
              <p>
                Here comes Promotion contents in detail.Here comes Promotion contents in detail.Here comes Promotion
                contents in detail.
                <br />
                <br />
                Here comes Promotion contents in detail.Here comes Promotion contents in detail.
              </p>
            </div>
            <div>
              <h2>Information</h2>
              <p>Here comes Text dscription</p>
              <em>2018.06.21</em>
            </div>
          </div>
        </article>
        <article className="face5" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>DCODELAB</h1>
          <div className="inner">
            <div>
              <img src="/images/section02/tit.png" />
              <div className="pic"></div>
              <img src="/images/section02/txt.png" />
              <img src="/images/section02/btn.png" />
              <img className="reflection" src="/images/section02/reflect.png" />
            </div>
          </div>
        </article>
        <article className="face6" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Services</h1>
          <div className="inner">
            <div>
              <i className="fas fa-rss"></i>
              <div className="con">
                <h2>Network Services</h2>
                <p>
                  Here comes the contents for Network
                  <br />
                  Show this in Detail
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-code"></i>
              <div className="con">
                <h2>Technical Support</h2>
                <p>
                  Here comes the contents for Network
                  <br />
                  Show this in Detail
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <div className="con">
                <h2>Customer Servieces</h2>
                <p>
                  Here comes the contents for Network
                  <br />
                  Show this in Detail
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-list"></i>
              <div className="con">
                <h2>Contact Lists</h2>
                <p>
                  Here comes the contents for Network
                  <br />
                  Show this in Detail
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="face7" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Promotion</h1>
          <div className="inner">
            <div>
              <div>
                <video src="/images/section02/loop.mp4" loop autoPlay muted></video>
                <h2>
                  Promote Your
                  <br /> Company
                </h2>
                <img src="/images/section02/txt2.png" />
                <img src="/images/section02/line.png" />
              </div>
            </div>
          </div>
        </article>
        <article className="face8" onMouseEnter={() => setAnimState(true)} onMouseLeave={() => setAnimState(false)}>
          <h1>Temperature</h1>
          <div className="inner">
            <div>
              <h2>Weather</h2>
              <i className="fab fa-mixcloud"></i>
              <span>
                26<em>o</em>
              </span>
            </div>
            <div>
              <i className="fas fa-sun"></i>
              <h3>Sunny</h3>
              <p>Afternoon temperature</p>
              <h4>
                23<b>o</b>
              </h4>
            </div>
            <div>
              <i className="fas fa-bolt"></i>
              <h3>Lightning</h3>
              <p>Night temperature</p>
              <h4>
                18<b>o</b>
              </h4>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

Section02.propTypes = {};

export default Section02;
