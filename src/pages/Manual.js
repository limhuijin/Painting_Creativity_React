import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 공통된 스타일 정의
const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 15px;
  color: #444;

  strong {
    color: #000;
  }

  p {
    margin: 10px 0;
  }
`;

// 각 요소에 대한 스타일 정의
const ManualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;
  max-width: 1200px;
  padding: 20px;
  flex-direction: column;
`;

const ManualContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const ManualImage = styled.div`
  img {
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ManualDescription = styled.div`
  max-width: 800px;
`;

const GetStartedButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// 개별 컴포넌트 정의
const ProgramBenefits = () => (
  <>
    <SectionTitle>프로그램의 장점</SectionTitle>
    <ul>
      <ListItem>
        <strong>개인 맞춤형 창의성 인사이트</strong>
        <p>프로그램은 아이의 고유한 창의적 강점과 개선이 필요한 부분을 강조하는 상세한 개별 보고서를 제공하여 부모와 교사가 아이의 필요에 맞춘 지원을 할 수 있도록 돕습니다.</p>
      </ListItem>
      <ListItem>
        <strong>예술적 표현 장려</strong>
        <p>프로그램은 아이들이 그림을 통해 자신을 표현하는 것을 장려하며, 이를 통해 창의성과 상상력을 더욱 발전시킬 수 있습니다.</p>
      </ListItem>
      <ListItem>
        <strong>AI 딥러닝 분석 기반</strong>
        <p>본 프로그램은 AI 딥러닝 기술을 통해 아이들의 창의성을 신뢰성 있게 평가합니다.</p>
      </ListItem>
    </ul>
  </>
);

const ProgramUsage = () => (
  <>
    <SectionTitle>프로그램 사용 방법</SectionTitle>
    <ul>
      <ListItem>
        <strong>1. 사진 업로드</strong>
        <p>아이들의 그림을 업로드 해주세요.</p>
      </ListItem>
      <ListItem>
        <strong>2. 분석</strong>
        <p>'분석하기' 버튼을 눌러서 창의성을 분석해주세요.</p>
      </ListItem>
    </ul>
  </>
);

const LineBreak = styled.div`
  height: 20px; 
`;

function Manual() {
  return (
    <ManualContainer>
      <ManualContent>
        {/* 이미지 부분 */}
        <ManualImage>
          <img src="/manual.jpg" alt="프로그램 이미지" />
          <GetStartedButton to="/getstarted">실습하기</GetStartedButton>
        </ManualImage>

        {/* 텍스트 설명 부분 */}
        <ManualDescription>
          <SectionTitle>어린이 그림 창의성 분석 프로그램</SectionTitle>
          <Paragraph>
            어린이 그림 창의성 분석 프로그램에 오신 것을 환영합니다! 이 프로그램은 아이들의 그림을 통해
            창의적인 잠재력을 평가하고 육성하는 독특한 도구입니다. 간단히 아이의 그림을 업로드하면,
            프로그램이 창의적 사고와 예술적 발달에 대한 포괄적인 분석을 제공합니다.
          </Paragraph>

          <LineBreak />

          <ProgramBenefits />

          <LineBreak />

          <ProgramUsage />

          <GetStartedButton to="/getstarted">실습하러 가기</GetStartedButton>
        </ManualDescription>
      </ManualContent>
    </ManualContainer>
  );
}

export default Manual;
