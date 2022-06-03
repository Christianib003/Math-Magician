import calculate from './solve';

let obj = {
  total: null,
  next: null,
  operation: null,
};

describe('if calculator works properly', () => {
  it('subtraction works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('2');
  });
  it('addition works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '+',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('6');
  });
  it('division works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('2');
  });
  it('multiplication works properly', () => {
    obj = {
      total: '4',
      next: '2',
      operation: 'x',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe('8');
  });
  it('It should return 20. as next if the button name is.', () => {
    obj = {
      total: '20',
      next: '20.',
      operation: '.',
    };
    const { next } = calculate(obj, '.');
    expect(next).toBe('20.');
  });
  it('It should not calculate if the second operand doesnt exist.', () => {
    obj = {
      total: '4',
      next: null,
      operation: '-',
    };
    const { total } = calculate(obj, '=');
    expect(total).toBe(undefined);
  });
});
