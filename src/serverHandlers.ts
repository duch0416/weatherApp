import { rest, RestHandler } from "msw";
import { forecastArrayMock } from "./mocks/forecast.mock";

const handlers: RestHandler[] = [
  rest.get(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search`,
    async (req, res, ctx) => {
      const location = req.url.searchParams.get("query");

      if (location === "bomb") {
        return res(
          ctx.status(401),
          ctx.json({
            message: `error`,
          })
        );
      }

      return res(
        ctx.json([
          {
            title: "string",
            location_type: "string",
            woeid: 2341241,
            latt_long: "string",
          },
        ])
      );
    }
  ),
  rest.get(
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/:id",
    async (req, res, ctx) => {
      return res(
        ctx.json({
          consolidated_weather: forecastArrayMock,
          title: "Berlin",
        })
      );
    }
  ),
];

export { handlers };
