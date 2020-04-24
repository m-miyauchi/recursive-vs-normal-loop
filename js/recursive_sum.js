const NUM = 10000;

const calcSum = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + calcSum(num - 1);
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
