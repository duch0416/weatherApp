import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LocationName = styled.p`
  margin-top: 20px;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(50,50,50,0.15);
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