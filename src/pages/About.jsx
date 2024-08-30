import styled from "styled-components";
import { Link } from "react-router-dom";

const Style = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 40%;
  margin-right: 20px;
  
  img {
    width: 80%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  width: 60%;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    font-size: 1.2rem;
  }
`;

const LineBreak = styled.div`
  height: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const About = () => {
  return (
    <Style>
      <ImageContainer>
        <img src="/src/assets/about.jpg" alt="Program Image" />
        <ButtonContainer>
          <StyledButton to="/get-started">실습하기</StyledButton>
        </ButtonContainer>
      </ImageContainer>
      <TextContainer>
        <h2>어린이 그림 창의성 분석 프로그램</h2>
        <p>
          어린이 그림 창의성 분석 프로그램에 오신 것을 환영합니다! 이 프로그램은 아이들의 그림을 통해 창의적인 잠재력을 평가하고 육성하는 독특한 도구입니다. 간단히 아이의 그림을 업로드하면, 프로그램이 창의적 사고와 예술적 발달에 대한 포괄적인 분석을 제공합니다.
        </p>
        <LineBreak />
        <h3>프로그램의 장점</h3>
        <LineBreak />
        <ul>
          <li>
            <strong>개인 맞춤형 창의성 인사이트</strong>
            <p>프로그램은 아이의 고유한 창의적 강점과 개선이 필요한 부분을 강조하는 상세한 개별 보고서를 제공하여 부모와 교사가 아이의 필요에 맞춘 지원을 할 수 있도록 돕습니다.</p>
          </li>
          <li>
            <strong>흥미성과 예술적 표현 장려</strong>
            <p>프로그램은 아이들이 그림을 통해 자신을 표현하는 것을 장려하며, 이를 통해 그림에 대한 흥미성과 창의성 및 상상력을 더욱 발전시킬 수 있습니다.</p>
          </li>
          <li>
            <strong>AI 딥러닝 기반</strong>
            <p>본 프로그램은 AI 딥러닝 분석을 통해 아이들의 창의성을 신뢰성 있게 평가합니다.</p>
          </li>
        </ul>
        <LineBreak />
        <h3>프로그램 사용 방법</h3>
        <LineBreak />
        <ul>
          <li><strong>1. 사진 업로드</strong><p>아이들의 그림을 업로드 해주세요.</p></li>
          <li><strong>2. 분석</strong><p>'분석하기' 버튼을 눌러서 창의성을 분석해주세요.</p></li>
        </ul>
      </TextContainer>
    </Style>
  );
};

export default About;
