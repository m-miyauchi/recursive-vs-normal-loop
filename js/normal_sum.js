const NUM = 10000;

const calcSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function main() {
  let result = 0;

  for (let i = 1; i <= NUM; i++) {
    result = result + calcSum(i);
  }

  console.log(`NUM: ${NUM}, result: ${result}`);
}

console.time('time');
main();
console.timeEnd('time');
