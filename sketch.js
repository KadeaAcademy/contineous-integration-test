function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function rms(a, b) {
  return Math.sqrt((a ** 2 * b ** 2) / 2);
}

module.exports = { sum: sum, product: product };
