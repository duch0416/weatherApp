import { Forecast } from "../../service/models/forecast";
import { TemperatureUnit } from "../../types/temperatureUnit.type";

export interface WeatherCellProps extends Forecast {
  temperatureUnit?: TemperatureUnit;
}