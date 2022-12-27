//최솟값의 크기가 배열의 길이보다 작은 수를 찾으면 됨
function solution(citations) {
  const sortArr = citations.sort((a, b) => b - a);
  const passNum = [];
  while (sortArr.length >= sortArr[sortArr.length - 1]) {
    passNum.push(sortArr[sortArr.length - 1]);
    sortArr.pop();
  }
  return sortArr.length;
}

solution([6, 5, 5, 5, 3, 2, 1, 0]);

// 9점
// 테스트 1 〉	통과 (0.27ms, 33.6MB)
// 테스트 2 〉	통과 (0.49ms, 33.6MB)
// 테스트 3 〉	통과 (0.51ms, 33.5MB)
// 테스트 4 〉	통과 (0.50ms, 33.5MB)
// 테스트 5 〉	통과 (0.58ms, 33.6MB)
// 테스트 6 〉	통과 (0.37ms, 33.6MB)
// 테스트 7 〉	통과 (0.22ms, 33.6MB)
// 테스트 8 〉	통과 (0.09ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.6MB)
// 테스트 10 〉	통과 (0.38ms, 33.5MB)
// 테스트 11 〉	통과 (0.67ms, 33.5MB)
// 테스트 12 〉	통과 (0.09ms, 33.5MB)
// 테스트 13 〉	통과 (0.62ms, 33.6MB)
// 테스트 14 〉	통과 (0.36ms, 33.7MB)
// 테스트 15 〉	통과 (0.37ms, 33.5MB)
// 테스트 16 〉	통과 (0.18ms, 33.6MB)
