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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let elemBody = document.body,
        elemCanvas = document.getElementById('cover-canvas'),
        context = elemCanvas.getContext('2d');
      elemVideo = document.getElementById('video-studiomeal');

      const init = () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        resizeHandler();
        render();
        window.addEventListener('resize', function () {
          requestAnimationFrame(resizeHandler);
        });
        window.addEventListener('scroll', function () {
          requestAnimationFrame(scrollHandler);
        });
        elemPhone = document.createElement('img');
        elemPhone.src = '/images/section06/phone.png';
        elemPhone.addEventListener('load', function () {
          drawCanvas();
        });
      };

      const resizeHandler = () => {
        var i;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        totalScrollHeight = 0;
        pixelDuration = 0.5 * windowHeight;
        for (i = 0; i < keyframes.length; i++) {
          totalScrollHeight += pixelDuration;
        }
        totalScrollHeight += windowHeight;
        elemBody.style.height = totalScrollHeight + 'px';
        elemCanvas.width = canvasWidth = windowWidth * 2;
        elemCanvas.height = canvasHeight = windowHeight * 2;
        elemCanvas.style.width = windowWidth + 'px';
        elemCanvas.style.height = windowHeight + 'px';
      };

      const scrollHandler = () => {
        scrollY = window.pageYOffset;
        if (scrollY < 0 || scrollY > totalScrollHeight - windowHeight) {
          return;
        }
        if (scrollY > pixelDuration + prevDurations) {
          prevDurations += pixelDuration;
          currentKeyframe++;
        } else if (scrollY < prevDurations) {
          currentKeyframe--;
          prevDurations -= pixelDuration;
        }
        relativeScrollY = scrollY - prevDurations;
        render();
      };

      const render = () => {
        var videoScale, triangleMove, rectangleMove;
        if (keyframes[currentKeyframe]) {
          videoScale = calcAnimationValue(keyframes[currentKeyframe].animationValues.videoScale);
          triangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.triangleMove);
          rectangleMove = calcAnimationValue(keyframes[currentKeyframe].animationValues.rectangleMove);
        } else {
          return;
        }
        elemVideo.style.transform = 'scale(' + videoScale + ')';
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (elemPhone) {
          drawCanvas(videoScale, triangleMove, rectangleMove);
        }
      };

      const calcAnimationValue = (values) => {
        return (relativeScrollY / pixelDuration) * (values[1] - values[0]) + values[0];
      };

      const drawCanvas = (videoScale, triangleMove, rectangleMove) => {
        var videoScale = videoScale || 1,
          triangleMove = triangleMove || 0,
          rectangleMove = rectangleMove || 0;
        context.save();
        context.translate(
          (canvasWidth - phoneWidth * videoScale) * 0.5,
          (canvasHeight - phoneHeight * videoScale) * 0.5,
        );
        context.drawImage(elemPhone, 0, 0, phoneWidth * videoScale, phoneHeight * videoScale);
        context.restore();
        context.fillStyle = 'black';
        context.beginPath();
        context.moveTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
        context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 - 150 - triangleMove);
        context.lineTo(canvasWidth * 0.5 + 1500, -triangleMove - 1700);
        context.lineTo(canvasWidth * 0.5 - 1500, -triangleMove - 1700);
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
        context.lineTo(canvasWidth * 0.5, canvasHeight * 0.5 + 150 + triangleMove);
        context.lineTo(canvasWidth * 0.5 + 1500, canvasHeight + triangleMove + 1700);
        context.lineTo(canvasWidth * 0.5 - 1500, canvasHeight + triangleMove + 1700);
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(canvasWidth * 0.5 - 1700 - triangleMove, -1700);
        context.lineTo(canvasWidth * 0.5 - 130 - triangleMove, canvasHeight * 0.5);
        context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, canvasHeight + 1700);
        context.lineTo(canvasWidth * 0.5 - 1700 - triangleMove, -1700);
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(canvasWidth * 0.5 + 1700 + triangleMove, -1700);
        context.lineTo(canvasWidth * 0.5 + 130 + triangleMove, canvasHeight * 0.5);
        context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, canvasHeight + 1700);
        context.lineTo(canvasWidth * 0.5 + 1700 + triangleMove, -1700);
        context.fill();
        context.closePath();
        context.fillRect(0, canvasHeight * 0.5 - 2600 - rectangleMove, canvasWidth, 2000);
        context.fillRect(0, canvasHeight * 0.5 + 600 + rectangleMove, canvasWidth, 2000);
      };
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
