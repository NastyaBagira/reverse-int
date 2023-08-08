module.exports = function reverse(n) {
    const numberToStr = n.toString().split('');
    const strReverse = numberToStr.reverse();
    const strToNumber = strReverse.join('');
    const result = parseFloat(strToNumber);
    return result;
}
