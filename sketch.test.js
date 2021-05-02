const { sum, product, rms } = require("./sketch");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// @ponicode
describe("sketch.product", () => {
  test("multiplies two numbers", () => {
    let result = product(10, 20);
    expect(result).toBe(200);
  });

  test("multiplies -1 * -1 equal 1", () => {
    let result = product(-1, -1);
    expect(result).toBe(1);
  });
});

// @ponicode
describe("sketch.rms", () => {
  test("Root mean square of 6", () => {
    let result = rms(6, 6);
    expect(result).toBe(6);
  });
});
