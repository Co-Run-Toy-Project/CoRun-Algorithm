/**
 * 통과 여부 : 실패
 * 시간 : 30분
 */

/**
 * 던전 앤 파이터 !
 * @param {*} k 현재 피로도
 * @param {*} dungeons 최소 필요 피로도, 소모 피로도 담긴 2차원 배열
 * @returns 유저가 탐험할 수 있는 최대 던전 수
 */
function solution(k, dungeons) {
  let answer = [];
  let fatigue = k;
  let cnt = 0;

  // 내가 한 건 DP 느낌인 것 같고 dfs 로 해야 하나봄.
  // 아 얘도 dfs 적용해야 하는데
  for (let dungeon of dungeons) {
    if (fatigue >= dungeon[0]) {
      fatigue -= dungeon[1];
      cnt++;
    }
    answer.push(cnt + 1);
  }
  // Math.max(...배열) 해도 되겠네
  return maxValue(answer);
}

function maxValue(arr) {
  return arr.reduce((max, val) => (max > val ? max : val));
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

/** 52.6
 * 테스트 1 〉	통과 (0.07ms, 33.6MB)
테스트 2 〉	통과 (0.07ms, 33.6MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.6MB)
테스트 6 〉	실패 (0.09ms, 33.6MB)
테스트 7 〉	통과 (0.07ms, 33.5MB)
테스트 8 〉	통과 (0.10ms, 33.6MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)
테스트 11 〉	실패 (0.07ms, 33.5MB)
테스트 12 〉	실패 (0.07ms, 33.4MB)
테스트 13 〉	실패 (0.11ms, 33.5MB)
테스트 14 〉	실패 (0.11ms, 33.5MB)
테스트 15 〉	실패 (0.13ms, 33.3MB)
테스트 16 〉	통과 (0.07ms, 33.6MB)
테스트 17 〉	실패 (0.08ms, 33.4MB)
테스트 18 〉	실패 (0.09ms, 33.6MB)
테스트 19 〉	실패 (0.08ms, 33.5MB)
 */
