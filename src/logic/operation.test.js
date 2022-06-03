import operate from './operation';

describe('checking if operations work properly', () => {
  test('division', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });
  test('addition', () => {
    const result = operate('6', '2', '+');
    expect(result).toBe('8');
  });
  test('subtraction', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });
  test('multiplication', () => {
    const result = operate('2', '2', 'x');
    expect(result).toBe('4');
  });
  test('test error for Cant divide by 0', () => {
    const result = operate('2', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  test('test % operator leaves modulus of two numbers', () => {
    expect(operate('16', '2', '%')).toEqual('0');
  });
});
