import styled from "styled-components";

import showcaseImg01 from "../img/showcaseImg01.jpg";
import showcaseImg02 from "../img/showcaseImg02.jpg";
import showcaseImg03 from "../img/showcaseImg03.jpg";
import showcaseImg04 from "../img/showcaseImg04.jpg";
import showcaseImg05 from "../img/showcaseImg05.jpg";
import showcaseImg06 from "../img/showcaseImg06.jpg";

const ShowcaseWrap = styled.div`
    width: 100%;
    height: 1000px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const TitleWrap = styled.div`
    text-align: center;
    h1{
    padding-top: 100px;
    font-size: 32px;
    }
    hr{
    margin-top: 20px;
    width: 40px;
    height: 4px;
    background-color: black;
  }
`;
const ContentWrap = styled.div`
    margin-top: 80px;
    width: 1300px;
    height: 650px;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
`;
const ImgWrap = styled.div`
    width: 433px;
    height: 325px;
    &:first-child{
        background-size: cover;
        background-image: url(${showcaseImg01});
    }
    &:nth-child(2){
        background-size: cover;
        background-image: url(${showcaseImg02});
    }
    &:nth-child(3){
        background-size: cover;
        background-image: url(${showcaseImg03});
    }
    &:nth-child(4){
        background-size: cover;
        background-image: url(${showcaseImg04});
    }
    &:nth-child(5){
        background-size: cover;
        background-image: url(${showcaseImg05});
    }
    &:last-child{
        background-size: cover;
        background-image: url(${showcaseImg06});
    }
`;

function Showcase() {

    return (
        <ShowcaseWrap>
            <TitleWrap>
                <h1>SHOWCASE 쇼케이스</h1>
                <hr />
            </TitleWrap>
            <ContentWrap>
                <ImgWrap>
                </ImgWrap>
                <ImgWrap>
                </ImgWrap>
                <ImgWrap>
                </ImgWrap>
                <ImgWrap>
                </ImgWrap>
                <ImgWrap>
                </ImgWrap>
                <ImgWrap>
                </ImgWrap>
            </ContentWrap>
        </ShowcaseWrap>
    );
}

export default Showcase;