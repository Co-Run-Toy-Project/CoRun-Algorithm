// [PGS] 기사단원의 무기/ leve1
// 난이도 :  level 1
// 풀이시간 :
// 점수 : +8

/*
문제
숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.

각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 
제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 
만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 
15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때,
 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

제한사항
1 ≤ number ≤ 100,000
2 ≤ limit ≤ 100
1 ≤ power ≤ limit
입출력 예
number	limit	power	result
5	3	2	10
10	3	2	21
입출력 예 설명
입출력 예 #1

1부터 5까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2]개입니다. 모두 공격력 제한 수치인 3을 넘지 않기 때문에 필요한 철의 무게는 해당 수들의 합인 10이 됩니다. 따라서 10을 return 합니다.

입출력 예 #2

1부터 10까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2, 4, 2, 4, 3, 4]개입니다. 공격력의 제한수치가 3이기 때문에, 6, 8, 10번 기사는 공격력이 2인 무기를 구매합니다. 따라서 해당 수들의 합인 21을 return 합니다.
*/

/*
< 의사코드 >
숫자나라 기사단의 각 기사에게는 1~number까지의 번호가 지정되어있음
기사 무기점에서 무기 구매

각 기사 -> 기사번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
단 이웃나라와 협약에 의해 공력력의 제한 수치 정하고 제한 수치보다 큰 무기를 구매해야하는 기사는 정한 공격력의 무기 구매해야함
..?

15의 경우 약수 1, 3, 5, 15 4개이므로 공격력 4인 무기 구매
만약 정해진 공경력 제한수치가 3이고 제한 수치를 초과한 기사가 사용할 무기의 공격력이 2라면 
15번 기사는 2를 구매해야함
무기 공격력 1당 1kg
무기를 만들기 위한 철의 무게 미리 계산하려고 함

주어지는 수
기사단원의 수 number, 협약 제한 공격력 limit, 제한 수치를 초과한 기사가 사용할 기사의 공격력 power
무기점 주인이 무기를 만들기 위한 철의 무게 구하기

1. 일단 기사단원수의 약수의 개수 구한다.
    약수는 본인을 제외하고 n/2 보다 클 수 없기 때문에 절반값까지만 체크를 해주는 것이다.
     이렇게만 해도 1번 예제보다 더 좋은 성능을 낼 수 있다.
     라고하는 블로그 글 참고함

2. 배열을 만들고 limit보다같거나 작은 수는 그대로 더하고 limit보다 큰 숫자는 그 숫자의 개수만큼 power를 더한다 
*/

function solution(number, limit, power) {
  let arr = [];
  let divisor = [];
  for (let i = 1; i < number; i++) {
    let divisors = [];
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }
    divisor = [...divisors, i];
    console.log(divisor);
  }
  return answer;
}

/*
 래퍼런스 에러..
 
*/

function solution(number, limit, power) {
  let arr = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let divisors = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors += 1;
      }
    }
    arr.push(divisors + 1);
    console.log(arr);
  }
  return answer;
}

/*
   래퍼런스 에러..
  */

function solution(number, limit, power) {
  let arr = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let divisors = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors += 1;
      }
    }
    arr.push(divisors + 1);
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= limit) {
      result += arr[i];
    } else if (arr[i] > limit) {
      result += power;
    }
  }

  return result;
}

/*
 시간초과
*/

function solution(number, limit, power) {
  let arr = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let divisors = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors += 1;
      }
    }
    arr.push(divisors + 1);
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] <= limit ? (result += arr[i]) : (result += power);
  }

  return result;
}

/*
  시간초과
*/

function solution(number, limit, power) {
  let arr = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let divisors = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors += 1;
      }
    }
    arr.push(divisors + 1);
  }
  arr.map((i) => {
    i <= limit ? (result += i) : (result += power);
  });

  return result;
}

/*
테스트 1 〉	통과 (163.14ms, 36.2MB)
테스트 2 〉	통과 (50.80ms, 36.4MB)
테스트 3 〉	통과 (30.44ms, 36.5MB)
테스트 4 〉	통과 (59.53ms, 36.1MB)
테스트 5 〉	통과 (3.04ms, 36.9MB)
테스트 6 〉	통과 (108.92ms, 37.3MB)
테스트 7 〉	통과 (7.86ms, 36.9MB)
테스트 8 〉	통과 (5.01ms, 36.8MB)
테스트 9 〉	통과 (126.49ms, 37.1MB)
테스트 10 〉	통과 (5.59ms, 37MB)
테스트 11 〉	통과 (7489.05ms, 38.7MB)
테스트 12 〉	통과 (8288.12ms, 38.8MB)
테스트 13 〉	통과 (7985.25ms, 38.8MB)
테스트 14 〉	통과 (8402.91ms, 38.7MB)
테스트 15 〉	통과 (7945.46ms, 38.8MB)
테스트 16 〉	통과 (8448.38ms, 38.9MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (8433.49ms, 38.8MB)
테스트 19 〉	통과 (7.32ms, 36.9MB)
테스트 20 〉	통과 (7.37ms, 36.9MB)
테스트 21 〉	통과 (0.09ms, 33.4MB)
테스트 22 〉	통과 (0.06ms, 33.4MB)
테스트 23 〉	통과 (0.15ms, 33.4MB)
테스트 24 〉	통과 (8403.30ms, 38.8MB)
테스트 25 〉	통과 (8056.31ms, 38.9MB)
테스트 26 〉	통과 (4.37ms, 36.9MB)
테스트 27 〉	통과 (2.80ms, 37MB)
감격..
*/
