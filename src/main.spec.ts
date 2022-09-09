import { sayHello, sum, compute } from "./main";

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

  it("return the second number if first is 0", () => {
    const actual = sum(0, 2);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

describe("#compute", () => {
  it("return number if not divisible by 3, 5 and 7", () => {
    const numInString = "1";
    expect(compute(numInString)).toBe("1");
  });

  it("return number Foo if divisible by 3", () => {
    const numInString = "6";
    expect(compute(numInString)).toBe("Foo");
  });

  it("return number Bar if divisible by 5", () => {
    const numInString = "10";
    expect(compute(numInString)).toBe("Bar");
  });

  it("return number Qix if divisible by 7", () => {
    const numInString = "14";
    expect(compute(numInString)).toBe("Qix");
  });

  it("returns BarQix if divisible by 5 and 7", () => {
    const numInString = "140";
    expect(compute(numInString)).toBe("BarQix");
  });

  it("returns FooFoo if divisible by 3 and contains 3", () => {
    const numInString = "3";
    expect(compute(numInString)).toBe("FooFoo");
  });

  it("returns FooBarBar if divisible by 3 and 5 and contains 5", () => {
    const numInString = "15";
    expect(compute(numInString)).toBe("FooBarBar");
  });

  it("returns Foo if not divisible by 3,5,7 but contains 3", () => {
    const numInString = "13";
    expect(compute(numInString)).toBe("Foo");
  });

  it("replace 0 with * in result", () => {
    const numInString = "101";
    expect(compute(numInString)).toBe("1*1");
  });
});
