function solution(n) {
  const stack = [];
  do {
    if (n % 3 === 0) {
      // 나머지가 0이면 나머지를 4로 바꿔주고 몫에서 -1.
      stack.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      // 나머지가 0이 아닌 경우 3진법으로 계산.
      stack.push(n % 3);
      n = Math.floor(n / 3);
    }
  } while (n > 0);
  // n이 0보다 클때까지 반복. (n !== 0)는 유효성 5번 시간초과.

  return stack.reverse().join("");
  //stack = [1, 4] 이므로 뒤집어서 문자열로 변환 => return 값은 '41'
}

//https://school.programmers.co.kr/questions/41558
//참고
