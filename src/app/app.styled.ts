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

export const InerfaceContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Breakpoint.Tablet} {
    flex-direction: row;
  }
`;

export const StyledSwitch = styled(Switch)`
  margin-top: 10px;

  @media ${Breakpoint.Tablet} {
    margin-top: 0;
    margin-left: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  
  @media ${Breakpoint.MobileS} {
    width: 350px;
  }

  @media ${Breakpoint.Tablet} {
    width: 100%;
  }
`;
