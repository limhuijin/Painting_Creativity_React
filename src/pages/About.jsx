import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../theme";
import Button from "../components/Button";

const Style = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 991px) and (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9faf1; /* 배경 색상 */
  border-bottom-right-radius: 300px;
  

  @media (max-width: 991px) and (orientation: portrait) {
    width: 100%;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
  }
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) and (orientation: portrait) {
    width: 100%;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto; 
`;

const TextContainer = styled.div`
  text-align: center;
  
  h2 {
    margin: 20px auto; 
    font-size: 2rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.8em;
    margin: 20px auto;
    border-top: 7px solid #d3d3d3; /* 꾸미기 */
    border-bottom: 7px solid #d3d3d3; 
    max-width: 40%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 5px; 
  }

  strong {
    font-weight: bold;
    font-size: 1.4rem;
  }

  ul, ol {
    list-style-position: inside; /* 중앙정렬되게 */
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    font-size: 1.2rem;
  }

  li::marker {
    color: #21dbc1;
    font-weight: bold;
    font-size: 1.25em;
  }

  @media (max-width: 991px) and (orientation: portrait) {
    text-align: center;

    p, ul {
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 991px) and (orientation: portrait) {
    justify-content: center;
    width: 100%;
  }
`;

const Arrow = styled.div` /* 화살표 */
  font-size: 70px;
  margin: 40px 0px;
  line-height: 0;
  text-align: center;
`;

const LineBreak = styled.div`
  height: 15px;
`;

const About = () => {
  return (
    <Style>
      <LeftContainer>
        <TextContainer>
          <h2>AI 창의력 분석 자동학습 딥러닝</h2>
          <p>어린이 그림 창의성 분석 프로그램에 오신 것을 환영합니다!</p>
          <p>본 프로그램은 아이들의 그림을 통해 창의력을 분석하는 프로그램입니다.</p>
          <p>아이의 그림을 업로드하면, 프로그램이 창의적 사고와 </p>
          <p>예술적 발달에 대한 포괄적인 분석을 제공합니다.</p>
          <Image src="/src/assets/about.jpg" alt="" />
          <h2>프로그램의 장점</h2>
          <ul>
            <li>
              <strong>개인 맞춤형 창의성 인사이트</strong>
              <p>아이의 고유한 창의적 강점과 개선이 필요한 부분을 강조하는 그래프를 제공합니다.</p>
            </li>
            <li>
              <strong>흥미성과 예술적 표현 장려</strong>
              <p>아이들이 그림을 통해 자신을 표현하는 것을 장려하며 창의성 및 상상력을 발전시킵니다.</p>
            </li>
            <li>
              <strong>AI 딥러닝 기반</strong>
              <p>AI 딥러닝 분석을 통해 아이들의 창의성을 평가합니다.</p>
            </li>
          </ul>
          <ButtonContainer>
          <Link to="/get-started" style={{ textDecoration: "none" }}>
            <Button text="시작하기" />
          </Link>
        </ButtonContainer>
        <LineBreak/>
        </TextContainer>        
      </LeftContainer>

      <RightContainer>
        <TextContainer>
          <h3>프로그램 사용 방법</h3>
          <Image src="/src/assets/about2.jpg" alt="" />
          <LineBreak />
          <strong>1. 사진 업로드</strong>
          <p>'이미지 열기' 버튼을 눌러 아이들의 그림을 업로드 해주세요.</p>
          <Arrow>&darr;</Arrow>
          <Image src="/src/assets/about3.jpg" alt="" />
          <LineBreak />
          <strong>2. 분석 시작</strong>
          <p>'분석하기' 버튼을 눌러 창의성을 분석해주세요.</p>
        </TextContainer>
      </RightContainer>
    </Style>
  );
};

export default About;
