import { Cordinates } from "../../types/cordinates.types";
import { TemperatureUnit } from "../../types/temperatureUnit.type";

export interface ForecastProps {
  temperatureUnit: TemperatureUnit;
  location?: string;
  cords?: Cordinates;
}
