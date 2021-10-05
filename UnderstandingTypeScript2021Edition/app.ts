function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

let combineValues: (n1: number, n2: number) => number;
combineValues = add;
// combineValues = printResult

console.log(combineValues(8, 8));
