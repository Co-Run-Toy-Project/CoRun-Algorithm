/**
 * 통과 여부 : 통과
 * 점수 : +10
 * 시간 : 30분
 */

/**
 *
 * @param {*} n 칸
 * @returns 끝에 도달하는 가지수 + 1234567로 나눈 나머지
 */
function solution(n) {
  // 1. 테이블 정의 : 1~n까지 나타내는 수
  // 2. 점화식 :
  /*
  D[1] = 1 => 1
  D[2] = 1+1 / 2 => 2
  D[3] = 1+1+1 / 1+2/ 2+1 => 3
  D[4] = 1+1+1+1 / 1+1+2 / 1+2+1 / 2+1+1 / 2+ 2 => 5
  D[5] = 1+1+1+1+1 / 1+1+1+2 / 1+1+2+1 / 1+2+1+1 / 2+1+1+1 / 1+2+2 / 2+1+2 / 2+2+1 => 8
  D[n] = D[n-1] + D[n-2]
  */
  // 3. 초기값 정하기 D[1] = 1, D[2] = 2

  let result = [];
  if (n < 3) {
    return n;
  }
  result[0] = 0;
  result[1] = 1;
  result[2] = 2;
  for (let i = 3; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567;
  }
  // ㅎ...slice(-1).toString() 이 난리 치고 있었네....
  return result[n];
}

console.log(solution(5));

/**
 * 시간 초과..
 * 
function solution(n) {
  // 1. 테이블 정의 : 1~n까지 나타내는 수
  // 2. 점화식 :
  return step(n);
  function step(number) {
    if (number === 1) return 1;
    if (number === 2) return 2;

    return (step(number - 1) % 1234567) + (step(number - 2) % 1234567);
  }
}
 */
