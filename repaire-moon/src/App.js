import styled from "styled-components";
import Header from "./Components/Header";
import bgImg01 from "./img/mainBg01.jpg";
import bgImg02 from "./img/mainBg02.jpg";
import facebookLogo from "./img/facebookLogo.webp";
import pinLogo from "./img/pinLogo.webp";
import instaLogo from "./img/instalogo.webp";

const Section = styled.div`
  position: relative;
  height: 200vh;
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
`;
const TitleWrap = styled.div`
  width: 100%;
  top: 10;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 110px;
  h1{
    margin-top: 10px;
    font-size: 40px;
    font-weight: 600;
    font-family: 'Oswald';
  }
  span {
    font-size: 17px;
  }
`;
const LogoCircle = styled.div`
  width: 130px;
  height: 130px;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const LogoLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  position: absolute;
  &:first-child{
    left: 0;
    margin-left: 10px;
    }
  &:nth-child(2){
    right: 0;
    margin-right: 10px;
    }
`;
const Logo = styled.svg`
  width: 80px;
  fill: white;
`
const SnsLogoWrap = styled.div`
margin-top: 500px;
margin-bottom: 60px;
width: 500px;
`;
const SnsLogoImg = styled.img`
  margin: 0px 10px;
`;
const ServiceWrap = styled.div`
  width: 100%;
  height: 650px;
  background-color: #0F0F0F;
  color: white;
  text-align: center;
  .service-title{
    padding-top: 130px;
    font-size: 32px;
  }
  hr{
    margin-top: 20px;
    width: 40px;
    height: 4px;
    background-color: white;
  }
`;
const ContentWrap = styled.div``;
const ServiceIconWrap = styled.div`

  svg{
    margin-top: 50px;
    width: 120px;
    fill: white;
    border: 1px solid red;
  }
`;

function App() {
  return (
    <Section>
      <Header />
      <BgImg1 />
      <TitleWrap>
        <LogoCircle>
          <LogoLine />
          <LogoLine />
          <Logo preserveAspectRatio="xMidYMid meet" data-bbox="26.453 27.436 147.035 145.129" xmlns="http://www.w3.org/2000/svg" viewBox="26.453 27.436 147.035 145.129" role="presentation" aria-hidden="true">
            <g>
              <path d="M63.2 136.9c8.4 8.4 8.4 22.1 0 30.5-2.3 2.3-5.1 4.1-8.2 5.1-.8.3-1.6-.5-1.4-1.3l4.7-16c.1-.5.1-1-.2-1.3-4.6-6.2-12.4-8.5-19.6-5.7-.4.2-.8.5-.9 1L32.9 165c-.2.8-1.3 1-1.9.4-6.6-8.5-6-20.7 1.7-28.5 8.4-8.4 22.1-8.5 30.5 0zm0-73.8c8.4-8.4 8.4-22.1 0-30.5-2.3-2.3-5.1-4.1-8.2-5.1-.8-.3-1.6.5-1.4 1.3l4.7 16c.1.5.1 1-.2 1.3-4.6 6.2-12.4 8.5-19.6 5.7-.4-.2-.8-.5-.9-1L32.9 35c-.2-.8-1.3-1.1-1.9-.4-6.6 8.5-6 20.7 1.7 28.5 8.4 8.4 22.1 8.5 30.5 0zm104 0c7.7-7.7 8.4-20 1.7-28.5-.5-.7-1.6-.5-1.9.4l-4.6 15.9c-.1.5-.5.9-.9 1-7.2 2.8-15 .5-19.6-5.7-.3-.4-.4-.9-.2-1.3l4.7-16c.2-.8-.6-1.6-1.4-1.3-3.1 1.1-5.9 2.9-8.2 5.1-8.4 8.4-8.4 22 0 30.5 8.4 8.4 22.1 8.3 30.4-.1zm-37.8 2.4c1.5 2 3.1 3.5 5.1 5.1l-21.8 21.8 5.1 5.1L138 77.3c3.3-3.3 7.4-5.7 11.8-7-5-.5-9.8-2.6-13.6-6.4-3.8-3.8-5.9-8.7-6.4-13.6-1.3 4.5-3.7 8.5-7 11.8l-20.2 20.2 5.1 5.1 21.7-21.9zm-58.8 69c-1.5-2-3.1-3.5-5.1-5.1l21.8-21.8-5.1-5.1L62 122.7c-3.3 3.3-7.4 5.7-11.8 7 5 .5 9.8 2.6 13.6 6.4 3.8 3.8 5.9 8.7 6.4 13.6 1.3-4.5 3.7-8.5 7-11.8l20.2-20.2-5.1-5.1-21.7 21.9zm96.6 2.4c-8.4-8.4-22-8.4-30.4 0-8.4 8.4-8.4 22.1 0 30.5 2.3 2.3 5.1 4.1 8.2 5.1.8.3 1.6-.5 1.4-1.3l-4.7-16c-.1-.5-.1-1 .2-1.3 4.6-6.2 12.4-8.5 19.6-5.7.4.2.8.5.9 1l4.6 15.9c.2.8 1.3 1 1.9.4 6.7-8.7 6-20.9-1.7-28.6zm-31-.7c-3.8 3.8-5.9 8.7-6.4 13.6-1.3-4.5-3.7-8.5-7-11.8L62.1 77.2c-3.3-3.3-7.4-5.7-11.8-7 5-.5 9.8-2.6 13.6-6.4 3.8-3.8 5.9-8.7 6.4-13.6 1.3 4.5 3.7 8.5 7 11.8l60.7 60.8c3.3 3.3 7.4 5.7 11.8 7-5 .5-9.8 2.6-13.6 6.4zm-1.8-6.8L70.6 65.5c-1.5 2-3.1 3.5-5.1 5.1l63.8 63.9c1.6-2 3.2-3.6 5.1-5.1z"></path>
            </g>
          </Logo>
        </LogoCircle>
        <h1 className="LogoTitle">MOOM & REPAIR</h1>
        <span>일렉기타 수리의 모든 것!</span>
        <SnsLogoWrap>
          <SnsLogoImg src={facebookLogo} />
          <SnsLogoImg src={pinLogo} />
          <SnsLogoImg src={instaLogo} />
        </SnsLogoWrap>
      </TitleWrap>
      <ServiceWrap>
        <h1 className="service-title">SERVICE 서비스</h1>
        <hr />
        <ServiceIconWrap>
          <ContentWrap>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="-459 301 160 160" xmlns="http://www.w3.org/2000/svg" viewBox="-459 301 160 160" role="presentation" aria-hidden="true">
              <g>
                <path d="M-393.6 414.3H-416c-4.6 0-8.3-4.3-8.3-9.5l-.3-36.1c0-5.3 3.6-9.5 8.1-9.5h49.4c2.8 0 5.4 1.7 6.9 4.5h.3c4.5 0 8.1 2.7 8.1 6.1v10.6c0 3.3-3.3 6-7.7 6.1-1.2 3.6-4.2 6.2-7.6 6.2h-18.3v12.1c.1 5.3-3.7 9.5-8.2 9.5zm-22.9-51.8c-2.6 0-4.8 2.8-4.8 6.2l.3 36.1c0 3.4 2.2 6.2 5 6.2h22.3c2.7 0 5-2.8 5-6.2V391c0-.9.7-1.7 1.7-1.7h20c2.2 0 4.1-2 4.6-4.8.1-.8.8-1.4 1.6-1.4h.9c2.8 0 4.7-1.5 4.7-2.8v-10.6c0-1.3-1.9-2.8-4.7-2.8h-1.4c-.7 0-1.3-.4-1.6-1.1-.8-2.1-2.5-3.4-4.3-3.4h-49.3z"></path>
                <path d="M-398.3 405.6h-12.9c-3 0-5.5-2.2-5.5-4.9v-7.4c0-2.7 2.5-4.9 5.5-4.9h12.9c3 0 5.5 2.2 5.5 4.9v7.4c0 2.7-2.5 4.9-5.5 4.9zm-13-13.8c-1.2 0-2.2.7-2.2 1.6v7.4c0 .8 1 1.6 2.2 1.6h12.9c1.2 0 2.2-.7 2.2-1.6v-7.4c0-.8-1-1.6-2.2-1.6h-12.9z"></path>
                <path d="M-398.7 370.8h-12.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h12.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                <path d="M-335.1 400c-.9 0-1.7-.7-1.7-1.7v-49c0-.9.7-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7v49c0 .9-.8 1.7-1.7 1.7z"></path>
                <path d="M-341.1 364.6a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                <path d="M-347.2 358.2a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                <path d="M-336.1 377.4h-15.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h15.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                <path d="M-349.1 392c-.4 0-.8-.1-1.1-.4-.7-.6-.8-1.7-.2-2.4l7-8.3c.6-.7 1.7-.8 2.4-.2.7.6.8 1.7.2 2.4l-7 8.3c-.3.4-.8.6-1.3.6z"></path>
                <path d="M-379 461c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0-156.6c-42.2 0-76.6 34.3-76.6 76.6s34.3 76.6 76.6 76.6c42.2 0 76.6-34.3 76.6-76.6s-34.4-76.6-76.6-76.6z"></path>
              </g>
            </svg>
            <h1>완벽한 정비</h1>
            <p>
              일반 수리부터 <br />
              빈티지 파트 공수까지 <br />
              책입집니다.
            </p>
          </ContentWrap>
        </ServiceIconWrap>
      </ServiceWrap>
      <BgImg2 />

    </Section>
  );
}

export default App;
