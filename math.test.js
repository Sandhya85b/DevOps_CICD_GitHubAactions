const { sum, multiply } = require("./math");

test("Sum 2+4 to equal 6", () => {
  expect(sum(2, 4)).toBe(6);
});
test("Multiply 2*4 to equal 8", () => {
  expect(multiply(2, 4)).toBe(8);
});
