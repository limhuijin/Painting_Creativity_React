import styled from "styled-components";
import { color } from "../theme";
import PropTypes from "prop-types";

const Style = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 35px;
  background-color: #99f5e8;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #21dbc1;
    transform: scale(1.05);
  }

  img {
    height: 1.5em;
  }

  h1 {
    font-size: 1.5em;
  }
`;


const Button = (props) => {
  return (
    <Style style={{gap: (props.image ? "1em" : "0")}}>
      <img src={props.image} />
      <h1>{props.text}</h1>
    </Style>
  );
};
Button.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
