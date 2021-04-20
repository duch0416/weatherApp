import { rest, RestHandler, ResponseComposition } from "msw";
import { forecastArrayMock } from "./mocks/forecast.mock";
import { GetForecatRes } from "./service/response/getForecast.response";

import { GetLocationRes } from "./service/response/getLocation.response";

const handlers: RestHandler[] = [
  rest.get(
    `https://www.metaweather.com/api/location/search`,
    async (req, res: ResponseComposition<GetLocationRes[]>, ctx) => {
      return res(
        ctx.json([{
          title: "string",
          location_type: "string",
          woeid: 2341241,
          latt_long: "string",
        }])
      );
    }
  ),
  rest.get(
    "https://www.metaweather.com/api/location/:id",
    async (_, res: ResponseComposition<GetForecatRes>, ctx) => {
      return res(
        ctx.json({ consolidated_weather: forecastArrayMock, title: "Berlin" })
      );
    }
  ),
];

export { handlers };
