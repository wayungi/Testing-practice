import { stringLength, reverseString, capitalize } from './index.js';
import Calc from './calc.js';

test('Length of "hugo"', () => {
  expect(stringLength('hugo')).toBe(4);
});

test('Empty string', () => {
  expect(stringLength('')).toBe('Invalid string length');
});

test('Should return "atesinna"', () => {
  expect(reverseString('anniseta')).toEqual('atesinna');
});

describe('Add method', () => {
  const calc = new Calc();
  test('2 + 2 should return 4', () => {
    expect(calc.add(2, 2)).toBe(4);
  });

  test('-2 + 2 Should return 0', () => {
    expect(calc.add(-2, 2)).toEqual(0);
  });

  test('-2 + 3 not to be 5', () => {
    expect(calc.add(-2, 3)).not.toBe(5);
  });
});

describe('Subtract method', () => {
  const calc = new Calc();
  test('2  2 to be 0', () => {
    expect(calc.subtract(2, 2)).toBe(0);
  });

  test('-2 - 2 to equal -4', () => {
    expect(calc.subtract(-2, 2)).toEqual(-4);
  });

  test('-2 - 3 not to be 5', () => {
    expect(calc.subtract(-2, -3)).not.toBe(5);
  });
});

describe('Divide method', () => {
  const calc = new Calc();
  test('2 / 2 to be  1', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });

  test('10 / 3 to be close to 3.333', () => {
    expect(calc.divide(10, 3)).toBeCloseTo(3.333, 3);
  });

  test('-2 / 3 to be close to −0.666', () => {
    expect(calc.divide(-2, 3)).toBeCloseTo((-0.6666), 3);
  });
});

describe('multiply method', () => {
  const calc = new Calc();
  test('2 * 2 to be  4', () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test('10 * 3 to equal 30', () => {
    expect(calc.multiply(10, 3)).toBe(30);
  });

  test('-2 * 3 to equal −6', () => {
    expect(calc.multiply(-2, 3)).toEqual(-6);
  });
});

test('Should Capitalize a string, mama to Mama', () => {
  expect(capitalize('mama')).toBe('Mama');
});