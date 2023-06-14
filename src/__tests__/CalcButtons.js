import { fireEvent, render } from '@testing-library/react';
import CalcButtons from '../components/CalcButtons';

test('renders operator buttons correctly', () => {
  const handleButtonClick = jest.fn();
  const { container, getByText } = render(
    <CalcButtons handleButtonClick={handleButtonClick} />,
  );
  const button = getByText("AC");

  fireEvent.click(button);
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
  expect(container).toMatchSnapshot();
});
