// 与えられた数について、対象の数までの和の総和を計算する

// 与えられた数値から和を計算
const calcSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function main() {
  const num = 2;
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result = result + calcSum(i);
  }
  console.log(result);
}
main();
