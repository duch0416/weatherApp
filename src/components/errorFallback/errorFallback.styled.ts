import styled from "styled-components";
import SVG from "react-inlinesvg";

import { Color } from "../../enums/color.enum";

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
  border: 1px solid ${Color.Black};
  background-color: ${Color.White};
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
  border: 1px solid ${Color.Black};
`;

export const ErrorIcon = styled(SVG)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;
