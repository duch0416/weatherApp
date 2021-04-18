import { useForecast } from "../../hooks/useForecast";
import { WeatherCell } from "../wheatherCell/weatherCell.component";
import { Wrapper, P } from "./forecast.styled";
import { ForecastProps } from "./forecast.types";

export const Forecast: React.FC<ForecastProps> = ({ location }) => {
  const { data } = useForecast(location);

  return (
    <Wrapper>
      {data?.map(
        (day): JSX.Element => (
          <WeatherCell {...day.data[0]}/>
        )
      )}
    </Wrapper>
  );
};
