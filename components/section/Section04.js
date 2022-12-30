import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const data = [
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet.',
    image: '/images/section04/01.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/02.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/03.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/04.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/05.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/06.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/07.jpg',
  },
  {
    title: 'title',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section04/08.jpg',
  },
];
const Section04 = (props) => {
  const deg = 45;
  const len = data.length - 1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
  const [num, setNum] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(data.length);
  }, []);

  const activation = (act) => {
    if (act === 'next') {
      setNum((c) => c - 1);
      active == len ? setActive(0) : setActive((c) => c + 1);
    } else if (act === 'prev') {
      setNum((c) => c + 1);
      active == 0 ? setActive(len) : setActive((c) => c - 1);
    }
  };

  const anim = (e, act) => {
    let isActive = e.currentTarget.closest('article').classList.contains('on');

    if (isActive && act === 'play') {
      const elements = document.querySelectorAll('article [class*="pic"]');
      elements.forEach((element) => {
        element.classList.remove('on');
      });
      e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
    } else if (isActive && act === 'pause') {
      e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
    } else if (isActive && act === 'load') {
      document.querySelector('article[class*="music0"]').classList.remove('anibox');
      e.currentTarget.closest('article').classList.add('anibox');
    }
  };

  return (
    <section className="st st04 music-list">
      <div className="fd-container-fluid music-box" style={{ transform: `rotate(${deg * num}deg)` }}>
        {data.map((item, key) => {
          let degree = deg * key;
          return (
            <article
              key={key}
              className={`music${key.toString().padStart(2, '0')} ${active === key ? 'on' : ''} `}
              style={{ transform: `rotate(${degree}deg) translateY(-100vh)` }}
            >
              <div className="box">
                <div className="pic">
                  <div className="dot"></div>
                </div>

                <div className="con">
                  <h3>{item.title + key}</h3>
                  <p>{item.txt}</p>
                  <ul>
                    <li className="pause" onClick={(e) => anim(e, 'pause')}>
                      <i className="fas fa-pause"></i>
                    </li>
                    <li className="play" onClick={(e) => anim(e, 'play')}>
                      <i className="fas fa-play"></i>
                    </li>
                    <li className="load" onClick={(e) => anim(e, 'load')}>
                      <i className="fas fa-redo-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <button className="btnPrev" type="button" onClick={(e) => activation('prev')}>
        <span>PREV ARTICLE</span>
      </button>
      <button className="btnNext" type="button" onClick={(e) => activation('next')}>
        <span>NEXT ARTICLE</span>
      </button>
    </section>
  );
};

Section04.propTypes = {};

export default Section04;
