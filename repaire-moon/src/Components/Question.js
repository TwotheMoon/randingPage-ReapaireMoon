import facebookLogo from "../img/facebookLogo.webp";
import pinLogo from "../img/pinLogo.webp";
import instaLogo from "../img/instalogo.webp";
import footerImg from "../img/footerImg.png";
import aboutBgImg from "../img/aboutBgImg.jpg";
import styled from "styled-components";

const QuestionBg = styled.div`
margin-top: 530px;
width: 100%;
height: 1200px;
position: relative;
background-image: url(${aboutBgImg});
z-index: -98;
background-attachment: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    width: 400px;
}
`;

const ContentWrap = styled.div`
    width: 660px;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  span{
    font-family: 'GmarketSansLight';
    font-weight: bold;
  }
`;
const FormWrap = styled.div`
    width: 600px;
    height: 540px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
const Info = styled.div`
`;
const Form = styled.form`
    font-family: 'GmarketSansLight';
    font-weight: bold;
    input {
        width: 280px;
        height: 33px;
        margin-bottom: 10px;
    }
    textarea{
        width: 280px;
        height: 120px;
        resize: none;
    }
    button{
        margin-top: 5px;
        width: 280px;
        height: 30px;
        color: white;
        background-color: black;
        font-size: 16px;
        cursor: pointer;
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

function Question() {

    return (
        <>
            <QuestionBg >
                <img src={footerImg}></img>
                <ContentWrap>
                    <h1>오시는 길</h1>
                    <hr />
                    <FormWrap>
                        <Info>
                            <span>
                                서울특별시 종로구 <br />
                                안국동 00-00, 110-240
                            </span> <br /><br />
                            <span>
                                MoonRepair@gmail.com<br /> <br />
                                010-1212-2342
                            </span> <br /><br /> <br />
                            <span>
                                영업시간: <br /><br />
                                주중:&nbsp;&nbsp;&nbsp; 7am ~ 10pm <br />
                                토요일: 8am ~ 10pm <br />
                                일요일: 8am ~ 11pm <br />
                            </span>
                        </Info>
                        <Form>
                            <label htmlFor="lastName">이름</label> <br />
                            <input id="lastName" type="text" /><br />
                            <label htmlFor="firstName">성</label> <br />
                            <input id="firstName" type="text" /><br />
                            <label htmlFor="email">이메일 *</label> <br />
                            <input id="email" type="text" required /> <br />
                            <label htmlFor="phone">전화번호</label> <br />
                            <input id="phone" type="text" /> <br />
                            <label htmlFor="message">메시지</label> <br />
                            <textarea id="message" /> <br />
                            <button>제출</button>
                        </Form>
                    </FormWrap>
                </ContentWrap>
            </QuestionBg>
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

export default Question;