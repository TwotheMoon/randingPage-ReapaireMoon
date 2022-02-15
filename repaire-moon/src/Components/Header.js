import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const Nav = styled.div`
width: 100%;
height: 60px;
position: fixed;
color: white;
background-color:#2F2E2E;
display: flex;
justify-content: center;
z-index: 99;
`;
const Ul = styled.ul`
width: 650px;
height: inherit;
display: flex ;
align-items: center;
justify-content: space-between;
`;

const Li = styled.li`
font-size: 14px;
transition: 0.5s;
position: relative;
color: ${(props) => props.num === props.scrollIndex ? "rgba(255, 255, 255, 0.5)" : "white"};
user-select: none;
cursor: pointer;
    &:hover{
    color: rgba(255, 255, 255, 0.5);
}
    &:last-child{
        color: white;
        &:hover{
            color: rgba(255, 255, 255, 0.5);
        }
    }
`;
const Circle = styled(motion.div)`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: -10px;
    `;

function Header({ onNavClick, scrollIndex }) {

    return (
        <Nav>
            <Ul>
                <Li onClick={onNavClick.onTitleClick} scrollIndex={scrollIndex} num={1}>메인
                    {scrollIndex === 1 &&
                        <Circle layoutId="circle"></Circle>
                    }
                </Li>
                <Li onClick={onNavClick.onServiceClick} scrollIndex={scrollIndex} num={2}>서비스
                    {scrollIndex === 2 &&
                        <Circle layoutId="circle"></Circle>
                    }
                </Li>
                <Li onClick={onNavClick.onShowcaseClick} scrollIndex={scrollIndex} num={3}>쇼케이스
                    {scrollIndex === 3 &&
                        <Circle layoutId="circle"></Circle>
                    }
                </Li>
                <Li onClick={onNavClick.onAboutClick} scrollIndex={scrollIndex} num={4}>소개
                    {scrollIndex === 4 &&
                        <Circle layoutId="circle"></Circle>
                    }
                </Li>
                <Li onClick={onNavClick.onQuestionClick} scrollIndex={scrollIndex} num={5}>문의
                    {scrollIndex === 5 &&
                        <Circle layoutId="circle"></Circle>
                    }
                </Li>
            </Ul>
        </Nav >
    );
}

export default Header;