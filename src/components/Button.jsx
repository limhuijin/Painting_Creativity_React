import styled from "styled-components";
import { color } from "../theme";
import PropTypes from "prop-types";

const Style = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${color.blue};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${color.darkBlue};
  }

  img {
    height: 1.5em;
  }

  h1 {
    color: white;
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
