/**
 * 통과 여부 : 실패
 * 시간 : 2시간
 * 점수 :
 */
function solution(bridge_length, weight, truck_weights) {
  // 반복문으로
  let bridge = Array(bridge_length).fill(0); // queue
  let time = 0; // 걸리는 시간
  let bridgeWeight = 0;
  // 대기 트럭, 다리 트럭이 있으면 반복
  while (bridge.length) {
    // 다리 위 트럭 무게가 0이고, 대기 트럭도 없으면 끝내!!
    // if (truck_weights.length === 0 && bridgeWeight === 0) {
    //   break;
    // }

    time++;
    // 다리에서 무조건 하나 빼주기
    bridge.shift();

    bridgeWeight = bridge.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    // 대기 트럭 있으면
    if (truck_weights) {
      // 이전까지 다리 무게
      // 현재 다리에 있는 무게 + 다음 트럭 무게
      if (bridgeWeight + truck_weights[0] <= weight) {
        // 대기 트럭 맨 앞 놈 빼고
        let t = truck_weights.shift();
        // 다리에 올리기
        bridge.push(t);
      } else {
        // 다리에 있는 거는 앞에서 빼니까 0 넣어서 빈 트럭 넣어줌
        bridge.push(0);
      }
    }
  }
  return time;
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
