function solution(number, limit, power) {
  const demage = [];

  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let m = 1; m <= Math.sqrt(n); m++) {
      if (n % m === 0) {
        count++;
      }
    }
    if (Math.sqrt(n) % 1 === 0) {
      demage.push(count * 2 - 1);
    } else {
      demage.push(count * 2);
    }
  }

  const finalDemage = [];
  for (let n of demage) {
    if (n > limit) {
      finalDemage.push(power);
    } else {
      finalDemage.push(n);
    }
  }
  return finalDemage.reduce((a, b) => a + b, 0);
}

// 테스트 1 〉	통과 (6.69ms, 37.7MB)
// 테스트 2 〉	통과 (3.42ms, 37.3MB)
// 테스트 3 〉	통과 (3.03ms, 37.3MB)
// 테스트 4 〉	통과 (3.65ms, 37.3MB)
// 테스트 5 〉	통과 (3.20ms, 37.1MB)
// 테스트 6 〉	통과 (6.74ms, 37.7MB)
// 테스트 7 〉	통과 (3.45ms, 37.4MB)
// 테스트 8 〉	통과 (3.40ms, 37.3MB)
// 테스트 9 〉	통과 (7.64ms, 37.7MB)
// 테스트 10 〉	통과 (4.48ms, 37.2MB)
// 테스트 11 〉	통과 (78.83ms, 42.5MB)
// 테스트 12 〉	통과 (88.89ms, 42.7MB)
// 테스트 13 〉	통과 (110.02ms, 42.7MB)
// 테스트 14 〉	통과 (83.23ms, 42.7MB)
// 테스트 15 〉	통과 (89.48ms, 42.8MB)
// 테스트 16 〉	통과 (93.43ms, 43.1MB)
// 테스트 17 〉	통과 (0.11ms, 33.4MB)
// 테스트 18 〉	통과 (110.82ms, 43MB)
// 테스트 19 〉	통과 (3.62ms, 37.3MB)
// 테스트 20 〉	통과 (4.21ms, 37.3MB)
// 테스트 21 〉	통과 (0.08ms, 33.6MB)
// 테스트 22 〉	통과 (0.08ms, 33.5MB)
// 테스트 23 〉	통과 (0.09ms, 33.6MB)
// 테스트 24 〉	통과 (119.93ms, 43MB)
// 테스트 25 〉	통과 (93.31ms, 43.1MB)
// 테스트 26 〉	통과 (2.91ms, 37.1MB)
// 테스트 27 〉	통과 (3.62ms, 37.1MB)
