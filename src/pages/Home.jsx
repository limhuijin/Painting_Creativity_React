import styled from "styled-components";

const Style = styled.div`
  text-align: center;
  line-height: 2;
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
      <h1>창의성 분석 프로그램</h1>
      <p>아이들의 그림을 통해 창의성을 분석하는 프로그램입니다.</p>
    </Style>
  );
};

export default Home;
