import styled from "styled-components";

const Style = styled.div`
  cursor: pointer;
`;

const GithubButton = () => {
  return (
    <Style>
      <a
        href="https://github.com/limhuijin/Painting_Creativity_React"
        target="_blank"
      >
        <img src="../src/assets/github.svg" alt="github" height="40px" />
      </a>
    </Style>
  );
};

export default GithubButton;
