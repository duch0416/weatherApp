import { useQuery } from "react-query";

import { QueryKeys } from "../enums/queryKeys.enum";
import {
  getForecast,
  getLocation,
} from "../service/services/forecast.requests";

export const useForecast = (location?: string) => {
  const query = useQuery(
    [QueryKeys.Forecast, location],
    async () => {
      const res = await getLocation({ query: location });
      return await getForecast({ woeid: res.data[0].woeid })
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!location,
    }
  );

  return query;
};
