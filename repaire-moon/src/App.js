import styled from "styled-components";

import Header from "./Components/Header";
import Service from "./Components/Service";
import Title from "./Components/Title";
import Showcase from "./Components/Showcase";

import bgImg01 from "./img/mainBg01.jpg";
import bgImg02 from "./img/mainBg02.jpg";
import About from "./Components/About";

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
  margin-top: -1700px;
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



function App() {
  return (
    <Section>
      <Header />
      <BgImg1 />
      <Title />
      <Service />
      <Showcase />
      <About />
      <BgImg2 />

    </Section>
  );
}

export default App;
