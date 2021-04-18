import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0,0,0, 0.10);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WeahterStateIcon = styled(SVG)`
  width: 50px;
  height: 50px;
`;