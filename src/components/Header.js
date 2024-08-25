import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // styled-components 임포트

// styled-components로 스타일 정의
const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  margin-right: 15px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImage src="/logo.jpg" alt="" />
        </Link>
      </LogoContainer>

      <Nav>
        <ul>
          <li><Link to="/Manual">소개</Link></li>
          <li><Link to="/GetStarted">실습하기</Link></li>
          <li><Link to="/Developer">개발자 소개</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
