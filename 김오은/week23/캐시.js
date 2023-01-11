/**
 * 통과 여부 : 통과
 * 시간 :
 * 점수 : +8
 */

/*
 * LRU 알고리즘
 * 1. 새로운 데이터가 들어온 경우
	1-1. 캐시에 넣어준다.
	1-2. 캐시가 가득차있다면, 가장 오래된 데이터를 제거하고 넣어준다.

 * 2. 존재하는 데이터가 들어온 경우
	2-1. 해당 데이터를 꺼낸 뒤,
	2-2. 가장 최근 데이터 위치로 보내준다.
  https://velog.io/@dyongdi/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BA%90%EC%8B%9C

 * 다른 분 풀이입니다!
 */

/**
 *
 * @param {*} cacheSize 캐시 크기
 * @param {*} cities 도시 이름으로 이뤄진 문자열 배열
 * @returns 총 실행 시간
 * 이놈의 카카오
 * 실행 시간 측정 어떻게 하는데..?
 */

function solution(cacheSize, cities) {
  let executionTime = 0;
  let cacheSet = new Set();

  // cacheSize 0인 경우
  if (cacheSize === 0) return cities.length * 5;

  const lowerCaseCities = cities.map((city) => city.toLowerCase());

  lowerCaseCities.forEach((city) => {
    // cache hit
    if (cacheSet.has(city) === true) {
      executionTime += 1;
      cacheSet.delete(city);
      cacheSet.add(city);
    }
    // cache miss
    // cacheSet size < cacheSize 일 때
    if (cacheSet.has(city) === false && cacheSet.size < cacheSize) {
      executionTime += 5;
      cacheSet.add(city);
    }
    // cacheSet size = cacheSize 일 때
    if (cacheSet.has(city) === false && cacheSet.size === cacheSize) {
      executionTime += 5;
      cacheSet.delete(Array.from(cacheSet)[0]);
      cacheSet.add(city);
    }
  });
  return executionTime;
}

/*
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.09ms, 33.5MB)
테스트 3 〉	통과 (0.10ms, 33.6MB)
테스트 4 〉	통과 (0.10ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.6MB)
테스트 8 〉	통과 (0.20ms, 33.6MB)
테스트 9 〉	통과 (0.09ms, 33.5MB)
테스트 10 〉 통과 (0.23ms, 33.4MB)
테스트 11 〉 통과 (49.87ms, 52.6MB)
테스트 12 〉 통과 (0.23ms, 33.5MB)
테스트 13 〉 통과 (0.28ms, 33.6MB)
테스트 14 〉 통과 (0.34ms, 33.6MB)
테스트 15 〉 통과 (0.43ms, 33.5MB)
테스트 16 〉 통과 (0.45ms, 33.6MB)
테스트 17 〉 통과 (0.05ms, 33.6MB)
테스트 18 〉 통과 (0.68ms, 33.7MB)
테스트 19 〉 통과 (0.76ms, 33.7MB)
테스트 20 〉 통과 (0.79ms, 33.9MB)
*/
