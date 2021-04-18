import { useQuery } from "react-query";

import { QueryKeys } from "../enums/queryKeys.enum";
import {
  getForecast,
  getLocation,
} from "../service/services/forecast.requests";
import { getFormatedDate } from "../utils/getFormatedDate";

export const useForecast = (location?: string) => {
  const query = useQuery(
    [QueryKeys.Forecast, location],
    async () => {
      const res = await getLocation({ query: location });
      const [today, tommorow, twoDaysLater] = getFormatedDate();
      return await Promise.all([
        getForecast({ woeid: res.data[0].woeid, date: today }),
        getForecast({ woeid: res.data[0].woeid, date: tommorow }),
        getForecast({ woeid: res.data[0].woeid, date: twoDaysLater }),
      ]);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!location,
    }
  );

  return query;
};
