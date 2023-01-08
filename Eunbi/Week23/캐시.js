// [PGS] 캐시, +7

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.09ms, 33.3MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.6MB)
// 테스트 9 〉	통과 (0.09ms, 33.5MB)
// 테스트 10 〉	통과 (0.26ms, 33.5MB)
// 테스트 11 〉	통과 (39.65ms, 42.6MB)
// 테스트 12 〉	통과 (0.19ms, 33.5MB)
// 테스트 13 〉	통과 (0.20ms, 33.4MB)
// 테스트 14 〉	통과 (0.22ms, 33.5MB)
// 테스트 15 〉	통과 (0.25ms, 33.6MB)
// 테스트 16 〉	통과 (0.28ms, 33.5MB)
// 테스트 17 〉	통과 (0.04ms, 33.5MB)
// 테스트 18 〉	통과 (0.44ms, 33.6MB)
// 테스트 19 〉	통과 (0.51ms, 33.6MB)
// 테스트 20 〉	통과 (0.57ms, 33.6MB)

function solution(cacheSize, cities) {
  let cache = [];
  let score = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.map((el) => {
    let item = el.toLowerCase();
    let idx = cache.indexOf(item);

    if (cache.includes(item)) {
      score++;
      cache.splice(idx, 1);
      cache.push(item);
    } else {
      if (cache.length >= cacheSize) {
        cache.shift();
        score += 5;
        cache.push(item);
      }

      if (cache.length < cacheSize) {
        score += 5;
        cache.push(item);
      }
    }
  });

  return score;
}
