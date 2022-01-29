import styled from "styled-components";
import { useViewportScroll } from "framer-motion";

import Header from "./Components/Header";
import Service from "./Components/Service";
import Title from "./Components/Title";
import Showcase from "./Components/Showcase";

import bgImg01 from "./img/mainBg01.jpg";
import bgImg02 from "./img/mainBg02.jpg";
import About from "./Components/About";
import { useEffect, useRef, useState } from "react";
import Question from "./Components/Question";

const Section = styled.div`
  position: relative;
  height: 100vh;
`;
const BgImg1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  opacity: 0.7;
  z-index: -99;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${bgImg01});
  background-attachment: fixed;
  background-position: center center;
`;
const BgImg2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  opacity: 0.7;
  z-index: -99;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${bgImg02});
  background-attachment: fixed;
  background-position: center center;
`;
const RefWrap = styled.div`
  position: relative;
  z-index: -99;
`;

function App() {
  const [scrollIndex, setScrollIndex] = useState(1);
  const titleRef = useRef(null);
  const serviceRef = useRef(null);
  const showcaseRef = useRef(null);
  const aboutRef = useRef(null);
  const questionRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const onTitleClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(1);
  }
  const onServiceClick = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(2);
  }
  const onShowcaseClick = () => {
    showcaseRef.current.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(3);
  }
  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(4);
  }
  const onQuestionClick = () => {
    questionRef.current.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(5);
  }
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() <= 900) {
        setScrollIndex(1);
      } else if (scrollY.get() >= 901 && scrollY.get() <= 1500) {
        setScrollIndex(2);
      } else if (scrollY.get() >= 1501 && scrollY.get() <= 2400) {
        setScrollIndex(3);
      } else if (scrollY.get() >= 2401 && scrollY.get() <= 3700) {
        setScrollIndex(4);
      } else {
        setScrollIndex(5);
      }
    })
  }, [])
  return (
    <Section>
      <Header onNavClick={{ onTitleClick, onServiceClick, onShowcaseClick, onAboutClick, onQuestionClick, }} scrollIndex={scrollIndex} />
      <BgImg1 />
      <RefWrap ref={titleRef}>
        <Title />
      </RefWrap>
      <RefWrap ref={serviceRef}>
        <Service />
      </RefWrap>
      <RefWrap ref={showcaseRef}>
        <Showcase />
      </RefWrap>
      <RefWrap ref={aboutRef}>
        <About />
      </RefWrap>
      <BgImg2 />
      <RefWrap ref={questionRef}>
        <Question />
      </RefWrap>
    </Section>
  );
}

export default App;
