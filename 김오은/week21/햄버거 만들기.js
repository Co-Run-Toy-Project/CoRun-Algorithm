/**
 * 통과 여부 : 통과
 * 시간 : 1시간 반
 * 점수 : +7
 * 틀렸던 이유 : 시간 초과 원인
 * 인덱스를 0으로 보내고, length 빼주던 걸 그냥 인덱스 -3함.
 */

/**
 * 정해진 순서 : 빵-야채-고기-빵
 * 빵(1), 야채(2), 고기(3)
 * 재료가 아래부터 위로 쌓이게 됨
 * @param {*} ingredient 재료의 정보를 나타내는 정수 배열
 * @returns 상수가 포장하는 햄버거의 개수
 */
function solution(ingredient) {
  let count = 0;
  let length = ingredient.length;

  let correct = [1, 2, 3, 1];
  for (let i = 0; i < length; ) {
    let arr = ingredient.slice(i, i + 4);
    const same =
      arr.length === 4 && arr.every((el, idx) => el === correct[idx]);
    if (same) {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    } else {
      i++;
    }
  }
  return count;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

/**
 * 
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (683.30ms, 50.3MB)
테스트 4 〉	통과 (3191.63ms, 65.9MB)
테스트 5 〉	통과 (5110.16ms, 70.9MB)
테스트 6 〉	통과 (1526.49ms, 51.9MB)
테스트 7 〉	통과 (2498.73ms, 64MB)
테스트 8 〉	통과 (1693.22ms, 52.3MB)
테스트 9 〉	통과 (893.27ms, 56.4MB)
테스트 10 〉	통과 (3.73ms, 37.9MB)
테스트 11 〉	통과 (631.65ms, 50.8MB)
테스트 12 〉	통과 (7492.72ms, 76.3MB)
테스트 13 〉	통과 (0.08ms, 33.6MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
테스트 15 〉	통과 (0.10ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.5MB)
테스트 17 〉	통과 (0.05ms, 33.5MB)
테스트 18 〉	통과 (0.16ms, 33.5MB)
 */
