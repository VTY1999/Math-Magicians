import operate from '../logic/operate';

describe('implements operations', () => {
  test('add 6 + 9', () => {
    const result = operate(6, 9, '+');
    expect(result).toBe('15');
  });

  test('multiply 2 x 3', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  test('divide 6 ÷ 3', () => {
    const result = operate(6, 3, '÷');
    expect(result).toBe('2');
  });

  test('modulo 10 % 4 return 0', () => {
    const result = operate(10, 4, '%');
    expect(result).toBe('2');
  });

  test('substract 46 - 18', () => {
    const result = operate(46, 18, '-');
    expect(result).toBe('28');
  });
});
