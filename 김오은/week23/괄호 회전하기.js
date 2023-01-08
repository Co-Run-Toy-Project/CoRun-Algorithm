/**
 * 통과 여부 : 실패
 * 시간 : 1시간
 */

/**
 *
 * @param {*} s 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열
 * @returns 올바른 괄호 문자열이 되게 하는 x의 개수
 * 못 만들면  0을 return
 * 올바른 괄호의 업그레이드판이구먼
 * 왼쪽으로 회전하는 게 shift
 */
function solution(s) {
  let result = [];
  let arr = [...s];
  for (let i = 0; i < s.length; i++) {
    // 잘 돌아가는군
    result[i] = arr.join("");
    arr = rotation(arr);
    console.log(check(arr));
  }
  return result;
}

// s를 왼쪽으로 회전하는 함수
function rotation(stringArr) {
  // 첫번째 문자열을 맨 마지막에 추가.
  let cut = stringArr.splice(0, 1); // 앞에서 길이 1만큼 잘라내어 반환
  stringArr.push(cut);
  return stringArr;
}

function check(arr) {
  let correctCheck = false;
  let stack = [];

  for (let element of [...arr]) {
    // 왼쪽 괄호면 추가
    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
    } else {
      // // 스택 길이 0이면 짝 없는거임.
      // if (!stack.length) return false;
      x = stack.pop();
      console.log(x);
      if (element === ")" && x != "(") {
        return false;
      } else if (element === "}" && x != "{") {
        return false;
      } else if (element === "]" && x != "[") {
        return false;
      }
    }
  }

  if (stack.length === 0) return false;
  return true;
}

console.log(solution("[](){}"));
