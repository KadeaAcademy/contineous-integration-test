function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function rms(a, b) {
  return Math.sqrt((a ** 2 + b ** 2) / 2);
}

function minus(a, b) {
  return a - b + 1;
}

module.exports = { sum: sum, product: product, rms: rms, minus: minus };
