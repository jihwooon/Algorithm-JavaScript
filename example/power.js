function power(number, square) {
  if (square == 0) return 1;
  return number * power(number, square - 1)
}

module.exports = power;