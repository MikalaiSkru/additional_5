module.exports = function check(str, bracketsConfig) {
  return str.split('').reduce((acc, sign) => {
    const pair = bracketsConfig.filter(arr => sign === arr[0] || sign === arr[1]),
          openingSign = pair[0][0],
          closingSign = pair[0][1],
          lastAccSign = acc[acc.length - 1];

    if (sign === openingSign && sign !== closingSign) {
      acc.push(sign);
    } else if (sign === closingSign && openingSign === lastAccSign) {
      acc.pop();
    } else {
      acc.push(sign);
    }
    return acc;
  }, []).length === 0;
};
