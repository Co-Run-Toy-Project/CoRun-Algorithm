//[PGS] 괄호 회전하기

// 다른 분 코드 해석
//출처: https://www.cckn.dev/problem-solve/(js)-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4---%EA%B4%84%ED%98%B8-%ED%9A%8C%EC%A0%84%ED%95%98%EA%B8%B0/

const pair = {
  // 객체 형태로 짝 만들어줌
  '}': '{',
  ']': '[',
  ')': '(',
};

function solution(s) {
  const arr = s.split('');
  let result = 0;

  const isValid = (arr) => {
    // 괄호 비교하는 함수
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      // 주어진 인자들 반복
      const c = arr[i];
      if (pair[c] === undefined)
        // 여는 괄호라면 stack에 담아준다.
        stack.push(c);
      else {
        // 여는 괄호가 아니라면
        if (stack[stack.length - 1] !== pair[c]) return false; // stack에 담은 마지막 요소(가장 최근 요소)가 현재 요소(여는괄호)와 같지 않으면 짝이 아니므로 false 리턴
        stack.pop();
      }
    }
    if (stack.length) return false; // 괄호가 남아있다면 false리턴
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift()); // 맨 앞 요소를 뒤로 보내주는 작업
  }

  return result;
}
