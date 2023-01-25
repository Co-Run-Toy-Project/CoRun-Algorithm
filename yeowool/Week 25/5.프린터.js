// [PGS] 프린터 / leve2
// 난이도 :  leve2
// 풀이시간 :
// 점수 :

/*
문제
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 
내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때
, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

제한사항
현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
입출력 예
priorities	location	return
[2, 1, 3, 2]	2	1
[1, 1, 9, 1, 1, 1]	0	5
입출력 예 설명
예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로
 C D E F A B 순으로 인쇄합니다.

/*
<의사코드>
중요도가 높은 문서를 먼저 인쇄하는 프린터의 대기목록 priorities
내가 요청한 인쇄물의 위치 location
내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return

1. 먼저 몇 번째로 출력될지 담기는 answer와 임시로 요소를 담을 firstEl 를 선언
2. while문 안에서 true일동안 반복
    priorities 프린터의 대기 목록에서 첫 번째 요소 shift()로 뽑아서 firstEl에 할당
    현재 첫 번째 요소와 priorities배열 중 가장 높은 숫자를 비교
    만약 true라면 priorities에 firstEl를 push하고
    location이 0일  경우 location을 priorities.length-1로 재 할당
    location이0이 아닐 때는 location--
3. 중요도가 높은 문서가 있다면 priorities에 push하고 없다면 출력진행 
    출력 시 answer++후 location이 0일 경우while문을 종료하고 
    location이 0이 아닐 경우 --


*/
function solution(priorities, location) {
  let answer = 0;
  let firstEl = 0;

  while (true) {
    firstEl = priorities.shift();

    // 나머지 인쇄 대기목록에서 현재 대상보다 중요도가 높은 문서 존재 => 가장 마지막에 push
    if (firstEl < Math.max(...priorities)) {
      // firstEl가 priorities중 가장 높은 숫자보다 작다면 출력하지 않고 뒤로 보냄
      priorities.push(firstEl);
      //뒤로 요소가 갔으니 location의 위치를 조정
      if (location === 0) location = priorities.length - 1;
      //0인데도 출력이 안된다면 맨 뒤 순서로 이동한 것
      else location--;
    } else {
      // 출력
      answer++;
      if (location === 0) break;
      else location--;
    }
  }

  return answer;
}

/*
 테스트 1 〉	통과 (0.22ms, 33.4MB)
테스트 2 〉	통과 (0.49ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.6MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.22ms, 33.5MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.25ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.6MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.22ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	통과 (0.36ms, 33.4MB)
테스트 14 〉	통과 (0.04ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
테스트 17 〉	통과 (0.42ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.4MB)
테스트 19 〉	통과 (0.23ms, 33.4MB)
테스트 20 〉	통과 (0.14ms, 33.4MB)
 */
