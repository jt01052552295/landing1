import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AppLayout from '../components/AppLayout';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import Section01 from '../components/section/Section01';
import Section02 from '../components/section/Section02';
import Section03 from '../components/section/Section03';
import Section04 from '../components/section/Section04';

function optimizeAnimation(callback) {
  let ticking = false;

  return () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    }
  };
}
const Main = (props) => {
  useEffect(() => {
    window.addEventListener(
      'scroll',
      optimizeAnimation(() => {
        console.log('Hi there 👋');
      }),
      { passive: true },
    );
  }, []);

  return (
    <AppLayout>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <div className="fd-container-fluid">
        <div className="grid">
          <div className="col-1 col-tablet-12">1</div>
          <div className="col-2 col-pc-12">2</div>
          <div className="col-3">3</div>
          <div className="col-4">4</div>
          <div className="col-5">5</div>
          <div className="col-6">6</div>
          <div className="col-7">7</div>
          <div className="col-8">8</div>
          <div className="col-9">9</div>
          <div className="col-10">10</div>
          <div className="col-11">11</div>
          <div className="col-12">12</div>
        </div>
      </div>
      <Footer />
    </AppLayout>
  );
};

Main.propTypes = {};

export default Main;
