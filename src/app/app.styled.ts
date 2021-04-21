import styled from "styled-components";
import SVG from 'react-inlinesvg';

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

export const GeolocationError = styled.p`
  margin-top: 20px;
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

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(50,50,50,0.15);
  z-index: 5;
`;

export const BouncingLoader = styled(SVG)`
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1);
    }
  }
  animation: bounce 1.5s infinite linear;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
`;
