import { fireEvent, render, screen } from '@testing-library/react'; 
import { Switch } from './switch.component';

test('It renders proper content depending on activity', () => {
  const { getByText, queryByText } = render(<Switch />);

  const toggleButton = screen.getByRole('button');
  expect(getByText('celsius')).toBeInTheDocument();

  fireEvent.click(toggleButton);
  expect(queryByText('celsius')).not.toBeInTheDocument();
  expect(queryByText('fahrenheit')).toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(queryByText('celsius')).toBeInTheDocument();
  expect(queryByText('fahrenheit')).not.toBeInTheDocument();
})