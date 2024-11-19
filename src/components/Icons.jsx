import styled from "styled-components";
import GithubIcon from "../assets/images/github.svg";
import TstoryIcon from "../assets/images/t_story.svg";

const Style = styled.div`
  opacity: 0.6;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

export const GithubButton = () => {
  return (
    <Style>
      <a
        href="https://github.com/limhuijin/Painting_Creativity_React"
        target="_blank"
      >
        <img src={GithubIcon} alt="github" />
      </a>
    </Style>
  );
};

export const TStory = () => {
  return (
    <Style>
      <a href="https://gabriel227.tistory.com/m/49" target="_blank">
        <img src={TstoryIcon} alt="t_story" />
      </a>
    </Style>
  );
};
