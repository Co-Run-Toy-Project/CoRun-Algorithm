// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.41ms, 33.5MB)
// 테스트 3 〉	통과 (0.53ms, 33.6MB)
// 테스트 4 〉	통과 (0.34ms, 33.6MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.16ms, 33.5MB)
// 테스트 7 〉	통과 (0.29ms, 33.6MB)
// 테스트 8 〉	통과 (0.26ms, 33.5MB)
// 테스트 9 〉	통과 (0.41ms, 33.6MB)
// 테스트 10 〉	통과 (0.27ms, 33.5MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)

function solution(progresses, speeds) {
  // 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있다.
  // 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포

  // progresses : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
  // speeds : 각 작업의 하루 개발 속도가 적힌 정수 배열

  // 배포는 하루에 한번 하루의 끝에 이루어짐
  // output : 각 배포마다 몇 개의 기능이 배포되는지 return
  let answer = [];
  let work = progresses.reverse();
  speeds.reverse();

  while (work.length > 0) {
    let count = 0;

    work = work.map((el, idx) => {
      return el + speeds[idx];
    });

    while (work.length > 0) {
      let lastEl = work.pop();

      if (lastEl >= 100) {
        count++;
      } else {
        work.push(lastEl);
        break;
      }
    }

    if (count > 0) {
      answer.push(count);
    }
  }

  return answer;
}
