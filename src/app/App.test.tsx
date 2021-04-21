import React from "react";
import { getLocation } from "../service/services/forecast.requests";

import userEvent from "@testing-library/user-event";
import { forecastArrayMock } from "../mocks/forecast.mock";
import {
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
  queryClient,
} from "../test-utils";
import App from "./App";

jest.mock("../hooks/useCordinates", () => ({
  useCordinates: () => ({
    cords: { lat: 20, lang: 15 },
    succes: "success",
    errorMessage: "",
  }),
}));

afterEach(() => {
  queryClient.clear();
})

test("It displays data after search", async () => {
  const { getByText, getByTestId } = render(<App />);

  const input = screen.getByRole("textbox");
  userEvent.type(input, "london");

  expect(input).toHaveValue("london");
  await waitFor(() =>
    expect(getByTestId("loader-container")).toBeInTheDocument()
  );
  await waitForElementToBeRemoved(getByTestId("loader-container"));

  expect(getByText(forecastArrayMock[0].applicable_date)).toBeInTheDocument();
  expect(getByText(forecastArrayMock[1].applicable_date)).toBeInTheDocument();
  expect(getByText(forecastArrayMock[2].applicable_date)).toBeInTheDocument();
});

test("It throws error when location is wrong", async () => {
  render(<App />);

  const input = screen.getByRole("textbox");
  userEvent.clear(input)
  userEvent.type(
    input,
    "bomb"
  );

  expect(input).toHaveValue("bomb");
  const result = await getLocation({ query: "bomb" }).catch((e) => e);
  expect(result.message).toEqual('Request failed with status code 401')
});
