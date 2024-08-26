import React from 'react';
import styled from 'styled-components'; 

// styled-components로 footer 스타일 정의
const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa; /* 원하는 배경색으로 변경 가능 */
  z-index: 1000; /* 푸터가 다른 콘텐츠 위에 나타나게 함 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <span>푸터</span>
      <div>
        {/* 여기에 푸터 내용 추가 */}
      </div>
    </StyledFooter>
  );
}

export default Footer;
