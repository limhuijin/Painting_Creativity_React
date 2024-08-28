import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Description>그림을 업로드하여 아이들의 창의성을 분석해보세요!</Description>
          <ButtonStyled to="/get-started">실습하러 가기!</ButtonStyled>
        </MainSection>

        <CardSection>
          <Card className="move">
            <CardTitle>장점1</CardTitle>
            <CardDescription>장점1 설명</CardDescription>
          </Card>
          <Card className="move">
            <CardTitle>장점2</CardTitle>
            <CardDescription>장점2 설명</CardDescription>
          </Card>
          <Card className="move">
            <CardTitle>장점3</CardTitle>
            <CardDescription>장점3 설명</CardDescription>
          </Card>
        </CardSection>
      </Container>
    </Style>
  );
};

export default Home;
