import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import Header from "./Components/Header";
import Service from "./Components/Service";
import Title from "./Components/Title";
import Showcase from "./Components/Showcase";

import bgImg01 from "./img/mainBg01.jpg";
import bgImg02 from "./img/mainBg02.jpg";
import About from "./Components/About";
import { useEffect, useRef, useState } from "react";
import Question from "./Components/Question";
import { boxsClickState, snsOverlayState } from "./atoms";

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
const SnsOverlay = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 97;
`;
const SnsPopUpBox = styled(motion.div)`
   width: 580px;
    height: 250px;
    background-color: white;
    position: fixed;
    z-index: 99;
    margin: 0 auto;
    left:0;
    right:0;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ExitBtn = styled.div`
  color: black;
  position: absolute;
  right: 0;
  top: 0;
`;
const IconsExit = styled.svg`
  margin-top: 25px;
  margin-right: 25px;
  width: 16px;
  height: 20px;
  cursor: pointer;
`;
const IconWrap = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-around;
  `;
const Icons = styled.svg`
    width: 30px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
      fill: rgba(0, 0, 0, 0.5);
    }
    &:nth-child(4){
      width: 18px;
    }
  `;
const InputWrap = styled.div`
  margin-top: 30px;
  width: 280px;
  display: flex;
  svg{
    width: 20px;
    fill: white;
  }
  `;
const CopyInput = styled.input`
  width: 260px;
  height: 40px;
`;
const CopyBtn = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  cursor: pointer;
  &:hover{
    background-color: rgba(0, 0, 0, 0.5);
  }
  `;
const CopyMessage = styled(motion.div)`
  position: absolute;
  
  font-weight: bold;

  `;
const DetailBox = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 60px;
`;
const BtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  `;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `;
const DetailImg = styled.img`
    min-width: 600px;
    min-height: 380px;
    max-width: 1030px;
    max-height: 680px;
    margin-right: 50px;
  `;
const TextWrap = styled.div`
  margin-left: 50px;
  text-align: center;
  font-family: 'GmarketSansMedium';
`;
const DetailTitle = styled.h1`
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 10px;

`;
const DetailText = styled.p``;
const HeartIcon = styled.div`
    margin-left: 30px;
    cursor: pointer;
`;
const Svg = styled.svg`
    stroke: ${(props) => props.clicked ? "red" : "black"};
    fill: ${(props) => props.clicked ? "red" : "white"};
    &:hover{
        stroke: ${(props) => props.clicked ? "red" : "rgba(0, 0, 0, 0.6)"} ;
    }
`;
const ArrowIcon = styled.div`
    margin-left: 30px;
    svg{
        fill: black;
        cursor: pointer;
        &:hover{
            stroke: rgba(0, 0, 0, 0.4);
        }
    }
`;
const HeartNum = styled.div`
  float: right;
  margin-left: 10px;
  transition: 0.3s;
  opacity: ${props => props.heartClicked ? 1 : 0};
`;

function App() {
  const [scrollIndex, setScrollIndex] = useState(1);
  const titleRef = useRef(null);
  const serviceRef = useRef(null);
  const showcaseRef = useRef(null);
  const aboutRef = useRef(null);
  const questionRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const setSnsLayout = useSetRecoilState(snsOverlayState);
  const snsLayout = useRecoilValue(snsOverlayState);
  const [copy, setCopy] = useState(false);
  const [boxLayout, setBoxLayout] = useRecoilState(boxsClickState);
  const copyRef = useRef();
  const [heartClicked, setHeartClicked] = useState(false);
  const onDetailBtnClicked = () => setBoxLayout({ url: "" });
  const onHeartClicked = () => setHeartClicked((prev) => !prev);
  const onArrowClicked = () => setSnsLayout(true);
  const noCopy = () => setCopy(false);
  const copyClick = () => {
    const copyText = copyRef.current;
    copyText.select();
    document.execCommand("copy");
    setCopy(true);
    setTimeout(noCopy, 1000);
  }
  const onClick = () => setSnsLayout(false);
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
  }, [scrollY]);

  return (
    <Section>
      <AnimatePresence>
        {snsLayout ?
          <>
            <SnsOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <SnsPopUpBox
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <ExitBtn>
                <IconsExit onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></IconsExit>
              </ExitBtn>
              <IconWrap>
                <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></Icons>
                <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></Icons>
                <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></Icons>
                <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" /></Icons>
                <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" /></Icons>
              </IconWrap>
              <InputWrap>
                <CopyInput ref={copyRef} readOnly value="https://twothemoon.github.io/repair-moon/" />
                <CopyBtn onClick={copyClick}>
                  {copy ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                      <CopyMessage
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 50 }}
                        exit={{ opacity: 0, x: 50 }}
                      >copy!
                      </CopyMessage>
                    </>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" /></svg>
                  }
                </CopyBtn>
              </InputWrap>
            </SnsPopUpBox>
          </>
          : null
        }
      </AnimatePresence>

      <AnimatePresence>
        {!boxLayout.url == '' ?
          <DetailBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <BtnWrap>
              <HeartIcon>
                <Svg onClick={onHeartClicked} clicked={heartClicked} viewBox="0 0 18 15" width="21" height="21"><path d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z"></path></Svg>
                <HeartNum heartClicked={heartClicked}>1</HeartNum>
              </HeartIcon>
              <ArrowIcon onClick={onArrowClicked}>
                <svg viewBox="0 0 18 17" width="20" height="20">
                  <path d="M12.221 2.361l4.453 4.722-4.453 4.723v-1.7l-.758-.19a9.37 9.37 0 0 0-2.274-.283c-2.936 0-5.684 1.228-7.673 3.211 2.179-8.31 8.905-8.783 9.758-8.783h.947v-1.7zm-.947.756C9.189 3.21.664 4.627 0 17c1.516-3.778 5.116-6.328 9.19-6.328.663 0 1.326.095 2.084.19v3.305L18 7.083 11.274 0v3.117z"></path>
                </svg>
              </ArrowIcon>
              <ExitBtn>
                <IconsExit onClick={onDetailBtnClicked} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></IconsExit>
              </ExitBtn>
            </BtnWrap>
            <ContentWrap>
              <DetailImg src={boxLayout.url}></DetailImg>
              <TextWrap>
                <DetailTitle>{boxLayout.title}</DetailTitle>
                <DetailText>{boxLayout.text}</DetailText>
              </TextWrap>
            </ContentWrap>
          </DetailBox>
          :
          null
        }
      </AnimatePresence>

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
    </Section >
  );
}

export default App;
