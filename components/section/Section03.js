import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const data = [
  {
    title: '01',
    txt: 'Lorem ipsum dolor sit amet.',
    image: '/images/section03/01.jpg',
  },
  {
    title: '02',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section03/02.jpg',
  },
  {
    title: '03',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section03/03.jpg',
  },
  {
    title: '04',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/section03/04.jpg',
  },
];

const Section03 = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setTitle(data[0].title);
    setContent(data[0].txt);
    setImage(data[0].image);
  }, []);

  const openArticle = (param) => {
    setTitle(param.title);
    setContent(param.txt);
    setImage(param.image);
    setActive(true);
  };

  const closeArticle = () => {
    setActive(!isActive);
  };

  return (
    <section className="st st03">
      <div className="fd-container-fluid article-list">
        {data.map((item, key) => {
          return (
            <article key={key} className="article" onClick={(e) => openArticle(item)}>
              <div className="box">
                <div className="con">
                  <h3>{item.title}</h3>
                  <p>{item.txt}</p>
                </div>
                <figure c="thumbnail">
                  <img src={item.image} alt={`image-${key}`} className="img-responsive" />
                </figure>
              </div>
            </article>
          );
        })}
      </div>
      <aside className={`viewArticle ${isActive ? 'on' : ''}`}>
        <div className="box">
          <h3>{title}</h3>
          <p>{content}</p>
          <button type="button" className="closeBtn" onClick={(e) => closeArticle()}>
            CLOSE
          </button>
        </div>
        <figure>
          <img src={image} alt={`image`} className="img-responsive" />
        </figure>
      </aside>
    </section>
  );
};

Section03.propTypes = {};

export default Section03;
