const stringLength = (string) => {
  const length = string.length;
  if (length > 0 && length < 11) {
    return string.length;
  }
  return 'Invalid string length';
};

const reverseString = (string) => string.split('').reverse().join('');

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export { stringLength, reverseString, capitalize };
