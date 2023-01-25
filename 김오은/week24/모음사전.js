/**
 * 통과 여부 : 통과
 * 시간 : 30분
 * 점수 : +1
 */

/**
 *
 * @param {*} word 길이 5 이하의 단어 하나
 * @returns 사전에서 몇 번째 단어인지
 */
function solution(word) {
  let wordArr = ["A", "E", "I", "O", "U"];
  let result = [];

  /**
   *
   * @param {*} len 만들 문자 길이
   * @param {*} res 결과
   */
  const dfs = (len, res) => {
    if (res.length === len) {
      result = [...result, res];
    } else {
      for (let i = 0; i < 5; i++) {
        dfs(len, res + wordArr[i]);
      }
    }
  };
  for (let i = 1; i <= 5; i++) {
    dfs(i, "");
  }
  // 인덱스 찾아 1 더해 반환
  return result.sort().findIndex((res) => res === word) + 1;
}

console.log(solution("I"));

// result에 저장되는 값
/**
 * [
	"A", "E", "I", "O", "U",
	"AA", "AE", "AI", "AO", "AU", ...
	"AAA", "AAE", "AAI", "AAO", "AAU", ...
	...
	"AAAAA", ... "UUUUU"
]
 */
