import { AxiosResponse } from "axios";
import { stringify } from "query-string";

import { api } from "../api";
import { Forecast } from "../models/forecast";
import {
  GetForecastParams,
  GetLocationParams,
} from "../models/getForecastParams";
import { GetLocationRes } from "../response/getLocation.response";

export const getLocation = (
  params: GetLocationParams
): Promise<AxiosResponse<GetLocationRes[]>> =>
  api.get(`/location/search/?${stringify(params)}`);

export const getForecast = ({
  woeid,
}: GetForecastParams): Promise<AxiosResponse<{ consolidated_weather: Array<Forecast>; title: string }>> => api.get(`/location/${woeid}`);
