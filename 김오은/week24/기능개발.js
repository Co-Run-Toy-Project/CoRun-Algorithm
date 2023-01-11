/**
 * 통과 여부 : 통과
 * 시간 : 45분
 * 점수 : +11
 */

/**
 * 문제 : 기능은 먼저 개발될 수 있지만 뒤에 있는 기능은 앞에 있는 기능 배포할 때 같이
 * 배포는 하루에 한 번
 * 유형 : 스택/큐 - 앞에가 나가야한다
 * @param {*} progresses 작업의 진도가 적힌 정수 배열
 * @param {*} speeds 개발 속도가 적힌 정수 배열
 * @returns 각 배포마다 몇 개의 기능이 배포되는지
 */
function solution(progresses, speeds) {
  let answer = []; // 결과
  let day = 0; // 필요한 날짜
  let deploy = 0; //배포된 기능의 수

  //모든 작업이 끝날때까지
  while (progresses.length > 0) {
    //제일 앞에 있는 기능이 완료된 상태면 배열에서 제거
    if (progresses[0] + day * speeds[0] >= 100) {
      deploy += 1;
      progresses.shift();
      speeds.shift();
    }
    //아직 완료되지 않은 상태
    else {
      //앞에 완료된 작업이있으면 개수 삽입 후 종료
      if (deploy !== 0) {
        answer.push(deploy);
        deploy = 0;
      }
      day++;
    }
  }
  answer.push(deploy);
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

/**
 * 테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.4MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.20ms, 33.5MB)
테스트 6 〉	통과 (0.21ms, 33.6MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.14ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.15ms, 33.6MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
 */
