import styled from "styled-components";

import aboutBgImg from "../img/aboutBgImg.jpg";


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

const Bg1ContentWrap = styled.div`
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
    font-family: 'GmarketSansLight';
    font-weight: bold;
    margin-top: 30px;
    line-height: 1.4;
  }
`;


function About() {

    return (
        <>
            <AboutBg1 >
                <Bg1ContentWrap>
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
                </Bg1ContentWrap>
            </AboutBg1>
        </>
    );
}

export default About;