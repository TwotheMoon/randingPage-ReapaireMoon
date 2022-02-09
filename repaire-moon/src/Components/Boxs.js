import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boxsClickState, snsOverlayState } from "../atoms";

const ImgWrap = styled(motion.div)`
    width: 433px;
    height: 325px;
    position: relative;
    background-size: cover;
    background-image: url(${(props) => props.img});
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
    cursor: pointer;
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
const HeartIcon = styled.div`
    margin-left: 30px;
    cursor: pointer;
    z-index: 99;
`;
const Svg = styled.svg`
    stroke: ${(props) => props.clicked ? "red" : "white"};
    fill: ${(props) => props.clicked ? "red" : "transpart"};
    &:hover{
        stroke: ${(props) => props.clicked ? "red" : "rgba(255, 255, 255, 0.6)"} ;
    }
`;
const ArrowIcon = styled.div`
    margin-right: 30px;
    svg{
        fill: white;
        cursor: pointer;
        &:hover{
            stroke: rgba(0, 0, 0, 0.4);
        }
    }
`;
const ClickedArea = styled(motion.div)`
    width: 100%;
    height: 260px;
    z-index: 96;
    position: absolute;
    cursor: pointer;
`


function Boxs({ img, infoTitle, infoSub }) {
    const [isHovering, setIsHovering] = useState(false);
    const [heartClicked, setHeartClicked] = useState(false);
    const [boxLayout, setBoxLayout] = useRecoilState(boxsClickState);
    const setSnsLayout = useSetRecoilState(snsOverlayState);
    const onHeartClicked = () => setHeartClicked((prev) => !prev);
    const onArrowClicked = () => setSnsLayout(true);
    const onBoxLayout = () => setBoxLayout({ url: img, title: infoTitle, text: infoSub });

    return (
        <>
            <ImgWrap
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                img={img}
            >
                <Overlay whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <ClickedArea onClick={onBoxLayout} />
                    <AnimatePresence>
                        {isHovering ? (
                            <InfoWrap
                                variants={infoVariants}
                                initial="hide"
                                animate="visible"
                                exit="exit"
                            >
                                <InfoTitle>{infoTitle}</InfoTitle>
                                <InfoSubText>{infoSub}</InfoSubText>
                                <IconWrap>
                                    <HeartIcon>
                                        <Svg onClick={onHeartClicked} clicked={heartClicked} viewBox="0 0 18 15" width="21" height="21"><path d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z"></path></Svg>
                                    </HeartIcon>
                                    <ArrowIcon onClick={onArrowClicked}>
                                        <svg viewBox="0 0 18 17" width="20" height="20">
                                            <path d="M12.221 2.361l4.453 4.722-4.453 4.723v-1.7l-.758-.19a9.37 9.37 0 0 0-2.274-.283c-2.936 0-5.684 1.228-7.673 3.211 2.179-8.31 8.905-8.783 9.758-8.783h.947v-1.7zm-.947.756C9.189 3.21.664 4.627 0 17c1.516-3.778 5.116-6.328 9.19-6.328.663 0 1.326.095 2.084.19v3.305L18 7.083 11.274 0v3.117z"></path>
                                        </svg>
                                    </ArrowIcon>
                                </IconWrap>
                            </InfoWrap>
                        ) : null
                        }
                    </AnimatePresence>
                </Overlay>
            </ImgWrap>

        </>
    );
}

export default Boxs;