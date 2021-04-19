import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { QueryKeys } from "../enums/queryKeys.enum";
import {
  getForecast,
  getLocation,
} from "../service/services/forecast.requests";
import { getGeolocation } from "../utils/getGeolocation";

export const useForecast = (location?: string) => {
  const [cords, setCords] = useState<GeolocationCoordinates>(
    {} as GeolocationCoordinates
  );

  const getCords = (position: GeolocationPosition) => {
    setCords(position.coords);
  };

  useEffect(() => {
    getGeolocation(getCords);
  }, []);

  const query = useQuery(
    [QueryKeys.Forecast, location, cords.latitude],
    async () => {
      const res = await getLocation({
        query: location,
        lattlong: !location ? `${cords.latitude},${cords.longitude}` : "",
      });

      if(!res.data[0]?.woeid) {
        throw new Error('No data for provided location')
      }

      return await getForecast({ woeid: res.data[0].woeid });
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!cords.latitude || !!location,
      retry: 1,
    }
  );

  return query;
};
