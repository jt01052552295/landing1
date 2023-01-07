import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
`;

export const GlobalWidth = styled.div`
  max-width: 620px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const GlobalHeader = styled(GlobalWidth)`
  padding: 2rem 0;

  & h1 {
    font-size: 2rem;
    line-height: 1.4;
    text-align: left;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  & p {
    margin: 1.2rem 0;
    line-height: 1.5;
    word-break: keep-all;
  }

  & a {
    text-decoration: underline;
    color: #007bff;
  }
`;

export const ScrollGraphic = styled.div`
  overflow-x: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const GraphicItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  will-change: opacity;

  &.visible {
    opacity: 1;
  }
`;

export const SceneImg = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100vh;
`;

export const ScrollText = styled(GlobalWidth)`
  position: relative;
  padding-bottom: 1px;
`;

export const Step = styled.div`
  margin-bottom: 60vh;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 3px;

  & > p {
    margin: 1.2rem 0;
    line-height: 2;
  }
  & a {
    text-decoration: underline;
    color: #007bff;
  }
`;

export const NormalText = styled(GlobalWidth)`
  padding: 1rem 0;

  & h2 {
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: left;
    padding-top: 1rem;
    font-weight: bold;
  }

  & p {
    margin: 1.2rem 0;
    line-height: 1.5;
    word-break: keep-all;
  }
  & a {
    text-decoration: underline;
    color: #007bff;
  }
`;

export const GlobalFooter = styled.footer`
  padding: 2rem 0;
  text-align: center;
`;

export const StrikeThrough = styled.span`
  text-decoration: line-through;
`;

export const Bird = styled.img`
  position: absolute;
  left: 0;
  bottom: 70%;
  width: 100px;
  transform: translateX(-100%);
  transition: 2.5s 0.5s linear;
`;

export const Bird2 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%);
`;
