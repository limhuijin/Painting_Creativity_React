import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 20px 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
    font-size: 1.2em;
  }

  ul a:not(.active):hover {
    color: #007bff;
  }

  ul a.active {
    color: #007bff;
  }

  & > a {
    font-weight: bold;
    font-size: 1.5em;
  }
`;

const Header = () => {
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
    </Style>
  );
};

export default Header;
