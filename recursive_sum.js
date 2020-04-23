
const calcSum = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + calcSum(num - 1);
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