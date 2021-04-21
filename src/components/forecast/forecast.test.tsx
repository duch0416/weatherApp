import { forecastArrayMock } from "../../mocks/forecast.mock";
import { render, waitFor, waitForElementToBeRemoved } from "../../test-utils";
import { Forecast } from "./forecast.components";

test("It displays data after search", async () => {
  const { getByText, getByTestId } = render(<Forecast cords={{ lang: 20, lat: 30 }} temperatureUnit='celsius' />);

  await waitFor(() =>
    expect(getByTestId("loader-container")).toBeInTheDocument()
  );
  await waitForElementToBeRemoved(getByTestId("loader-container"));

  expect(getByText(forecastArrayMock[0].applicable_date)).toBeInTheDocument();
  expect(getByText(forecastArrayMock[1].applicable_date)).toBeInTheDocument();
  expect(getByText(forecastArrayMock[2].applicable_date)).toBeInTheDocument();
});