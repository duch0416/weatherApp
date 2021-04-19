import { FallbackProps } from "react-error-boundary";

import { ResetButton, Wrapper, ErrorIcon } from './errorFallback.styled';

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Wrapper>
      <ErrorIcon src='https://www.metaweather.com/static/img/weather/t.svg'/>
      <p>Upss....</p>
      <p>{error.message}</p>
      <ResetButton onClick={resetErrorBoundary}>reset</ResetButton>
    </Wrapper>
  );
};