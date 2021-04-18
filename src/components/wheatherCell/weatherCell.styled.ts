import styled from "styled-components";
import SVG from "react-inlinesvg";

import { Breakpoint } from "../../enums/breakpoint.enum";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
`;

export const DateText = styled.p`
  margin-bottom: 10px;
`;

export const Cell = styled.div`
  padding: 20px 40px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0,0,0, 0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  @media ${Breakpoint.Tablet} {
    margin-right: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RowWithMargin = styled(Row)`
  margin-top: 10px;
`;

export const Separator = styled.p`
  margin-left: 5px;
  margin-right: 5px;
`;

export const TemperatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TemperatureTitle = styled.p`
  margin-top: 20px;
`

export const TemperatureValue = styled.p`
  margin-top: 10px;
  font-size: 25px;
`;

export const WeatherStateIcon = styled(SVG)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;