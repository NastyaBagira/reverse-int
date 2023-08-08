module.exports = function reverse(n) {
  const numberToStr = n.toString().split('');
  const strReverse = numberToStr.reverse();
  const strToNumber = strReverse.join('');
  return result = parseFloat(strToNumber);
}
