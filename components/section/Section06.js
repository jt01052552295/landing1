import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Section06 = (props) => {
  let elemVideo,
    elemPhone,
    windowWidth = 0,
    windowHeight = 0,
    canvasWidth = 0,
    canvasHeight = 0,
    scrollY = 0,
    relativeScrollY = 0,
    prevDurations = 0,
    totalScrollHeight = 0,
    currentKeyframe = 0,
    phoneWidth = 1380,
    phoneHeight = 3000,
    calcFinalValue,
    pixelDuration = 0,
    keyframes = [
      {
        animationValues: {
          videoScale: [1, 2],
          triangleMove: [0, 200],
          rectangleMove: [0, 500],
        },
      },
      {
        animationValues: {
          videoScale: [2, 0.5],
          triangleMove: [200, 1000],
          rectangleMove: [500, 500],
        },
      },
    ];
  const init = () => {
    console.log('init');
  };

  const resizeHandler = () => {
    console.log('resizeHandler');
  };

  const scrollHandler = () => {
    console.log('scrollHandler');
  };

  const render = () => {
    console.log('render');
  };

  const calcAnimationValue = () => {
    console.log('calcAnimationValue');
  };

  const drawCanvas = () => {
    console.log('drawCanvas');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let elemBody = document.body,
        elemCanvas = document.getElementById('cover-canvas'),
        context = elemCanvas.getContext('2d');
      elemVideo = document.getElementById('video-studiomeal');
      init();
    }
  }, []);

  return (
    <section className="st st06">
      <div className="video-wrapper">
        <video
          muted={true}
          playsInline={true}
          autoPlay={true}
          loop={true}
          id="video-studiomeal"
          src="https://images.apple.com/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/overview/primary/hero/large_2x.mp4"
        ></video>
      </div>
      <canvas id="cover-canvas"></canvas>
    </section>
  );
};

Section06.propTypes = {};

export default Section06;
