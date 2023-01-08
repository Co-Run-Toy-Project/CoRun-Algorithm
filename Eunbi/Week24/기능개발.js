//[PGS] 기능개발
// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	통과 (0.14ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.4MB)
// 테스트 9 〉	통과 (0.14ms, 33.4MB)
// 테스트 10 〉	통과 (0.14ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)

function solution(progresses, speeds) {
  const result = [];
  let days = 1;
  let count = 0;
  let progress = 0;

  while (progresses[0]) {
    progress = progresses[0] + days * speeds[0];

    if (progress >= 100) {
      // 맨앞 요소가 배포가능한 경우
      progresses.shift();
      speeds.shift();
      count++;
    } else {
      if (count > 0) {
        result.push(count);
        count = 0;
      }
      days++;
    }
  }

  result.push(count);

  return result;
}
