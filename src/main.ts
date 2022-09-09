function sayHello(yourName: string): void {
  console.log(`Hello ${yourName}`);
}
function sum(a: number, b: number): number {
  if (a == 0) {
    return b;
  }
  return a + b;
}
const myName = "Dojo";
// eslint-disable-next-line jest/require-hook
sayHello(myName);

function compute(num: string): string {
  let retVal = "";
  const divideNumbers = {
    3: "Foo",
    5: "Bar",
    7: "Qix"
  };
  Object.entries(divideNumbers).forEach(([key, value], index) => {
    if (+num % +key === 0) {
      retVal += value;
    }
  });
  num.split("").forEach(function (c) {
    Object.entries(divideNumbers).forEach(([key, value], index) => {
      if (+c === +key) {
        retVal += value;
      }
    });
  });
  if (retVal === "") {
    retVal += num;
  }
  return retVal;
}

export { sayHello, sum, compute };
