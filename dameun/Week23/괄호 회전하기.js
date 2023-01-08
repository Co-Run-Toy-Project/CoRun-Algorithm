function solution(s) {
  let word = s;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    word = word.slice(1) + word[0];
    if (findRight(word)) {
      result++;
    }
  }
  return result;
}
//아래 코드는 예시 코드 참고한 것입니다
function findRight(arr) {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in opener) {
      stack.push(arr[i]);
    } else if (closer.includes(arr[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== arr[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

solution("}]()[{");
