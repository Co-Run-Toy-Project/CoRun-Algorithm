// [PGS] 다리를 지나는 트럭 / leve2
// 난이도 :  level 2
// 점수 :

/*
문제
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	[]	[]	[7,4,5,6]
1~2	[]	[7]	[4,5,6]
3	[7]	[4]	[5,6]
4	[7]	[4,5]	[6]
5	[7,4]	[5]	[6]
6~7	[7,4,5]	[6]	[]
8	[7,4,5,6]	[]	[]
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
입출력 예
bridge_length	weight	truck_weights	return
2	10	[7,4,5,6]	8
100	100	[10]	101
100	100	[10,10,10,10,10
*/

/*
< 의사코드 >

트럭 여러대가 강을 지나간다
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 구하기
트럭은 1초에 1만큼이동 다리길이, 다리가 견디는 무게 주어짐
트럭이 오르지 않았을 땐 무게 제외

1. 건널 트럭을shift를 사용하여 한 대씩 건너게 한다
2. 주어진 다리의 길이만큼 길이를 가진 배열 bridge를 만든다
   bridge는 다리의 현재상태 나타냄
  배열의 0번 : 도착 -1번:출발
  트럭은 매 초 한 칸씩 앞으로 이동함 === 인덱스 감소함
  초기에는 다리 위에 아무 트럭도 올라가 있지 않고 배열의 모든 요소는 0으로 초기화
  배열의 끝에 새로운 요소 추가하고 배열의 맨 앞 요소를 꺼냄
3. 현재 다리 위에 올라간 트럭의 하중을 나타내는 변수 bridge_sum을 만든다
  처음에는 다리위에 아무 트럭도 없으므로 0으로 초기화
4. 1초 지난 후 첫 트럭 출발 
  소요시간 answer 1증가
  truck_weights의 첫 요소 === 처음 출발 트럭
  나온 트럭 요소를 bridge 의 배열 끝에 push()로 추가 후 bridge_sum에 더하기
  다리 전체의 길이를 유지 하기 위해 bridge배결의 첫 요소를 shift()한다. push()로 길어졌기때문
5. 다리 위에 트럭이 있는 동안 다리 현재의 무게가 0보다 클 때 동안 반복해야한다
  while 문 안의 내용
    1.시간 1초 증가answer++;
    2. 다리의 맨 앞 요소 shift()후 해당 요소만큼의 값을 bridge_sum에서 빼
    3. 현재 다리 무게bridge_sum에 다름 트럭의 무게truck_weight[0]를 더했을 때
       다리가 견딜 수 있는 전체 무게인 weight 보다 작거나 같다면 
       다음 트럭을 bridge 배열에 push()하고, bridge_sum에 더한다.
    4. 만약 전체 무게 weight보다 bridge_sum이 크다면 트럭 올라갈 수 없는것이므로
        bridge 배열에 0을 push()함
6. 다리의 현재 무게가 0이 되는 순간 즉bridge_sum === 0이 될 때 answer를 return

*/

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  // 다리 위에 올라간 트럭 배열
  let bridge = Array.from({ length: bridge_length }, () => 0);
  // 현재 시점 다리에 걸린 하중
  let bridge_sum = 0;

  // 1초를 증가시키고, 맨 처음 트럭을 다리에 올린다.
  answer++;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.push(truck_weights.shift());

  // 대기 트럭 배열이 남아있거나 다리 위에 올라간 트럭 배열이 남아있는 동안,
  while (bridge_sum > 0) {
    // 우선 시간이 1초 지났을 때,
    answer++;

    // 큐의 맨 앞을 꺼내고,
    bridge_sum -= bridge.shift();

    // 만약 현재 시점 다리 하중에 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면?
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      // 다음 트럭을 다리 배열에 넣는다.
      bridge_sum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

/*
 테스트 1 〉	통과 (0.60ms, 33.7MB)
테스트 2 〉	통과 (6.77ms, 37.5MB)
테스트 3 〉	통과 (0.15ms, 33.6MB)
테스트 4 〉	통과 (5.43ms, 37.5MB)
테스트 5 〉	통과 (27.92ms, 38MB)
테스트 6 〉	통과 (10.27ms, 38MB)
테스트 7 〉	통과 (0.47ms, 33.6MB)
테스트 8 〉	통과 (0.17ms, 33.6MB)
테스트 9 〉	통과 (3.01ms, 36.8MB)
테스트 10 〉	통과 (0.17ms, 33.6MB)
테스트 11 〉	통과 (0.06ms, 33.5MB)
테스트 12 〉	통과 (0.20ms, 33.5MB)
테스트 13 〉	통과 (0.37ms, 33.5MB)
테스트 14 〉	통과 (0.14ms, 33.6MB)
*/
