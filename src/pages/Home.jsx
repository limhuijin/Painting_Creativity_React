import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 10rem);
  padding: 0 40px;
  overflow: hidden;

  background-image: url("/src/assets/background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.35);
  background-blend-mode: lighten;

  .main-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
  }

  .main-container p {
    font-size: 1.2em;
    font-weight: 500;
  }

  /* 일단 주석처리
  .main-container > h1,
  .main-container > p {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  */

  .bottom-container {
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
    padding: 20px;
    line-height: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: relative; /* 카드에 원을 넣기 위해 relative로 설정 */
    opacity: 0;
    animation: fadeIn 2s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    text-align: center;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 8px; 
    left: 8px;
    width: 15px;
    height: 15px;
    background-color: #99f5e8; 
    border-radius: 50%; 
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

  @media (max-width: 768px) {
    gap: 50px;

    .bottom-container {
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
      <div></div>
      <div className="main-container">
        <h1>어린이 그림 창의성 분석 사이트에 오신 것을 환영합니다.</h1>
        <p>아이들이 그린 그림을 통해 창의성을 분석해보세요!</p>
        <Link to="/get-started" style={{ textDecoration: "none" }}>
          <Button text="시작하기" />
        </Link>
      </div>
      <div className="bottom-container">
        <div className="card">
          <h3>AI 딥러닝 기반</h3>
          <p>AI 딥러닝을 기반으로 아이들이 그린 그림의 창의성을 분석합니다.</p>
        </div>
        <div className="card">
          <h3>흥미와 예술적 표현 장려</h3>
          <p>
            아이들이 그림에 흥미를 갖고 더 자유로운 표현을 할 수 있도록
            장려합니다.
          </p>
        </div>
        <div className="card">
          <h3>맞춤형 창의성 분석</h3>
          <p>
            그림을 통해 창의성을 분석하여 필요한 지원을 제공받을 수 있도록
            돕습니다.
          </p>
        </div>
      </div>
    </Style>
  );
};

export default Home;
