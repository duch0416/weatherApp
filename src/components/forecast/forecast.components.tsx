import React from "react";

import { useForecast } from "../../hooks/useForecast";
import { Loader } from "../loader/loader.compoent";
import { WeatherCell } from "../weatherCell/weatherCell.component";
import {
  LocationName,
  Overlay,
  Wrapper,
  BouncingLoader,
} from "./forecast.styled";
import { ForecastProps } from "./forecast.types";

export const Forecast: React.FC<ForecastProps> = ({
  location,
  temperatureUnit,
}) => {
  const { data, isLoading, status, error, loadingCordinates } = useForecast(
    location
  );

  if (status === "error") {
    throw error;
  }

  return (
    <>
      {loadingCordinates && (
        <Overlay data-testid='overlay'>
          <BouncingLoader
            src={"https://www.metaweather.com/static/img/weather/t.svg"}
          />
        </Overlay>
      )}
      <LocationName>{data && data?.data.title}</LocationName>
      <Wrapper>
        {!data?.data.consolidated_weather &&
          !isLoading &&
          status !== "idle" && <p>No data</p>}
        {isLoading && !loadingCordinates ? (
          <Loader />
        ) : (
          data?.data.consolidated_weather
            .slice(0, 3)
            .map(
              (day): JSX.Element => (
                <WeatherCell
                  {...day}
                  key={day.id}
                  temperatureUnit={temperatureUnit}
                />
              )
            )
        )}
      </Wrapper>
    </>
  );
};
