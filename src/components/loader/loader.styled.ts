import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const LoaderIcon = styled(SVG)`
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1.5s infinite linear;
  width: 40px;
  height: 40px;
`;