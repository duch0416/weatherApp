import { render } from '@testing-library/react';

import { SearchProps } from './search.types';
import { Search } from './search.component';

const props: SearchProps = {
  setCurrentValue: jest.fn(),
  currentValue: 'hi',
  onSearch: jest.fn(),
}

test('It renders', () => {
  const { getByPlaceholderText } = render(<Search {...props} />)

  const input = getByPlaceholderText('search');
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('hi');
})
