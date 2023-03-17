// import styled from "styled-components";
import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  z-index: 2;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  text-align: center;
  background-color: #e81c2e;
  color: #ffffff;
  font-family: "Hind Madurai", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 22px 36.5px;
  border-radius: 0;
  margin-left: 10px;

  &:hover {
    background-color: #ffffff;
    color: #e81c2e;
    border: 1px solid #e81c2e;
  }
`;

export const colors = {
  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};

export default StyledButton;
