import { sayHello, sum } from "./main";

describe("hello", () => {
  it("sayHello function exists", () => {
    expect(sayHello).toBeDefined();
  });
});

describe("the sum function", () => {
  it("should sum numbers", () => {
    const actual = sum(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it("should return the second number if first is 0", () => {
    const actual = sum(0, 2);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
