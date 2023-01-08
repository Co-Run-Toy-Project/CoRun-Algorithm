function solution(k, tangerine) {
  const Count = [undefined];
  for (let n of tangerine) {
    if (Count[n] !== undefined) {
      Count[n]++;
    } else {
      Count[n] = 1;
    }
  }
  const SortCount = Count.filter((el) => el !== undefined).sort(
    (a, b) => b - a
  );
  let result = 1;
  let num = k;
  for (let n of SortCount) {
    if (num <= n) {
      break;
    } else {
      num -= n;
      result++;
    }
  }
  return result;
}

//7점
// 테스트 1 〉	통과 (33.19ms, 39.6MB)
// 테스트 2 〉	통과 (35.09ms, 39.6MB)
// 테스트 3 〉	통과 (41.01ms, 39.5MB)
// 테스트 4 〉	통과 (34.82ms, 39.5MB)
// 테스트 5 〉	통과 (5.86ms, 39.5MB)
// 테스트 6 〉	통과 (5.90ms, 39.5MB)
// 테스트 7 〉	통과 (6.00ms, 39.4MB)
// 테스트 8 〉	통과 (44.77ms, 39.5MB)
// 테스트 9 〉	통과 (9.52ms, 39.6MB)
// 테스트 10 〉	통과 (5.69ms, 39.6MB)
// 테스트 11 〉	통과 (484.88ms, 33.4MB)
// 테스트 12 〉	통과 (0.08ms, 33.6MB)
// 테스트 13 〉	통과 (0.11ms, 33.5MB)
// 테스트 14 〉	통과 (0.09ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.4MB)
// 테스트 16 〉	통과 (0.09ms, 33.5MB)
// 테스트 17 〉	통과 (0.09ms, 33.6MB)
// 테스트 18 〉	통과 (0.09ms, 33.4MB)
// 테스트 19 〉	통과 (0.08ms, 33.5MB)
// 테스트 20 〉	통과 (0.13ms, 33.4MB)
// 테스트 21 〉	통과 (0.29ms, 33.5MB)
// 테스트 22 〉	통과 (0.42ms, 33.5MB)
// 테스트 23 〉	통과 (0.44ms, 33.6MB)
// 테스트 24 〉	통과 (1.05ms, 33.7MB)
// 테스트 25 〉	통과 (3.75ms, 34.8MB)
// 테스트 26 〉	통과 (19.13ms, 40.2MB)
// 테스트 27 〉	통과 (743.45ms, 54.3MB)
// 테스트 28 〉	통과 (679.90ms, 45.9MB)
// 테스트 29 〉	통과 (616.70ms, 50.4MB)
// 테스트 30 〉	통과 (620.20ms, 54.3MB)
// 테스트 31 〉	통과 (396.45ms, 39.8MB)
// 테스트 32 〉	통과 (503.49ms, 40.4MB)
// 테스트 33 〉	통과 (403.67ms, 50.8MB)
// 테스트 34 〉	통과 (346.61ms, 49.2MB)
