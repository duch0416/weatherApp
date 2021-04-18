export interface GetLocationParams {
  query?: string;
}

export interface GetForecastParams {
  woeid: number;
  date?: string;
}