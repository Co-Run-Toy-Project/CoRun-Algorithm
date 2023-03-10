// [PGS] 햄버거 만들기 / leve1
// 난이도 :  level 1
// 풀이시간 :
// 점수 :

/*
문제
햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. 
함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 
상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. 
상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. 
상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, 
재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.

예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때, 상수는 여섯 번째 재료가 쌓였을 때, 
세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고, 아홉 번째 재료가 쌓였을 때,
 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다. 즉, 2개의 햄버거를 포장하게 됩니다.

상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

제한사항
1 ≤ ingredient의 길이 ≤ 1,000,000
ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
입출력 예
ingredient	result
[2, 1, 1, 2, 3, 1, 2, 3, 1]	2
[1, 3, 2, 1, 2, 1, 3, 1, 2]	0
입출력 예 설명
입출력 예 #1

문제 예시와 같습니다.
입출력 예 #2

상수가 포장할 수 있는 햄버거가 없습니다.
*/

/*
< 의사코드 >
1231일 경우에 그 숫자를 빼고 다시 검사해서 있으면 빼고 없으면 그냥 멈추면 되지 않을까
배열을 문자열로 만들어서 1231이 있으면 count하면서 빼고 없으면 멈추는 식으로 풀어보자


1. 

*/

function solution(ingredient) {
  let str = ingredient.join("");
  let hamburger = /1231/;
  let count = 0;
  if (ingredient.length > 4) {
    return count;
  }
  while (str.length < 4) {
    str = str.replace(hamburger, "");
    count++;
  }
  return count;
}

/*



*/

function solution(ingredient) {
  let str = ingredient.join("");
  console.log(str.length);

  let hamburger = /1231/;
  let hamburgerStr = "1231";
  console.log(str.includes(hamburgerStr));
  let count = 0;
  if (ingredient.length < 4) {
    return count;
  }
  while (str.includes(hamburgerStr)) {
    str = str.replace(hamburger, "");
    count++;
  }
  return count;
}

/*


테스트 1
입력값 〉	[2, 1, 1, 2, 3, 1, 2, 3, 1]
기댓값 〉	2
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	9
true
테스트 2
입력값 〉	[1, 3, 2, 1, 2, 1, 3, 1, 2]
기댓값 〉	0
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	9
false


테스트 1 〉	통과 (2.26ms, 33.6MB)
테스트 2 〉	통과 (2.46ms, 33.6MB)
테스트 3 〉	통과 (4794.38ms, 67.9MB)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	통과 (6011.91ms, 69.8MB)
테스트 10 〉	통과 (6.17ms, 34.8MB)
테스트 11 〉	통과 (3219.09ms, 69.5MB)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	통과 (2.25ms, 33.6MB)
테스트 14 〉	통과 (3.33ms, 33.5MB)
테스트 15 〉	통과 (2.18ms, 33.6MB)
테스트 16 〉	통과 (2.21ms, 33.6MB)
테스트 17 〉	통과 (2.20ms, 33.5MB)
테스트 18 〉	통과 (2.23ms, 33.5MB)
*/

/*
통과코드
모조리 다 push 시켜버리고 배열의 길이가 4가 됐을 때
끝에서 4개 잘라서 1231이면 pop을 4번 시킨다.
*/

function solution(ingredient) {
  const stk = [];
  let cnt = 0;

  ingredient.forEach((ing, idx) => {
    stk.push(ing);

    if (stk.length >= 4) {
      const find = stk.slice(-4).join("");
      if (find === "1231") {
        stk.pop();
        stk.pop();
        stk.pop();
        stk.pop();
        cnt++;
      }
    }
  });

  return cnt;
}

/*
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.09ms, 33.4MB)
테스트 3 〉	통과 (76.18ms, 60.5MB)
테스트 4 〉	통과 (184.91ms, 82.2MB)
테스트 5 〉	통과 (248.70ms, 85.7MB)
테스트 6 〉	통과 (152.70ms, 69.2MB)
테스트 7 〉	통과 (129.65ms, 80.5MB)
테스트 8 〉	통과 (110.34ms, 70.4MB)
테스트 9 〉	통과 (90.69ms, 64.7MB)
테스트 10 〉	통과 (3.15ms, 37.8MB)
테스트 11 〉	통과 (54.73ms, 58.3MB)
테스트 12 〉	통과 (213.39ms, 97.6MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.4MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.5MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.10ms, 33.4MB)
*/
