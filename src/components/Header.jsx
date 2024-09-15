import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../theme";

const Style = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .logo img {
    width: 60px;
    height: 60px;
  }

  ul,
  ul li,
  ul li a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  ul {
    gap: 60px;
    z-index: 1000;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    position: relative;
  }
    
  a h2 {
    font-weight: 400;
  }

  a:before {
    content: "";
    position: absolute;
    width: 0;
    height: 8px;
    bottom: 0;
    left: 50%;
    background-color: ${color.green};
    transition: 0.3s ease;
  }

  a.active:before {
    width: 125%;
    left: -12.5%;
  }

  ul a:hover {
    color: ${color.green};
  }

  .menu {
    display: none;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    ul {
      position: absolute;
      display: none;
      flex-direction: column;
      gap: 5px;
      top: 70px;
      left: 0;
      width: 100%;
      height: auto;
      padding: 10px 20px;
      padding-bottom: 20px;
      background-color: white;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      border-top: 3px solid #dbdbdb;
    }

    ul li,
    ul li a {
      height: 4em;
    }

    ul.open {
      display: flex;
    }

    .menu {
      display: flex;
    }
  }
`;

const Menu = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.2);

  .bar-1,
  .bar-2,
  .bar-3 {
    position: absolute;
    width: 70%;
    height: 3px;
    top: calc(50% - 1.5px);
    left: 15%;
    background-color: black;
    border-radius: 10px;
    transition: 0.3s ease-out;
  }

  .bar-1 {
    transform: translateY(-8px);
  }

  .bar-3 {
    transform: translateY(8px);
  }

  &.open .bar-1,
  &.open .bar-2,
  &.open .bar-3 {
    background-color: ${color.blue};
  }

  &.open .bar-1 {
    transform: rotate(45deg);
  }

  &.open .bar-2 {
    opacity: 0;
  }

  &.open .bar-3 {
    transform: rotate(-45deg);
  }
`;

const Header = () => {
  // 햄버거 메뉴 열고 닫기
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const ul = document.querySelector("ul");
    menu.classList.toggle("open");
    ul.classList.toggle("open");
  };

  return (
    <Style>
      <Link to="/" className="logo">
        <img src="./src/assets/sample-logo.png" alt="logo" />
        <h1 className="wavve-pado">Creativity</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/about">
            <h2>소개</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/get-started">
            <h2>시작하기</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/developers">
            <h2>개발자</h2>
          </NavLink>
        </li>
      </ul>
      <Menu className="menu" onClick={toggleMenu}>
        <div className="bar-1" />
        <div className="bar-2" />
        <div className="bar-3" />
      </Menu>
    </Style>
  );
};

export default Header;
