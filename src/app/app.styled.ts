import styled from "styled-components";
import { Switch } from "../components/switch/switch.component";

import { Breakpoint } from "../enums/breakpoint.enum";
import { Color } from "../enums/color.enum";

export const Main = styled.div`
  background-color: ${Color.VeryLightGrey};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;

  @media ${Breakpoint.Tablet} {
    padding: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const StyledSwitch = styled(Switch)`
  margin-left: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;

  @media ${Breakpoint.Tablet} {
    width: 100%;
  }
`;
