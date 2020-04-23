const calcSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function main() {
  const num = 10000;
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result = result + calcSum(i);
  }
  console.log(result);
}

console.time('time');
main();
console.timeEnd('time');