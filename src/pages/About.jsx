import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { color } from "../theme";

const Style = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 200px 0 100px 0;
  margin-bottom: 100px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    border-bottom-right-radius: 27%;
    background-color: #e3ffee;
    z-index: -10;
  }

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1) inset;
    position: absolute;
    z-index: -5;
  }
  .circle:nth-child(1) {
    top: 180px;
    left: 15%;
    width: 100px;
    height: 100px;
  }
  .circle:nth-child(2) {
    top: 195px;
    left: 12.5%;
    width: 40px;
    height: 40px;
  }
  .circle:nth-child(3) {
    top: 140px;
    left: 18%;
    width: 30px;
    height: 30px;
  }
  .circle:nth-child(4) {
    top: 160px;
    left: 21%;
    width: 20px;
    height: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    line-height: 1.5;
    text-align: center;
    gap: 10px;
  }

  .container.left {
    align-items: start;
    text-align: left;
    padding-left: 10%;
  }
  .container.right {
    gap: 40px;
  }

  img {
    width: 25vw;
    margin: 20px 0;
    border-radius: 20px;
    border: 3px solid ${color.lightGray};
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-weight: bold;
  }

  p {
    color: ${color.lightGray};
  }

  a {
    margin-top: 100px;
    align-self: center;
    text-decoration: none;
  }

  .right > h1 {
    position: relative;
  }

  .right > h1 span {
    position: absolute;
    width: 140%;
    height: 5px;
    top: -20%;
    left: -20%;
    background-color: ${color.lightGray};
    border-radius: 50px;
  }

  .right > h1 span:nth-child(2) {
    top: auto;
    bottom: -20%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .image-wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
    position: relative;
  }

  .image-wrapper:before {
    content: "1.";
    position: absolute;
    top: 40px;
    left: 0;
    width: 7%;
    height: auto;
    padding: 0 10px;
    text-align: right;
    font-size: 1.2em;
    font-weight: 400;
    color: white;
    background-color: #444;
  }

  .image-wrapper:nth-child(3):before {
    content: "2.";
  }

  #arrow {
    font-weight: bold;
    font-size: 3em;
    align-self: center;
  }
`;

const About = () => {
  return (
    <Style>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
      <div className="container left">
        <h1 className="wavve-pado">아이들의 그림을 통한 창의력 분석 모델</h1>
        <p>아이들의 그림을 업로드하고 창의력을 평가해보세요!</p>
        <img src="./src/assets/about3.jpg" />
        <h1 className="wavve-pado">프로그램 장점을 말하다..</h1>
        <p>
          아이들은 사람, 동물, 식물, 음식, 로봇, 건물 등 다양한 것들에 관심을
          가지고 다양한 관심사의 그림을 그립니다. 또한 아이들은 성장해가며
          그림의 주제와 색, 스토리 등이 다채롭게 변하게 됩니다. 그렇다면 이런
          그림들을 통해 아이들의 그림 숙련도를 평가할 수 있지 않을까요? <br />
          <br />
          Creativision는 이러한 생각에서 탄생하였습니다. <br />
          AI가 어린이의 그림을
          통해 섬세함, 스토리텔링 능력, 객체의 다양성, 공간 활용, 표현력 총
          5개의 항목을 수치화해줍니다.
        </p>
        <Link to="/get-started">
          <Button text="시작하기" />
        </Link>
      </div>
      <div className="container right">
        <h1 className="wavve-pado">
          <span></span>
          프로그램 사용 방법
          <span></span>
        </h1>
        <div className="wrapper">
          <div className="image-wrapper">
            <img src="./src/assets/about3.jpg" />
            <div className="text-wrapper">
              <h2 className="wavve-pado">1. 사진 업로드</h2>
              <p>ex&#41; PNG, JPEG, JPG ...</p>
            </div>
          </div>
          <h1 id="arrow">⬇</h1>
          <div className="image-wrapper">
            <img src="./src/assets/about3.jpg" />
            <h2 className="wavve-pado">2. 분석 시작</h2>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default About;
