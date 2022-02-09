import { motion } from "framer-motion";
import styled from "styled-components";

import showcaseImg01 from "../img/showcaseImg01.jpg";
import showcaseImg02 from "../img/showcaseImg02.jpg";
import showcaseImg03 from "../img/showcaseImg03.jpg";
import showcaseImg04 from "../img/showcaseImg04.jpg";
import showcaseImg05 from "../img/showcaseImg05.jpg";
import showcaseImg06 from "../img/showcaseImg06.jpg";
import Boxs from "./Boxs";

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
    background-color: black;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
`;


function Showcase() {

    return (
        <ShowcaseWrap>
            <TitleWrap>
                <h1>SHOWCASE 쇼케이스</h1>
                <hr />
            </TitleWrap>
            <ContentWrap>
                <Boxs img={showcaseImg01} infoTitle="오래된 기타도 환영합니다." infoSub="당신의 기타가 일렉기타라면 언제든 찾아와 주세요." />
                <Boxs img={showcaseImg02} infoTitle="기본적인 확인 부터 디테일까지" infoSub="오래된 경력자들이 항시 대기하고 있습니다. " />
                <Boxs img={showcaseImg03} infoTitle="기다리는 시간 지루하지 않게" infoSub="당신을 위한 쉼터가 마련되어 있습니다." />
                <Boxs img={showcaseImg04} infoTitle="앰프로 기타 소리를 들어보세요" infoSub="수리 전 후로 기타 사운드를 위한 앰프가 준비 되어있습니다." />
                <Boxs img={showcaseImg05} infoTitle="당신의 음악이 궁금합니다." infoSub="저희 샵에는 공연을 위한 장소도 마련되어 있습니다." />
                <Boxs img={showcaseImg06} infoTitle="기타 톤 연구를 위한 페달보드" infoSub="기타 사운드 체크를 위한 여러 이펙터가 구비 되어있습니다." />
            </ContentWrap>
        </ShowcaseWrap>
    );
}

export default Showcase;