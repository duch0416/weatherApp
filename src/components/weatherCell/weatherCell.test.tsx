import { render } from '@testing-library/react';

import { forecastMock } from '../../mocks/forecast.mock';
import { WeatherCell } from './weatherCell.component';
import { WeatherCellProps } from './weatherCell.types';

const props: WeatherCellProps = {
  ...forecastMock
} 

test('It renders with props data', () => {
  const { getByText } = render(<WeatherCell {...props}/>)

  expect(getByText(Math.round(props.max_temp))).toBeInTheDocument();
  expect(getByText(Math.round(props.min_temp))).toBeInTheDocument();
  expect(getByText(Math.round(props.the_temp))).toBeInTheDocument();
  expect(getByText(`${Math.floor(props.air_pressure)} hpa`)).toBeInTheDocument();
  expect(getByText(props.weather_state_name)).toBeInTheDocument();
  expect(getByText(props.applicable_date)).toBeInTheDocument();
})

test('It renders with propet temperature unit', () => {
  const { getByText, rerender } = render(<WeatherCell {...props}/>)

  expect(getByText(Math.round(props.max_temp))).toBeInTheDocument();
  expect(getByText(Math.round(props.min_temp))).toBeInTheDocument();
  expect(getByText(Math.round(props.the_temp))).toBeInTheDocument();

  rerender(<WeatherCell {...props} temperatureUnit='fahrenheit'/>)

  expect(getByText(Math.round(props.max_temp + 273))).toBeInTheDocument();
  expect(getByText(Math.round(props.min_temp + 273))).toBeInTheDocument();
  expect(getByText(Math.round(props.the_temp + 273))).toBeInTheDocument();
})