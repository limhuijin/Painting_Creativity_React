import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Wave from "../assets/images/wave.svg";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  min-height: calc(100vh - 10rem);
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url("/src/assets/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.35);
    background-blend-mode: lighten;
    z-index: -10;
    filter: blur(3px);
  }

  .waves {
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 40%;
    background-color: #fff;
    opacity: 0.5;
    z-index: -1;
  }

  .waves .wave {
    position: absolute;
    top: -40%;
    left: -100%;
    width: 200%;
    height: 40%;
    -webkit-mask-image: url(${Wave});
    mask-image: url(${Wave});
    mask-repeat: repeat-x;
    mask-position: bottom;
    background-color: #fff;
    mask-size: 25% 85%;
    animation: wave-move 30s linear infinite;
    z-index: -1;
  }

  .waves .wave:nth-child(2) {
    background-color: rgb(240, 255, 240);
    mask-size: 25% 70%;
    animation: wave-move 10s linear infinite;
    z-index: -2;
  }

  .waves .wave:nth-child(3) {
    background-color: rgb(255, 240, 240);
    mask-size: 25% 100%;
    animation: wave-move 20s linear infinite;
    z-index: -3;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 40px;
    align-items: center;
    text-align: center;
  }

  .main-container > h1 {
    font-size: 3em;
    font-weight: 400;
  }

  .main-container p {
    font-size: 1.2em;
  }

  .cards {
    display: flex;
    justify-content: center;
    margin: 0 20px;
    margin-bottom: 40px;
    gap: 2em;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20vw;
    min-width: 200px;
    padding: 40px 10px;
    line-height: 2em;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: relative;
    opacity: 0;
    animation: fadeIn 2s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    text-align: center;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 16px;
    height: 16px;
    background-color: #4eff4e;
    border-radius: 50%;
  }

  .card h1 {
    font-weight: 400;
    margin-top: 10px;
  }

  .card p {
    text-wrap: balance;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn-horizontal {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes wave-move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(50%);
    }
  }

  // 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
    width: 100%;
    height: auto;
    gap: 50px;
    padding: 0 10px;

    .cards {
      gap: 1em;
    }

    .card {
      width: 80vw;
      height: auto;
      animation: fadeIn-horizontal 2s ease;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;

const Home = () => {
  return (
    <Style>
      <div className="waves">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>

      <div></div>
      <div className="main-container">
        <h1>어린이 그림 창의성 분석 사이트에 오신 것을 환영합니다.</h1>
        <p className="description">
          아이들이 그린 그림을 통해 창의성을 분석해보세요!
        </p>
        <Link to="/get-started" style={{ textDecoration: "none" }}>
          <Button text="시작하기" />
        </Link>
      </div>
      <div className="cards">
        <div className="card">
          <h1>AI 딥러닝 기반</h1>
          <p className="description">
            AI 딥러닝을 기반으로 아이들이 그린 그림의 창의성을 분석합니다.
          </p>
        </div>
        <div className="card">
          <h1>흥미와 예술적 표현 장려</h1>
          <p className="description">
            아이들이 그림에 흥미를 갖고 더 자유로운 표현을 할 수 있도록
            장려합니다.
          </p>
        </div>
        <div className="card">
          <h1>맞춤형 창의성 분석</h1>
          <p className="description">
            그림을 통해 창의성을 분석하여 필요한 지원을 제공받을 수 있도록
            돕습니다.
          </p>
        </div>
      </div>
    </Style>
  );
};

export default Home;
