import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  GlobalWidth,
  ScrollGraphic,
  GraphicItem,
  SceneImg,
  ScrollText,
  Step,
  GlobalHeader,
  GlobalFooter,
  NormalText,
  StrikeThrough,
  Bird,
  Bird2,
} from './css';

const Bbc01 = (props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stepElems = document.querySelectorAll('.step');
      const graphicElems = document.querySelectorAll('.graphic-item');

      let currentItem = stepElems[0];
      let ioIndex;

      const io = new IntersectionObserver((entries, observer) => {
        ioIndex = parseInt(entries[0].target.dataset.index);
      });

      const actions = {
        birdFlies(key) {
          if (key) {
            document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth - 0}px)`;
          } else {
            document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
          }
        },
        birdFlies2(key) {
          // if (key) {
          //   document.querySelector('[data-index="5"] .bird').style.transform = `translate(-50%, -50%)`;
          // } else {
          //   document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${
          //     -window.innerWidth * 0.7
          //   }px)`;
          // }
        },
      };

      for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
      }

      function active(action) {
        currentItem.classList.add('visible');
        if (action) {
          actions[action](true);
        }
      }

      function inactive(action) {
        currentItem.classList.remove('visible');
        if (action) {
          actions[action](false);
        }
      }

      function onScroll() {
        let step, boundingRect;

        /*
          stepElems.length 전부 다읽어야됨.
          ioIndex 는 현재 활성화된 갯수만 체크해서 속도면에서 유리
        */
        // for (let i = 0; i < stepElems.length; i++) {
        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
          step = stepElems[i];
          if (!step) continue;
          boundingRect = step.getBoundingClientRect();
          if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
            inactive(currentItem.dataset?.action);
            currentItem = graphicElems[step.dataset.index];
            active(currentItem.dataset?.action);
          }
        }
      }
      window.addEventListener('scroll', onScroll);

      window.addEventListener('load', () => {
        setTimeout(() => {
          scrollTo(0, 0);
        }, 100);
      });

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);
  return (
    <Wrapper>
      <header className="header">
        <GlobalHeader>
          <h1 className="page-title">Postion sticky, translate 예제</h1>
          <p>
            sticky에 대한 설명은
            <a href="https://www.w3schools.com/howto/howto_css_sticky_element.asp" target="_blank">
              링크
            </a>{' '}
            를 누르면 볼 수 있음.
            <br />
            <br />
            Scroll Start.
          </p>
        </GlobalHeader>
      </header>
      <section className="scroll-content">
        <ScrollGraphic>
          <GraphicItem className="graphic-item visible">
            <SceneImg src="/images/section04/08.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/01.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item" data-action="birdFlies">
            <Bird className="bird" src="/images/bbc/bird2.gif" alt="" />
            <SceneImg src="/images/section04/02.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/bbc/bird.gif" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/03.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item" data-action="birdFlies2">
            <Bird2 className="bird" src="/images/bbc/bird2.gif" alt="" />
            <SceneImg src="/images/section04/04.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/05.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/06.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/07.jpg" alt="" />
          </GraphicItem>
          <GraphicItem className="graphic-item">
            <SceneImg src="/images/section04/08.jpg" alt="" />
          </GraphicItem>
        </ScrollGraphic>
        <ScrollText>
          <Step className="step">
            <p>
              1. 제품을 소개한다.
              <br />
              <br />
              <a href="https://studiomeal.com" target="_blank">
                링크
              </a>
              를 누르면 새탭으로 제품페이지를 보여준다.
            </p>
          </Step>
          <Step className="step">
            <p>2. 제품을 설명한다.</p>
          </Step>
          <Step className="step">
            <p>2-1. 제품을 설명할때 이해하기 쉽도록 애니메이션 효과를 추가한다.</p>
          </Step>
          <Step className="step">
            <p>2-2. 필요하다면 gif나 video를 이용한다.</p>
          </Step>
          <Step className="step">
            <p>3. 제품후기를 보여준다.</p>
          </Step>
          <Step className="step">
            <p>3-1. 후기는 보통 SNS나 쇼핑몰 리뷰모음을 캡쳐한다.</p>
          </Step>
          <Step className="step">
            <p>3-2. 사용기를 보여주어도 된다.</p>
          </Step>
          <Step className="step">
            <p>
              3-3. 유튜브같은 영상은 링크나 embed로 가능하다.
              <br />
              <a href="https://www.youtube.com" target="_blank">
                유튜브채널
              </a>{' '}
              로 이동하게 하는 방법도 있다.
            </p>
          </Step>
          <Step className="step">
            <p>
              4. 문의신청은 DB, SMS, E-mail 활용이 가능하다. <br />
              <a href="https://business.kakao.com/info/kakaotalkchannel/" target="_blank">
                카카오채널
              </a>{' '}
              같은 외부 링크를 아이콘으로 보여줄 수 있다.
            </p>
          </Step>
          <Step className="step">
            <p>5. 업체를 소개하는 내용과 지도로 업체 위치를 보여준다.</p>
          </Step>
        </ScrollText>
      </section>
      <NormalText>
        <h2>랜딩페이지는</h2>
        <p>광고, 마케팅, 제품홍보 및 판매를 목적으로 활용하기 적합한 페이지입니다.</p>
        <h2>시작이 중요</h2>
        <p>중요한 내용은 처음부터</p>
        <h2>마무리 강조</h2>
        <p>마지막까지 내린 사용자에게 보여줄 수 있는 강력한 한방!</p>
        <h2>최종</h2>
        <p>링크의 개수를 제한, 가독성, 눈에 띄는 CTA (Call To Action) 버튼, SEO최적화</p>
      </NormalText>
      <GlobalFooter>End</GlobalFooter>
    </Wrapper>
  );
};

Bbc01.propTypes = {};

export default Bbc01;
