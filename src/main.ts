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

export { sayHello, sum };
