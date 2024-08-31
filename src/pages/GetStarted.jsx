import styled from "styled-components";
import Button from "../components/Button";

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  gap: 2em;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    gap: 2em;
    padding: 4em 2em;
  }

  .image-container {
    border: 2px solid #888888;
    border-radius: 10px;
  }

  .image-container > img {
    width: 50%;
  }

  .image-container Button {
    border-radius: 50px;
  }

  .analize-container > h1 {
    font-size: 1.5em;
  }

  Button h1 {
    font-size: 1.25em;
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    flex-direction: column;
    gap: 4em;
    padding: 2em 0;

    & > div {
      width: 80%;
    }
  }
`;

const GetStarted = () => {
  return (
    <Style>
      <div className="image-container">
        <img src="../src/assets/sample-image.png" alt="image-icon" />
        <Button text="이미지 열기" image="../src/assets/open-image.png" />
      </div>
      <div className="analize-container">
        <h1>그림 속 창의성 분석하기</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          eligendi vel deleniti, tempore explicabo repellendus ullam veniam
          optio quaerat deserunt architecto, voluptatibus ut tenetur saepe vero
          animi! Facilis, dolorum ex.
        </p>
        <Button text="분석하기" image="../src/assets/chart.png" />
      </div>
    </Style>
  );
};

export default GetStarted;
