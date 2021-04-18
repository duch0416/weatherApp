export interface Forecast {
  air_pressure: number;
  applicable_date: string;
  created: Date;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: number;
  wind_speed: number;
}
