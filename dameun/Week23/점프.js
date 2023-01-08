// 2500
// 1250
// 625
// 312  >
// 156
// 78
// 39 >
// 19 >
// 9 >
// 4
// 2
// 1 >

//절반씩 줄이면 됨

function solution(n) {
  let result = 1;
  while (n > 1) {
    if (n % 2 === 1) {
      result++;
      n = (n - 1) / 2;
    } else {
      n = n / 2;
    }
  }
  return result;
}
