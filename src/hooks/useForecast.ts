import { useQuery } from "react-query";

import { QueryKeys } from "../enums/queryKeys.enum";
import {
  getForecast,
  getLocation,
} from "../service/services/forecast.requests";
import { Cordinates } from "../types/cordinates.types";

export const useForecast = (location?: string, cords?: Cordinates) => {
  const query = useQuery(
    [QueryKeys.Forecast, location, cords?.lang],
    async () => {
      const res = await getLocation({
        query: location,
        lattlong: !location && cords?.lang ? `${cords.lat},${cords.lang}` : "",
      });

      if(!res.data[0]?.woeid) {
        throw new Error('No data for provided location')
      }

      const result = await getForecast({ woeid: res.data[0].woeid });
      return result;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!cords?.lat || !!location,
      staleTime: 1000 * 60 * 60,
      retry: 1,
    }
  );

  return query;
};
