/**
 * 통과 여부 : 통과
 * 점수 : +4
 * 시간 : 40분
 */

/**
 *
 * @param {*} n : 사람 수
 * @param {*} words 사람들이 순서대로 말한 단어
 * @returns [가장 먼저 탈락하는 사람 번호, 자신의 몇 번째에서 탈락하는지]
 * 탈락자 안 생기면 [0, 0]
 * 탈락하는 경우 1) 끝 글자와 첫 글자가 다를 때
 * 탈락하는 경우 2) 기존에 나온 단어가 나왔을 때
 * 탈락하는 경우 3) 둘 다 해당될 때 - 누구를 먼저 찾을 것인가
 * 아 번호가 1번부터 달려있다.
 */
function solution(n, words) {
  // 오늘은 문자열로 풀어볼까
  // 스택에 끝 글자, 첫 글자 넣어놓고 맞으면 pop할까
  // 단어 길이 안 구해도 그냥 slice(-1) 하면 되지 않나
  let start = "";
  let end = "";
  let result = 0;

  // 중복값 확인하기
  const setWords = new Set(words);
  const isDuplicate = setWords.size < words.length;

  let indices = [];
  let element = words
    .filter((el, i) => [...setWords].indexOf(el) !== i)
    .toString();

  // 문자열 개수만큼 반복
  for (let i = 1; i < words.length; i++) {
    let player = (i % n) + 1;
    let order = Math.ceil((i + 1) / n);

    // 중복 있을 때
    if (isDuplicate) {
      if (words.findIndex((item) => words[i] === item) !== i) {
        return [player, order];
      }
    }

    // 조건 1만 확인하기
    end = words[i - 1].slice(-1); // 이전 사람 끝말
    start = words[i].slice(0, 1); // 다음 사람 첫말
    console.log(end, start, i);

    if (end !== start) {
      // 번호는 나머지 + 1 (번호는 1부터 시작함)
      return [player, order];
    }
  }
  return [0, 0];
  // return words.toString().split(",");
}
console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
// console.log(
//   solution(5, [
//     "hello",
//     "observe",
//     "effect",
//     "take",
//     "either",
//     "recognize",
//     "encourage",
//     "ensure",
//     "establish",
//     "hang",
//     "gather",
//     "refer",
//     "reference",
//     "estimate",
//     "executive",
//   ])
// );
// console.log(
//   solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
// );
