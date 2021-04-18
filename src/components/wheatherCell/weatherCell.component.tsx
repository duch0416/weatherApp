import { WeatherCellProps } from "./weatherCell.types";

import { Wrapper, WeahterStateIcon } from "./weatherCell.styled";

export const WeatherCell: React.FC<WeatherCellProps> = ({
  weather_state_abbr,
}) => {
  return (
    <Wrapper>
      <WeahterStateIcon
        src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
      />
    </Wrapper>
  );
};
