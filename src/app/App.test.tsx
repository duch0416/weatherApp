import React from "react";

import userEvent from "@testing-library/user-event";
import { forecastArrayMock } from "../mocks/forecast.mock";
import { render, waitFor, screen, waitForElementToBeRemoved } from "../test-utils";
import App from "./App";

test('It displays proper data', async () => {
  const { getByText, getByTestId } = render(<App />);

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'h');

  expect(input).toHaveValue('h')
  await waitFor(() => expect(getByTestId('loader-container')).toBeInTheDocument())
  await waitForElementToBeRemoved(getByTestId('loader-container'))

  expect(getByText(forecastArrayMock[0].applicable_date)).toBeInTheDocument()
  expect(getByText(forecastArrayMock[1].applicable_date)).toBeInTheDocument()
  expect(getByText(forecastArrayMock[2].applicable_date)).toBeInTheDocument()
});
