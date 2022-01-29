import styled from "styled-components";

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
cursor: pointer;
    &:hover{
       color: rgba(255, 255, 255, 0.5);
    }
`;

function Header() {

    return (
        <Nav>
            <Ul>
                <Li>메인</Li>
                <Li>서비스</Li>
                <Li>쇼케이스</Li>
                <Li>소개</Li>
                <Li>문의</Li>
                <Li>예약</Li>
            </Ul>
        </Nav>
    );
}

export default Header;