import styled from "styled-components";

import facebookLogo from "../img/facebookLogo.webp";
import pinLogo from "../img/pinLogo.webp";
import instaLogo from "../img/instalogo.webp";

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
  cursor: pointer;
`;

function Title() {

    return (
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
    );
}

export default Title;