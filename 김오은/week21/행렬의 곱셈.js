/**
 * 통과 여부 : 통과
 * 시간 : 30분
 * 점수 : + 7
 */

/**
 *
 * @param {*} arr1 행렬1
 * @param {*} arr2 행렬2
 * @returns arr1 * arr2 곱한 결과
 */
function solution(arr1, arr2) {
  // col, row 안 써야 통과함
  // let col = arr1.length;
  // let row = arr2[0].length;
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let chunk = 0;
      for (let k = 0; k < arr2.length; k++) {
        chunk += arr1[i][k] * arr2[k][j];
      }
      result.push(chunk);
    }
    answer.push(result);
  }
  return answer;
}

// 3*2
const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
// 2*2
const arr2 = [
  [3, 3],
  [3, 3],
];

//  3*3
// const arr1 = [
//   [2, 3, 2],
//   [4, 2, 4],
//   [3, 1, 4],
// ];
// const arr2 = [
//   [5, 4, 3],
//   [2, 4, 1],
//   [3, 1, 1],
// ];
console.log(solution(arr1, arr2));

/**
 * 테스트 1 〉	통과 (43.75ms, 36.5MB)
테스트 2 〉	통과 (44.12ms, 38.3MB)
테스트 3 〉	통과 (31.53ms, 38.3MB)
테스트 4 〉	통과 (0.70ms, 33.3MB)
테스트 5 〉	통과 (4.46ms, 38.6MB)
테스트 6 〉	통과 (3.57ms, 38.4MB)
테스트 7 〉	통과 (0.64ms, 33.6MB)
테스트 8 〉	통과 (0.57ms, 33.5MB)
테스트 9 〉	통과 (0.31ms, 33.5MB)
테스트 10 〉	통과 (7.12ms, 38.5MB)
테스트 11 〉	통과 (3.00ms, 36.9MB)
테스트 12 〉	통과 (0.38ms, 33.7MB)
테스트 13 〉	통과 (31.48ms, 38MB)
테스트 14 〉	통과 (45.69ms, 38.7MB)
테스트 15 〉	통과 (4.01ms, 37.1MB)
테스트 16 〉	통과 (2.85ms, 37.9MB)
 */
