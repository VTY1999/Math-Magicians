import calculate from '../logic/calculate';

describe('test for caculate function', () => {
  test('next ', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, '47');
    expect(result.next).toEqual('47');
  });
  test('operation', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const result = calculate(obj, 'x');
    expect(result.operation).toEqual('x');
  });
  test('All', () => {
    const obj = {
      total: '5',
      next: null,
      operation: 'x',
    };
    const result = calculate(obj, '7');
    expect(result.total).toEqual('5');
    expect(result.next).toEqual('7');
    expect(result.operation).toEqual('x');
  });
  test('total', () => {
    const obj = {
      total: '5',
      next: '7',
      operation: 'x',
    };
    const result = calculate(obj, '=');
    expect(result.total).toEqual('35');
  });
});
