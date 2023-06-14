import operate from '../logic/operate';

describe('Operate function test', () => {
  test('Performs addition correctly ', () => {
    const result = operate('3', '4', '+');
    expect(result).toMatchSnapshot();
  });
  test('Performs multiplication correctly ', () => {
    const result = operate('3', '4', 'x');
    expect(result).toMatchSnapshot();
  });
  test('Performs substraction correctly ', () => {
    const result = operate('3', '4', '-');
    expect(result).toMatchSnapshot();
  });
  test('Performs division correctly ', () => {
    const result = operate('3', '4', '÷');
    expect(result).toMatchSnapshot();
  });
});
