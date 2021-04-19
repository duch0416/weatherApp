export interface GetLocationParams {
  query?: string;
  lattlong?: string;
}

export interface GetForecastParams {
  woeid: number;
  date?: string;
}