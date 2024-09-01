import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../theme";

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 20px 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
    z-index: 1000;
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
    font-size: 1.2em;
  }

  ul a:not(.active):hover {
    color: ${color.blue};
  }

  ul a.active {
    color: ${color.blue};
  }

  & > a {
    font-weight: bold;
    font-size: 1.5em;
  }

  .menu {
    display: none;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    ul:not(.open) {
      display: none;
    }

    ul.open {
      position: absolute;
      top: 4rem;
      left: 0;
      width: 100%;
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      gap: 1.5rem;
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
      <Link to="/">로고</Link>
      <ul>
        <li>
          <NavLink to="/about">소개</NavLink>
        </li>
        <li>
          <NavLink to="/get-started">시작하기</NavLink>
        </li>
        <li>
          <NavLink to="/developers">개발자</NavLink>
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
