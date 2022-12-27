/**
 * 승질나 죽겠네
 * 통과 여부 : 통과
 * 시간 : 40분
 * 점수 : +10
 */

/**
 *
 * @param {*} citations 논문의 수
 * @returns h 인덱스
 */
function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    // 틀렸던 이유 : 시작이 1이었어서
    if (i >= citations[i]) {
      // 배열 인덱스 + 1이 배열[인덱스]를 만족하는 마지막 인덱스가 h-index...OTL
      return i; // 아니 return 하면 뭐하는 건데 왜 되는데
    }
  }

  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5]));

/**
 * 왜 이렇게 문제를 쉽게 못 풀고 어렵게 풀려고 할까....?
 * function solution(citations) {
  let up = 0;
  let down = 0;
  let hValue = 0;
  citations.sort((a, b) => b - a);
  console.log(citations);

  for (let i = 1; i <= citations.length; i++) {
    up = 0;
    down = 0;
    for (let j = 0; j <= citations.length; j++) {
      // console.log(`i: ${i} j: ${j}`);
      // console.log(citations[j]);
      if (citations[j - 1] > i) {
        up++;
      } else if (citations[j - 1] < i) {
        down++;
      }
    }
    console.log(up, down);
    if (up === down) {
      if (hValue < i) {
        hValue = i;
        console.log("있어!");
      }
    }
    console.log(`hValue: ${hValue}`);
  }
  return hValue;
}

 */
