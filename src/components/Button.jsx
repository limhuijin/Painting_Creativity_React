import styled from "styled-components";
import { color } from "../theme";
import React, { PropsWithChildren } from "react";

const Style = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 70px;
  background-color: ${color.green};
  border: none;
  border-radius: 50px;
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.4);
  font-family: "BMJUA", sans-serif;
  font-weight: 400;
  font-size: 1.7em;
  gap: ${props => props.$hasIcon ? "10px" : "0"};
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${color.darkGreen};
    transform: scale(1.05);
  }

  img {
    height: 1.5em;
  }
`;

const Button = (props) => {
  const { icon, text, onClick, style, children } = props;

  return (
    <Style $hasIcon={!!icon} onClick={onClick} style={style}>
      {icon && <img src={icon} />}
      {text}
      {children}
    </Style>
  );
};

export default Button;
