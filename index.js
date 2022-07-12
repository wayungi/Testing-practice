const stringLength = (string) => {
  const length = string.length;
  if (length > 0 && length < 11) {
    return string.length;
  }
  return 'Invalid string length';
};

const reverseString = (string) => string.split('').reverse().join('');

export { stringLength, reverseString };
