import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AppLayout from '../components/AppLayout';

const Main = (props) => {
  return (
    <AppLayout>
      <main>
        <div className="fd_wrap">
          <div className="fd_container type_center">
            <div className="grid-container">
              <div className="grid-item item1">1</div>
              <div className="grid-item">2</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
              <div className="grid-item">5</div>
              <div className="grid-item">6</div>
              <div className="grid-item">7</div>
              <div className="grid-item">8</div>
              <div className="grid-item">9</div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

Main.propTypes = {};

export default Main;
