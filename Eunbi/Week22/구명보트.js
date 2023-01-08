//[PGS] 구명보트, +5

// 정확성  테스트
// 테스트 1 〉	통과 (2.29ms, 35.4MB)
// 테스트 2 〉	통과 (1.08ms, 33.5MB)
// 테스트 3 〉	통과 (1.15ms, 33.4MB)
// 테스트 4 〉	통과 (1.10ms, 33.5MB)
// 테스트 5 〉	통과 (0.69ms, 33.5MB)
// 테스트 6 〉	통과 (0.43ms, 33.6MB)
// 테스트 7 〉	통과 (0.64ms, 33.5MB)
// 테스트 8 〉	통과 (0.16ms, 33.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.6MB)
// 테스트 10 〉	통과 (1.06ms, 33.6MB)
// 테스트 11 〉	통과 (0.97ms, 33.5MB)
// 테스트 12 〉	통과 (0.86ms, 33.5MB)
// 테스트 13 〉	통과 (1.27ms, 33.5MB)
// 테스트 14 〉	통과 (2.13ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (14.67ms, 38.2MB)
// 테스트 2 〉	통과 (33.27ms, 37.8MB)
// 테스트 3 〉	통과 (35.58ms, 37.7MB)
// 테스트 4 〉	통과 (36.91ms, 38MB)
// 테스트 5 〉	통과 (35.85ms, 37.7MB)

function solution(people, limit) {
  people.sort((a,b) => b - a);
  
  let boat = 0;
  let heavy = 0;
  let light = people.length - 1; 
  
  while(heavy < light){
      let sum = people[heavy] + people[light];
      
      if(sum > limit) heavy++;
      else {
          heavy++;
          light--; 
      }
      
      boat++; 
  }
  
  if(heavy === light) boat++; 
  
  return boat;
}