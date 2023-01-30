// [PGS] 할인 행사/ leve2
// 난이도 :  level 2
// 점수 :

/*
문제
XYZ 마트는 일정한 금액을 지불하면 10일 동안 회원 자격을 부여합니다. XYZ 마트에서는 회원을 대상으로 매일 한 가지 제품을 할인하는 행사를 합니다. 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.

예를 들어, 정현이가 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개이며, XYZ 마트에서 15일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나인 경우에 대해 알아봅시다. 첫째 날부터 열흘 간에는 냄비가 할인하지 않기 때문에 첫째 날에는 회원가입을 하지 않습니다. 둘째 날부터 열흘 간에는 바나나를 원하는 만큼 할인구매할 수 없기 때문에 둘째 날에도 회원가입을 하지 않습니다. 셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.

정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때, 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성하시오. 가능한 날이 없으면 0을 return 합니다.

제한사항
1 ≤ want의 길이 = number의 길이 ≤ 10
1 ≤ number의 원소 ≤ 10
number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
10 ≤ discount의 길이 ≤ 100,000
want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12
입출력 예
want	number	discount	result
["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]	0
입출력 예 설명
입출력 예 #1

문제 예시와 같습니다.
입출력 예 #2

사과가 할인하는 날이 없으므로 0을 return 합니다.
*/

/*
< 의사코드 >
 마트 할인행사!
일정 금액을 지불하면 10일동안 회원자격 부여받음
행사상품은 회원 한정 하루 한 개 씩만 구매 가능
원하는 제품과 수량이 할인하는 닐짜와 10일 연속으로 일치 할 경우에 회원가입 하려고 함
원하는 제품 배열 want 개수 number 할인제품목록 discount
원하는 제품을 모두 할인 받을 수 있는 회원등록날짜의 총일수 return

1. 회원 등록 날짜를 담을 answer 숫자형태로 선언
2. 할인 품목과 원하는 제품이 일치하는지 확인하는 함수 isMatch 를 만든다.
    isMatch 함수
    new Map()으로 키 : 값 형태를 만든다
    discount를 10개씩 자른 arr를 forEach를 활용해서 map.set으로 할인 품목 세팅한다.
    for문 안에서 want길이만큼 돌면서 if문으로 원하는 품목이 있는지 확인
    map.get + want의 index번호로 map.set으로 세팅 한 할인품목을 가져와서 확인
    일치 할 경우 true를, 일치하지 않을 경우false를 반환한다.
3. 가입 시점부터 10흘동안 할인하니 10개씩 끊어서 isMatch에 넣어준다.
    반환하는 blooen값으로 true일 경우 answer++하고 아니면 아무것도안함
4. answer를 return
*/

function solution(want, number, discount) {
  let answer = 0;

  const isMatch = (arr) => {
    // 할인 품목과 원하는 제품이 일치하는지 확인하는 함수
    let map = new Map(); // 매번 map을 초기화 해준다.
    arr.forEach((v) => map.set(v, (map.get(v) || 0) + 1)); // 할인 품목들을 map에 셋팅한다.
    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) return false;
    } // 원하는 품목의 수량과 할인 품목이 일치하지 않으면 false
    return true; // 일치하면 true를 리턴한다
  };

  for (let j = 0; j <= discount.length - 10; j++) {
    let arr = discount.slice(j, j + 10); // 10일동안 할인이 되므로 10개씩 배열을 잘라준다.
    if (isMatch(arr)) {
      answer++;
    }
  }
  return answer;
}
/*
 테스트 1 〉	통과 (16.76ms, 37.5MB)
테스트 2 〉	통과 (47.97ms, 40.4MB)
테스트 3 〉	통과 (14.59ms, 37.7MB)
테스트 4 〉	통과 (43.30ms, 38.7MB)
테스트 5 〉	통과 (29.13ms, 39.4MB)
테스트 6 〉	통과 (9.88ms, 37.4MB)
테스트 7 〉	통과 (18.77ms, 38MB)
테스트 8 〉	통과 (52.26ms, 42.2MB)
테스트 9 〉	통과 (15.20ms, 38.1MB)
테스트 10 〉	통과 (33.07ms, 39.9MB)
테스트 11 〉	통과 (10.77ms, 37.4MB)
테스트 12 〉	통과 (0.14ms, 33.5MB)
*/
