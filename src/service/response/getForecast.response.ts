import { Forecast } from "../models/forecast";

export interface GetForecatRes {
  consolidated_weather: Array<Forecast>;
  title: string;
}
