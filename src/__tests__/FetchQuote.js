import { render } from '@testing-library/react';
import FetchQuote from '../components/FetchQuote';

test('renders FetchQuote correctly', () => {
  const { container } = render(<FetchQuote />);
  expect(container).toMatchSnapshot();
});
