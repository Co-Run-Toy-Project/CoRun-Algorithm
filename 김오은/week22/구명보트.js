/**
 * 통과 여부 : 통과
 * 점수 : +7
 * 시간 : 1시간 반
 */

/**
 * 최대 2명, 무게 제한
 * @param {*} people : 몸무게를 담은 배열
 * @param {*} limit : 구명 보트의 무게 제한
 * @returns 구명보트 개수의 최솟값
 * 틀린 이유 :
 * 시간 초과 : 안 써도 되는 메소드 너무 많이 씀
 * 최대 2명 제대로 확인 안 했음
 */
function solution(people, limit) {
  //한 보트에 2명이 탈 수 있는지를 검사하자
  let answer = 0;
  //내림차순 정렬
  people.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0, j = people.length - 1; i <= j; j--) {
    if (people[i] + people[j] <= limit) {
      answer++;
      i++;
    } else {
      answer++;
    }
  }

  return answer;
}

console.log(solution([90, 80, 50, 20, 10], 100));

/**
 * 3차 왜 틀리지?
 * 
 * function solution(people, limit) {
  people.sort((a, b) => b - a); // 내림차순 [ 80, 70, 50, 50 ]

  let cnt = 0;
  let boats = new Array(people.length).fill(limit);

  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (boats[j] >= people[i]) {
        // console.log(`i: ${i} j: ${j}`);
        boats[j] -= people[i];
        cnt++;
        break;
      }
    }
  }
  // limit인 보트 people.length만큼 만들어두고 limit인 거 아닌 개수 더하기
  return cnt;
}

 */

/**
 * 2차 음 시간 초과
 * /**
 * 최대 2명, 무게 제한
 * @param {*} people : 몸무게를 담은 배열
 * @param {*} limit : 구명 보트의 무게 제한
 * @returns 구명보트 개수의 최솟값
// function solution(people, limit) {
//   // limit에서 일단 빼고 걔보다 작은 애가 있으면 집어넣는다
//   // 근데 작은 애가 여럿이면 어떡하지? 그 중에서 제일 큰 애 넣는다
//   people.sort((a, b) => b - a); // 내림차순 [ 80, 70, 50, 50 ]
//   // limit인 보트 people.length만큼 만들어두고 limit인 거 아닌 개수 더하기
//   let boats = new Array(people.length).fill(limit);

//   // 배열 순회해서
//   for (let i = 0; i < people.length; i++) {
//     // boats[i]보다 작으면 빼기
//     // 틀린 이유 : 바로 전은 안되는데 이후에는 될 수도
//     // 이중 for문으로 돌리자
//     for (let j = 0; j < people.length; j++) {
//       // 90 80 50 20 10
//       // 10 20 50
//       // 계속 처음부터 가서 확인해봐야 함
//       // 누가? people[i]가 boats 0~j까지
//       // 0번째 인덱스가 boat[j]보다 크면
//       if (people[i] <= boats[j]) {
//         boats[j] -= people[i];
//         break;
//       }
//     }
//   }
//   return boats.filter((el) => el !== 100).length;
// }
 */

/**
 * 1차
 * 
 * function solution(people, limit) {
  // limit에서 일단 빼고 걔보다 작은 애가 있으면 집어넣는다
  // 근데 작은 애가 여럿이면 어떡하지? 그 중에서 제일 큰 애 넣는다
  people.sort((a, b) => b - a); // 내림차순 [ 80, 70, 50, 50 ]
  // limit인 보트 people.length만큼 만들어두고 limit인 거 아닌 개수 더하기
  let boats = new Array(people.length).fill(limit);

  // 배열 순회해서
  for (let i = 0; i < people.length; i++) {
    // boats[i]보다 작으면 빼기
    if (boats[i - 1] >= people[i]) {
      boats[i - 1] -= people[i];
    } else {
      boats[i] -= people[i];
    }

    // j = i로
  }
  return boats.filter((el) => el !== 100).length;
}
테스트 1 〉	실패 (2.43ms, 35.6MB)
테스트 2 〉	통과 (1.41ms, 33.8MB)
테스트 3 〉	실패 (1.48ms, 33.7MB)
테스트 4 〉	실패 (1.39ms, 33.7MB)
테스트 5 〉	실패 (0.87ms, 32.3MB)
테스트 6 〉	실패 (0.53ms, 32MB)
테스트 7 〉	실패 (1.44ms, 33.7MB)
테스트 8 〉	통과 (0.21ms, 33.6MB)
테스트 9 〉	실패 (0.26ms, 33.5MB)
테스트 10 〉	실패 (1.35ms, 33.9MB)
테스트 11 〉	실패 (1.25ms, 33.7MB)
테스트 12 〉	실패 (1.19ms, 33.9MB)
테스트 13 〉	실패 (1.40ms, 33.8MB)
테스트 14 〉	통과 (1.52ms, 33.7MB)
테스트 15 〉	통과 (0.44ms, 33.1MB)
 * 
 */
