/**
 * 통과 여부 : 통과
 * 시간 : 2시간
 * 점수 : +8
 */

/**
 * 자카드 유사도 J(A, B)는 교집합 크기를 합집합 크기로 나눈 값
 * 두 글자씩 끊어서 다중집합의 원소 : 공백, 숫자, 특수문자 있으면 버린다.
 * 대소문자 차이 없다.
 * @param {*} str1 문자열
 * @param {*} str2 문자열
 * @returns
 */
function solution(str1, str2) {
  /**
   * 슈도 코드
   * 두글자씩 입력 처리하며 공백, 숫자, 특수문자 있으면 버린다. 소문자로 바꾼다.
   * 교집합과 합집합을 구한다.
   * 나눈다.
   */

  let str1Arr = [];
  let str2Arr = [];

  // 거를 것 : 공백, 숫자, 특수문자
  // 숫자 [0-9] 숫자 /\s/ 특수문자
  let regexp = /[a-z|A-Z]/;

  // 아 그냥 true로 보려면 문자만 해당되게 하면 되는데

  for (let i = 0; i < str1.length - 1; i++) {
    // 공백, 숫자, 특수문자 버리면서 2개씩 자르기 아 그러면 2개씩 이동하면 안됨.
    // 둘 다 영문자면
    if (regexp.test(str1[i]) && regexp.test(str1[i + 1])) {
      str1Arr.push((str1[i] + str1[i + 1]).toLowerCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    // 공백, 숫자, 특수문자 버리면서 2개씩 자르기 아 그러면 2개씩 이동하면 안됨.
    // 둘 다 영문자면
    if (regexp.test(str2[i]) && regexp.test(str2[i + 1])) {
      str2Arr.push((str2[i] + str2[i + 1]).toLowerCase());
    }
  }

  // 어떻게 해야 구할 수 있을까 중복도 해당한다

  let intersection = [];
  // console.log(str1Arr, str2Arr);
  // 개수 더 적은 애를 돌려서 intersection에 push하기
  if (str1Arr.length >= str2Arr.length) {
    // 그러면 str2Arr이 돌자
    for (let j = 0; j < str2Arr.length; j++) {
      let check = str1Arr.indexOf(str2Arr[j]);
      // 같은 게 있으면 intersection에 추가하고 다른 놈꺼 제거
      if (!(check === -1)) {
        intersection.push(str2Arr[j]); // 교집합 추가
        str1Arr.splice(check, 1); // 삭제;
        str2Arr.splice(j, 1); // 삭제
        j--;
      }
    }
  } else {
    for (let j = 0; j < str1Arr.length; j++) {
      let check = str2Arr.indexOf(str1Arr[j]);
      console.log(check);
      // 같은 게 있으면 intersection에 추가하고 다른 놈꺼 제거
      if (!(check === -1)) {
        intersection.push(str1Arr[j]); // 교집합 추가
        str2Arr.splice(check, 1); // 삭제;
        str1Arr.splice(j, 1);
        j--;
      }
    }
  }

  // 합집합은 intersection에 splice하고 남은 애들을 추가하면 된다.
  let union = intersection.length + str1Arr.length + str2Arr.length;

  // 0이면 1로 바꿔서 계산
  // 틀린 이유 : 0이 되는 조건을 계산 안한 것 같다.
  // 합집합이 0이면 65536이고, 교집합만 0이면 0이다.

  let result = Math.floor(
    (union !== 0 ? intersection.length / union : 1) * 65536
  );
  return result;
}

console.log(solution("aa1+aa2", "AAAA12"));

/**
 * 통과 !
 * 테스트 1 〉	통과 (0.20ms, 33.5MB)
테스트 2 〉	통과 (0.18ms, 33.6MB)
테스트 3 〉	통과 (2.37ms, 33.6MB)
테스트 4 〉	통과 (1.46ms, 33.9MB)
테스트 5 〉	통과 (0.18ms, 33.5MB)
테스트 6 〉	통과 (0.17ms, 33.6MB)
테스트 7 〉	통과 (0.39ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.6MB)
테스트 9 〉	통과 (4.02ms, 33.7MB)
테스트 10 〉	통과 (0.35ms, 33.5MB)
테스트 11 〉	통과 (3.59ms, 33.3MB)
테스트 12 〉	통과 (0.16ms, 33.2MB)
테스트 13 〉	통과 (0.28ms, 33.5MB)
 */

/**
 * 1차 시도 5, 13번 실패
 * 테스트 1 〉	통과 (0.17ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 32.3MB)
테스트 3 〉	통과 (2.54ms, 32.1MB)
테스트 4 〉	통과 (0.87ms, 33.8MB)
테스트 5 〉	실패 (0.19ms, 33.4MB)
테스트 6 〉	통과 (0.18ms, 33.4MB)
테스트 7 〉	통과 (0.31ms, 33.6MB)
테스트 8 〉	통과 (0.17ms, 33.5MB)
테스트 9 〉	통과 (4.92ms, 33.7MB)
테스트 10 〉	통과 (0.35ms, 33.5MB)
테스트 11 〉	통과 (3.60ms, 33.7MB)
테스트 12 〉	통과 (0.21ms, 33.5MB)
테스트 13 〉	실패 (0.27ms, 33.4MB)
 */
