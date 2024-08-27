import styled from "styled-components";

const Style = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
  background-color: #f8f9fa;
  position: relative;
  transform: translateY(-100%);
`;

const Footer = () => {
  return (
    <Style>
      <h4>푸터</h4>
    </Style>
  );
};

export default Footer;
