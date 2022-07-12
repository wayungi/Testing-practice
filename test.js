import { stringLength, reverseString } from './index.js';

test('Length of "hugo"', () => {
  expect(stringLength('hugo')).toBe(4);
});

test('Empty string', () => {
  expect(stringLength('')).toBe('Invalid string length');
});

test('Should return "atesinna"', () => {
  expect(reverseString('anniseta')).toEqual('atesinna');
});
