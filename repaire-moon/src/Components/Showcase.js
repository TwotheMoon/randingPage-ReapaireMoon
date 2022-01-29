import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
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
    background-color: black;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
`;
const ImgWrap = styled(motion.div)`
    width: 433px;
    height: 325px;
    position: relative;
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
const Overlay = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
`;
const InfoWrap = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const InfoTitle = styled(motion.h1)`
    font-family: 'GmarketSansMedium';
    font-size: 23px;
`;
const InfoSubText = styled(motion.p)`
    font-family: 'GmarketSansLight';
    font-size: 15px;
    margin-top: 10px;
`;
const infoVariants = {
    hide: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 20
    }
}
const IconWrap = styled(motion.div)`
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    span{
        margin: 0px 20px;
    }
`;

function Showcase() {
    const [isHovering, setIsHovering] = useState(false);
    console.log(isHovering);
    return (
        <ShowcaseWrap>
            <TitleWrap>
                <h1>SHOWCASE 쇼케이스</h1>
                <hr />
            </TitleWrap>
            <ContentWrap>
                <ImgWrap
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <Overlay whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <AnimatePresence>
                            {isHovering ? (
                                <InfoWrap
                                    variants={infoVariants}
                                    initial="hide"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <InfoTitle >여러 앰프로 소리를</InfoTitle>
                                    <InfoSubText>
                                        당신의 기타가 일렉기타라면 언제든 찾아와 주세요.
                                    </InfoSubText>
                                    <IconWrap>
                                        <motion.span>❤</motion.span>
                                        <motion.span>✔</motion.span>
                                    </IconWrap>
                                </InfoWrap>
                            ) : null
                            }
                        </AnimatePresence>
                    </Overlay>
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