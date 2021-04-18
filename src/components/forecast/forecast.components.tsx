import { useForecast } from "../../hooks/useForecast";
import { Loader } from "../loader/loader.compoent";
import { WeatherCell } from "../wheatherCell/weatherCell.component";
import { Wrapper } from "./forecast.styled";
import { ForecastProps } from "./forecast.types";

export const Forecast: React.FC<ForecastProps> = ({ location }) => {
  const { data, isLoading } = useForecast(location);
  console.log(data)
  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        data?.map(
          (day): JSX.Element => (
            <WeatherCell {...day.data[0]} key={day.data[0].id} />
          )
        )
      )}
    </Wrapper>
  );
};
