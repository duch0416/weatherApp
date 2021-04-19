import { TemperatureUnit } from "../../types/temperatureUnit.type";

export interface ForecastProps {
  temperatureUnit: TemperatureUnit;
  location?: string;
}
