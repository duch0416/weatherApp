import { AxiosResponse } from "axios";
import { stringify } from "query-string";

import { api } from "../api";
import { Forecast } from "../models/forecast";
import {
  GetForecastParams,
  GetLocationParams,
} from "../models/getForecastParams";
import { GetForecatRes } from "../response/getForecast.response";
import { GetLocationRes } from "../response/getLocation.response";

export const getLocation = (
  params: GetLocationParams
): Promise<AxiosResponse<GetLocationRes[]>> =>
  api.get(`/location/search/?${stringify(params)}`);

export const getForecast = ({
  woeid,
}: GetForecastParams): Promise<AxiosResponse<GetForecatRes>> => api.get(`/location/${woeid}`);
