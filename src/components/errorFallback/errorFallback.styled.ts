import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
  border: 1px solid black;
  background-color: white;
  padding: 40px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResetButton = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  outline: none;
  border: 1px solid black;
`;

export const ErrorIcon = styled(SVG)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;
