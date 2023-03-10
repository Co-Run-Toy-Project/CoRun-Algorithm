/**
 * 통과 여부 : 통과
 * 시간 : 30분
 * 점수 : +4
 */

/**
 *
 * @param {*} clothes  스파이가 가진 의상이 담긴 2차원 배열
 * @returns 서로 다른 옷의 조합의 수
 * 이건 해시래
 * 데이터를 최종 사용자가 원문을 추정하기 힘든 더 작고, 뒤섞인 조각으로 나누는 것
 */
function solution(clothes) {
  // 경우의 수 구하기
  let answer = 1;
  let obj = {};
  // 의상의 이름, 종류로 나뉘어져 있어서 종류 별로 나눠야 함.
  clothes.forEach((el) => {
    obj[[el[1]]] = (obj[[el[1]]] || 1) + 1;
  });

  for (let props in obj) {
    answer *= obj[props];
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

/*
테스트 1 〉	통과 (0.22ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.5MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (0.21ms, 33.5MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.6MB)
테스트 8 〉	통과 (0.12ms, 33.5MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)
테스트 11 〉	통과 (0.12ms, 33.4MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
테스트 13 〉	통과 (0.13ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.3MB)
테스트 15 〉	통과 (0.08ms, 33.6MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.10ms, 33.5MB)
테스트 18 〉	통과 (0.11ms, 33.5MB)
테스트 19 〉	통과 (0.11ms, 33.4MB)
테스트 20 〉	통과 (0.09ms, 33.5MB)
테스트 21 〉	통과 (0.08ms, 33.5MB)
테스트 22 〉	통과 (0.08ms, 33.4MB)
테스트 23 〉	통과 (0.09ms, 33.5MB)
테스트 24 〉	통과 (0.10ms, 33.4MB)
테스트 25 〉	통과 (0.11ms, 33.5MB)
테스트 26 〉	통과 (0.20ms, 33.4MB)
테스트 27 〉	통과 (0.08ms, 33.3MB)
테스트 28 〉	통과 (0.12ms, 33.6MB)
*/
