function solution(people, limit) {
  const sortArr = people.sort((a, b) => b - a);
  let count = 0;
  for (let n of sortArr) {
    if (n + sortArr[sortArr.length - 1] <= limit) {
      count++;
      sortArr.pop();
    } else {
      count++;
    }
  }
  return count;
}

solution([70, 50, 80, 50], 100);

//6점
// 정확성  테스트
// 테스트 1 〉	통과 (2.13ms, 35.8MB)
// 테스트 2 〉	통과 (1.49ms, 33.7MB)
// 테스트 3 〉	통과 (1.95ms, 33.7MB)
// 테스트 4 〉	통과 (1.18ms, 33.8MB)
// 테스트 5 〉	통과 (1.29ms, 33.5MB)
// 테스트 6 〉	통과 (0.48ms, 33.6MB)
// 테스트 7 〉	통과 (0.71ms, 33.6MB)
// 테스트 8 〉	통과 (0.29ms, 33.6MB)
// 테스트 9 〉	통과 (0.36ms, 33.6MB)
// 테스트 10 〉	통과 (1.84ms, 33.7MB)
// 테스트 11 〉	통과 (1.13ms, 33.6MB)
// 테스트 12 〉	통과 (1.63ms, 33.5MB)
// 테스트 13 〉	통과 (1.23ms, 33.6MB)
// 테스트 14 〉	통과 (1.42ms, 33.7MB)
// 테스트 15 〉	통과 (0.28ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (16.04ms, 39.2MB)
// 테스트 2 〉	통과 (13.27ms, 39.1MB)
// 테스트 3 〉	통과 (16.37ms, 38.8MB)
// 테스트 4 〉	통과 (12.08ms, 39.1MB)
// 테스트 5 〉	통과 (11.76ms, 38.8MB)
