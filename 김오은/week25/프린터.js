/**
 * 통과 여부 : 통과
 * 시간 : 1시간 반
 * 점수 : +4
 * @param {*} priorities
 * @param {*} location
 * @returns
 */
function solution(priorities, location) {
  let count = 0;

  let queue = priorities.map((el, idx) => {
    return [el, idx];
  });

  // priorities를 없애버릴 때까지
  // 아니 왜 같은데 같다고 안 하는거야
  while (queue) {
    // 아까 위치랑 값 저장한 첫번째 놈 꺼내!
    let q = queue.shift();
    // 반복문 돌면서 얘보다 큰 애 있나 찾아!
    // 아... queue는 없애고 있는데 priorities에 돌려서 틀렸음.
    if (q[0] >= Math.max(...queue.map((x) => x[0]))) {
      // 최댓값 나오면
      count++;
      if (q[1] === location) {
        break;
      }
    } else {
      // 최댓값 아니면 뒤로 보내고
      queue.push(q);
    }
  }
  return count;
}
console.log(solution([2, 3, 3, 2, 9, 3, 3], 3));

/**
 * 틀린 코드
 * 이유 : 이건 단순히 >> 한 문제인데, 위는 정렬 문제이기 때문에
 * function solution(priorities, location) {
  let me = priorities[location];
  let max = Math.max(...priorities);
  let loc = location; // 만약 내가 더 크면 가장 중요한 것 위치는 location임.

  // 제일 중요한 거 찾기 내가 더 크면 나 아니면 쟤
  if (me >= max) {
    // 그럼 이제 내가 max다! loc도 그대로
    max = me;
  } else {
    // 내가 제일 중요하지 않으면 ㅠ 원래 max 놈 위치가 차지할 것이다
    // 만약 나보다 더 중요한 게 있다면 걔 위치로 location 옮기기
    loc = priorities.indexOf(max);
  }

  // 내가 앞이면 길이 - 거리 + 1
  // 내가 뒤면 거리 + 1
  // 거리
  let distance = loc - location;

  console.log(max, loc, distance);
  // 거리 뺀 게 양수면 내가 앞에 있다. 길이 - 거리 + 1
  if (Math.sign(distance) === 1) {
    return priorities.length - distance + 1;
  } else if (Math.sign(distance) === -1) {
    // 내가 얘 뒤에 있을 때
    return distance + 1;
  } else {
    // 거리가 같으면
    return 1;
  }
}
 */
