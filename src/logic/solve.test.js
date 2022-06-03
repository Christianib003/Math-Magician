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

  it('Tests modulus operation', () => {
    obj = {
      total: '5',
      next: '2',
      operation: '%',
    };

    const { total } = calculate(obj, '=');
    expect(total).toBe('1');
  });
  it('If button is AC do we return an object', () => {
    expect(calculate(7, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Tests +- button', () => {
    obj = {
      total: '1',
      next: '5',
      operation: '-',
    };

    const { next } = calculate(obj, '+/-');
    expect(next).toBe('-5');
  });
});
