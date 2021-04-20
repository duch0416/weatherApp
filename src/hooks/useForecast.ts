import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { QueryKeys } from "../enums/queryKeys.enum";
import {
  getForecast,
  getLocation,
} from "../service/services/forecast.requests";
import { getGeolocation } from "../utils/getGeolocation";

export const useForecast = (location?: string) => {
  const [cords, setCords] = useState({} as GeolocationCoordinates)
  const [loading, setIsloading] = useState(false);
  const getCords = (position: GeolocationPosition) => {
    setCords(position.coords);
  };

  useEffect(() => {
    if(cords.latitude) return
    setIsloading(true)
    getGeolocation(getCords)
  }, [cords.latitude])

  console.log(loading);

  const query = useQuery(
    [QueryKeys.Forecast, location],
    async () => {
      const res = await getLocation({
        query: location,
        lattlong: !location && cords.latitude ? `${cords.latitude},${cords.longitude}` : "",
      });

      if(!res.data[0]?.woeid) {
        throw new Error('No data for provided location')
      }

      const result = await getForecast({ woeid: res.data[0].woeid });
      setIsloading(false);
      return result;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!cords.latitude || !!location,
      staleTime: 1000 * 60 * 60,
      retry: 1,
    }
  );

  return { ...query, loadingCordinates: loading };
};
