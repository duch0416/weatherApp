import { useForecast } from "../../hooks/useForecast";
import { Loader } from "../loader/loader.compoent";
import { WeatherCell } from "../weatherCell/weatherCell.component";
import { LocationName, Wrapper } from "./forecast.styled";
import { ForecastProps } from "./forecast.types";

export const Forecast: React.FC<ForecastProps> = ({ location, temperatureUnit }) => {
  const { data, isLoading, status, error } = useForecast(location);

  if(status === 'error') {
    throw error
  }

  return (
    <>
      <LocationName>{data && data?.data.title}</LocationName>
      <Wrapper>
        {!data?.data.consolidated_weather && !isLoading && status !== 'idle' && <p>No data</p>}
        {isLoading ? (
          <Loader />
        ) : (
          data?.data.consolidated_weather.slice(0, 3).map(
            (day): JSX.Element => (
                <WeatherCell {...day} key={day.id} temperatureUnit={temperatureUnit}/>
            )
          )
        )}
      </Wrapper>
    </>
  );
};
