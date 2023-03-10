/**
 * 통과 여부 : 통과
 * 시간 : 20분
 * 점수 : +3
 */

/**
 *
 * @param {*} n 떨어져있는 거리
 * @returns 사용해야 하는 건전지 최소량
 * 또 또 이상한 거 만들었구만
 * 한 번에 K 칸을 앞으로 점프하거나, 순간이동 (현재까지 온 거리) x 2
 * 순간이동 = 건전지 소모 X
 * 이동할 때는 k만큼
 * 최소 거리 반환하는 것이 dfs, bfs가 생각나는군
 * 아니네
 * h-index 같은 문제네
 */
function solution(n) {
  let answer = 0;

  while (n !== 0) {
    // 홀수면 순간이동해서 도착은 못함
    // 점프를 뛰거라
    if (n % 2 === 1) {
      answer++;
      n -= 1; // 거리 줄고
    } else {
      // 순간이동을 했다
      n /= 2;
    }
  }
  return answer;
}

console.log(solution(5));

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.03ms, 33.4MB)
테스트 9 〉	통과 (0.03ms, 33.4MB)
테스트 10 〉	통과 (0.03ms, 33.4MB)
테스트 11 〉	통과 (0.03ms, 33.5MB)
테스트 12 〉	통과 (0.03ms, 33.4MB)
테스트 13 〉	통과 (0.03ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.03ms, 33.4MB)
테스트 16 〉	통과 (0.04ms, 33.4MB)
테스트 17 〉	통과 (0.05ms, 33.5MB)
테스트 18 〉	통과 (0.04ms, 33.5MB)

테스트 1 〉	통과 (0.05ms, 32.9MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33MB)
테스트 4 〉	통과 (0.05ms, 32.9MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 32.9MB)
테스트 8 〉	통과 (0.03ms, 33.3MB)
테스트 9 〉	통과 (0.04ms, 32.8MB)
테스트 10 〉	통과 (0.03ms, 33.3MB)
*/
