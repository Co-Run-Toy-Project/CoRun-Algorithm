//1칸 > 1개
//2칸 > 1,1 2 / 2개
//3칸 > 1,1,1 1,2 2,1  > 3개
//4칸 > 5칸
//5칸 > 11111 2111 1211 1121 1112 221 212 221 8개
//피보나치 배열

function solution(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2]) % 1234567);
  }
  return fibo[n + 1];
}

//8점
// 테스트 1 〉	통과 (0.03ms, 33.7MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (0.18ms, 33.6MB)
// 테스트 5 〉	통과 (0.11ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.6MB)
// 테스트 7 〉	통과 (0.13ms, 33.5MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.14ms, 33.5MB)
// 테스트 10 〉	통과 (0.12ms, 33.6MB)
// 테스트 11 〉	통과 (0.23ms, 33.5MB)
// 테스트 12 〉	통과 (0.22ms, 33.6MB)
// 테스트 13 〉	통과 (0.18ms, 33.5MB)
// 테스트 14 〉	통과 (0.24ms, 33.5MB)
// 테스트 15 〉	통과 (0.21ms, 33.5MB)
// 테스트 16 〉	통과 (0.38ms, 33.6MB)
