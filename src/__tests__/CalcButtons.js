import { render } from '@testing-library/react';
import CalcButtons from '../components/CalcButtons';

test('renders operator buttons correctly', () => {
  const handleButtonClick = jest.fn();
  const { container } = render(
    <CalcButtons handleButtonClick={handleButtonClick} />,
  );
  expect(container).toMatchSnapshot();
});
