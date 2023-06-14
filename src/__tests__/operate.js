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

  test("return Can't divide by 0.", () => {
    const result = operate('60', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });
});
