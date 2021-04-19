import { WeatherCellProps } from "./weatherCell.types";
import {
  Cell,
  WeatherStateIcon,
  TemperatureTitle,
  TemperatureRow,
  Separator,
  TemperatureValue,
  Row,
  RowWithMargin,
  Wrapper,
  DateText,
} from "./weatherCell.styled";
import { parseCelciusToFahrenheit } from "../../utils/parseCelciusToFahrenheit";

export const WeatherCell: React.FC<WeatherCellProps> = ({
  weather_state_abbr,
  weather_state_name,
  max_temp,
  min_temp,
  the_temp,
  wind_speed,
  air_pressure,
  applicable_date,
  temperatureUnit,
  id,
}) => {
  return (
    <Wrapper key={id}>
      <DateText>{applicable_date}</DateText>
      <Cell>
        <Row>
          <p>{weather_state_name}</p>
          <WeatherStateIcon
            src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
          />
        </Row>
        <TemperatureTitle>Temperature:</TemperatureTitle>
        <TemperatureValue>
          {Math.round(
            temperatureUnit === "fahrenheit"
              ? parseCelciusToFahrenheit(the_temp)
              : the_temp
          )}
        </TemperatureValue>
        <TemperatureRow>
          <p>
            {Math.round(
              temperatureUnit === "fahrenheit"
                ? parseCelciusToFahrenheit(max_temp)
                : max_temp
            )}
          </p>
          <Separator>/</Separator>
          <p>
            {Math.round(
              temperatureUnit === "fahrenheit"
                ? parseCelciusToFahrenheit(min_temp)
                : min_temp
            )}
          </p>
        </TemperatureRow>
        <RowWithMargin>
          <p>Wind Speed:</p>
          <p>{Math.floor(wind_speed)} mph</p>
        </RowWithMargin>
        <RowWithMargin>
          <p>Air pressure:</p>
          <p>{Math.floor(air_pressure)} hpa</p>
        </RowWithMargin>
      </Cell>
    </Wrapper>
  );
};
