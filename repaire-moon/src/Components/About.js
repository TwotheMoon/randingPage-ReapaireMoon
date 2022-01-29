import styled from "styled-components";

import aboutBgImg from "../img/aboutBgImg.jpg";
import facebookLogo from "../img/facebookLogo.webp";
import pinLogo from "../img/pinLogo.webp";
import instaLogo from "../img/instalogo.webp";

const AboutBg1 = styled.div`
    width: 100%;
    height: 640px;
    position: relative;
    background-image: url(${aboutBgImg});
    z-index: -98;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AboutBg2 = styled.div`
    margin-top: 530px;
    width: 100%;
    height: 1000px;
    position: relative;
    background-image: url(${aboutBgImg});
    z-index: -98;
    background-attachment: fixed;
`;
const ContentWrap = styled.div`
    width: 660px;
    height: 450px;
    background-color: white;
    text-align: center;
    h1{
    padding-top: 70px;
    font-size: 32px;
    }
    hr{
    margin-top: 20px;
    width: 40px;
    height: 4px;
    background-color: black;
  }
  p{
    margin-top: 30px;
    line-height: 1.4;
  }
`;
const Footer = styled.div`
    width: 100%;
    height: 160px;
    background-color: #2F2E2E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  span{
      margin-top: 15px;
      font-size: 13px;
      color: white;
  }
`;
const SnsLogoWrap = styled.div`
    width: 190px;
`;
const SnsLogoImg = styled.img`
  margin: 0px 10px;
  cursor: pointer;
`;

function About() {

    return (
        <>
            <AboutBg1 >
                <ContentWrap>
                    <h1> ABOUT 문의</h1>
                    <hr />
                    <p>
                        저희 MOON & REPAIR 에 찾아와 주셔서 감사합니다. <br />
                        다양한 궁금증과 문의 사항이 생기신다면 <br />
                        아래의 번호로 연락 부탁드립니다.<br />
                        저희 리페어 샵은 오직 일렉기타만 취급합니다. <br />
                        이점 이해해 주시고 연락 주시면 <br />
                        성심 성의껏 안내 도와드리겠습니다. 감사합니다. <br /> <br />
                        Tel : 010-1212-2342

                    </p>
                </ContentWrap>
            </AboutBg1>

            <AboutBg2 />
            <Footer>
                <SnsLogoWrap>
                    <SnsLogoImg src={facebookLogo} />
                    <SnsLogoImg src={pinLogo} />
                    <SnsLogoImg src={instaLogo} />
                </SnsLogoWrap>
                <span>&copy; 제작된 본 홈페이지에 대한 모든 권리는 MOON&REPAIR에 귀속됩니다.</span>
            </Footer>
        </>
    );
}

export default About;