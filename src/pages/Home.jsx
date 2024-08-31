import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Style = styled.div`
  text-align: center;
  line-height: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-image: url("/src/assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten; // 배경 이미지 혼합 모드 설정(?)
`;

// 메인 섹션
const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

// 제목 텍스트
const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 설명 텍스트
const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

// 버튼
const ButtonStyled = styled(Link)`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

// 카드
const CardSection = styled.section`
  display: flex;
  gap: 20px; // 카드들 사이 간격 설정
  margin-top: 20px; // 위쪽 여백 설정
  padding-bottom: 40px; // 푸터랑 간격 유지
`;

// 각 카드 스타일링
const Card = styled.div`
  background-color: #fff;
  padding: 20px; // 안쪽 여백
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: left;

  opacity: 0; // 처음에 카드를 보이지 않게 설정
  transform: translateY(100%); // 카드가 화면 밖에서 시작
  &.move {
    animation: move_picture 2.5s ease-out forwards; // 애니메이션 속도
  }
`;

// 애니메이션 키프레임 정의
const KeyFrameAnimation = styled.div`
  @keyframes move_picture {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

// 카드 제목 텍스트
const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 카드 설명 텍스트
const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

/*
// 세로모드 모바일
  @media (max-width: 991px) and (orientation: portrait) {
  }

// 가로모드 모바일
  @media (max-width: 991px) and (orientation: landscape) {
  }
*/

const Home = () => {
  return (
    <Style>
      <KeyFrameAnimation />
      <Container>
        <MainSection>
          <Title>아이들 그림 창의성 분석 사이트에 오신걸 환영합니다</Title>
          <Description>
            그림을 업로드하여 아이들의 창의성을 분석해보세요!
          </Description>
          <Link to="/get-started" style={{textDecoration: "none"}}>
            <Button text="시작하기" />
          </Link>
        </MainSection>

        <CardSection>
          <Card className="move">
            <CardTitle>AI 딥러닝 기반</CardTitle>
            <CardDescription>
              AI 딥러닝을 기반으로 아이들 그림의 창의성을 분석합니다.
            </CardDescription>
          </Card>
          <Card className="move">
            <CardTitle>흥미성과 예술적 표현 장려</CardTitle>
            <CardDescription>
              본 프로그램은 그림에 대한 흥미성과 예술적 표현을 장려합니다.
            </CardDescription>
          </Card>
          <Card className="move">
            <CardTitle>개인 맞춤형 창의성</CardTitle>
            <CardDescription>
              본 프로그램은 창의성을 분석하여 필요에 맞춘 지원을 할 수 있도록
              돕습니다.
            </CardDescription>
          </Card>
        </CardSection>
      </Container>
    </Style>
  );
};

export default Home;
