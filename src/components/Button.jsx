import styled from "styled-components";
import { color } from "../theme";
import PropTypes from "prop-types";

const Style = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 60px;
  background-color: ${color.green};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  font-size: 1.5em;

  &:hover {
    background-color: ${color.darkGreen};
    transform: scale(1.05);
  }

  img {
    height: 1.5em;
  }
`;

const Button = (props) => {
  return (
    <Style style={{ gap: props.image ? "1em" : "0" }} onClick={props.onClick}>
      {props.image && <img src={props.image} />}
      {props.text}
    </Style>
  );
};
Button.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
