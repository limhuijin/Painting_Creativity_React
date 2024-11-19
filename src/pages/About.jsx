import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { color } from "../theme";
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";

const Style = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 200px 0 100px 0;
  margin-bottom: 100px;
  position: relative;

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

  .container.left:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    border-bottom-right-radius: 20vw;
    background-color: #e3ffee;
    z-index: -10;
  }

  .container.left .circles {
    display: flex;
    position: absolute;
    width: 200px;
    height: 150px;
    top: 10%;
    left: 10%;
  }

  .container.left .circle {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1) inset;
    position: absolute;
    z-index: -5;
  }
  .container.left .circle:nth-child(1) {
    top: 50px;
    left: 50px;
    width: 100px;
    height: 100px;
  }
  .container.left .circle:nth-child(2) {
    top: 60px;
    left: 0;
    width: 40px;
    height: 40px;
  }
  .container.left .circle:nth-child(3) {
    top: 10px;
    left: 110px;
    width: 30px;
    height: 30px;
  }
  .container.left .circle:nth-child(4) {
    top: 30px;
    left: 170px;
    width: 20px;
    height: 20px;
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
    font-size: 2.25em; /* 3차 피드백 - 글씨 크기 수정*/
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
    transform: translateX(-20%);
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
    background-color: #d3d3d3; /* 3차 피드백 - 더 연한 회색 스포이트는 뭐임? */
    border-radius: 50px;
  }

  .right > h1 span:nth-child(2) {
    top: auto;
    bottom: -20%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    transform: translateX(-330%); /* 이미지 기준으로 화살표 중앙 정렬 */
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 200px;

    .container {
      width: 100%;
      padding: 0 30px;
    }

    .container.left {
      align-items: center;
      position: relative;
      padding-left: 30px;
    }

    .container.left .circles {
      top: -70px;
      left: 5%;
    }

    .container.left:before {
      width: 100%;
      height: calc(100% + 300px);
      top: -200px;
    }

    img {
      width: 50vw;
      min-width: 250px;
    }

    a {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding-top: 100px;

    .container.left:before {
      top: -100px;
      height: calc(100% + 200px);
    }

    .right > h1 span {
      width: 120%;
      left: -10%;
    }

    .image-wrapper {
      flex-direction: column;
      gap: 0;
    }

    #arrow {
      transform: none;
    }
  }
`;

const About = () => {
  return (
    <Style>
      <div className="container left">
        <div className="circles">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <h1 className="wavve-pado">아이들의 그림을 통한 창의력 분석 모델</h1>
        <p>아이들의 그림을 업로드하고 창의력을 평가해보세요!</p>
        <img src={About1} />
        <h1 className="wavve-pado">프로그램 장점을 말하다..</h1>
        <p>
          아이들은 사람, 동물, 식물, 음식, 로봇, 건물 등 다양한 것들에 관심을
          가지고 다양한 관심사의 그림을 그립니다. 또한 아이들은 성장해가며
          그림의 주제와 색, 스토리 등이 다채롭게 변하게 됩니다. 그렇다면 이런
          그림들을 통해 아이들의 그림 숙련도를 평가할 수 있지 않을까요? <br />
          <br />
          Creativision는 이러한 생각에서 탄생하였습니다. <br />
          AI가 어린이의 그림을 통해 섬세함, 이야기 전달력, 객체의 다양성, 공간
          활용력, 표현력 총 5개의 항목을 수치화해줍니다.
        </p>
        <Link
          to="/get-started"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
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
            <img src={About2} />
            <div className="text-wrapper">
              <h2 className="wavve-pado">1. 사진 업로드</h2>
              <p>ex&#41; PNG, JPEG, JPG ...</p>
            </div>
          </div>
          <h1 id="arrow">⬇</h1>
          <div className="image-wrapper">
            <img src={About3} />
            <h2 className="wavve-pado">2. 분석 시작</h2>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default About;
