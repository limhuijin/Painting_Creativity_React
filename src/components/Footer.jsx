import styled from "styled-components";
import { GithubButton, TStory } from "./Icons";
import { color } from "../theme";

const Style = styled.footer`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;

  .top-container {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 20px;
  }

  .top-container a img {
    height: 40px;
  }

  .hr {
    width: 100%;
    height: 3px;
    background-color: #dbdbdb;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-container {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .left-container h2 {
    color: ${color.lightGray}
  }

  h2 {
    font-weight: 400;
  }

  p {
    font-size: 1.05em;
    color: ${color.lightGray};
    position: relative;
  }

  .left-container>p: before {
    content: "";
    position: absolute;
    top: -12.5%;
    left: -15%;
    width: 3px;
    height: 125%;
    background-color: #dbdbdb;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    .bottom-container {
      flex-direction: column;
      gap: 20px;
    }

    .left-container {
      flex-direction: column;
      gap: 20px;
    }
  }

  // 가로모드 모바일
  @media (max-width: 991px) and (orientation: landscape) {
    .bottom-container {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <Style>
      <div className="top-container">
        <TStory />
        <GithubButton />
      </div>
      <div className="hr"></div>
      <div className="bottom-container">
        <div className="left-container">
          <h2 className="noto-sans">Creativision</h2>
          <p>프로젝트 gabriel227@naver.com</p>
        </div>
        <p>@2024_Project_Creativision</p>
      </div>
    </Style>
  );
};

export default Footer;
