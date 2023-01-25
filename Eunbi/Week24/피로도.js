//[PGS] 피로도
// 정확성  테스트
// 테스트 1 〉	통과 (0.23ms, 33.5MB)
// 테스트 2 〉	통과 (0.22ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.3MB)
// 테스트 4 〉	통과 (0.54ms, 33.6MB)
// 테스트 5 〉	통과 (2.78ms, 37.7MB)
// 테스트 6 〉	통과 (5.00ms, 38.1MB)
// 테스트 7 〉	통과 (5.95ms, 38.1MB)
// 테스트 8 〉	통과 (8.58ms, 38.1MB)
// 테스트 9 〉	통과 (0.22ms, 33.4MB)
// 테스트 10 〉	통과 (2.27ms, 37.7MB)
// 테스트 11 〉	통과 (0.20ms, 33.5MB)
// 테스트 12 〉	통과 (6.11ms, 38.2MB)
// 테스트 13 〉	통과 (0.64ms, 33.7MB)
// 테스트 14 〉	통과 (0.38ms, 33.5MB)
// 테스트 15 〉	통과 (0.25ms, 33.6MB)
// 테스트 16 〉	통과 (0.26ms, 33.5MB)
// 테스트 17 〉	통과 (0.35ms, 33.6MB)
// 테스트 18 〉	통과 (0.22ms, 33.3MB)
// 테스트 19 〉	통과 (0.29ms, 33.6MB)

function solution(k, dungeons) {
  const len = dungeons.length;
  const isVisited = new Array(len).fill(false);
  let maxClear = 0;

  const dfs = (k, currClear) => {
    maxClear = Math.max(currClear, maxClear);

    for (let i = 0; i < len; i++) {
      let [min, cons] = dungeons[i];

      if (!isVisited[i] && k >= min) {
        isVisited[i] = true;
        dfs(k - cons, currClear + 1);
        isVisited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return maxClear;
}
