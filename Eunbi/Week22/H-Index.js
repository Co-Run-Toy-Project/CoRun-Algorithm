//[PGS] H-Index, +10
// 본인이 푼 것 아님, 다른 분코드 레퍼런스로 이용하여 이해함
// Reference: https://breathtaking-life.tistory.com/80
// https://school.programmers.co.kr/questions/41463
//https://www.ibric.org/myboard/read.php?Board=news&id=270333

//테스트 1 〉	통과 (0.40ms, 33.5MB)
// 테스트 2 〉	통과 (0.60ms, 33.5MB)
// 테스트 3 〉	통과 (0.53ms, 33.5MB)
// 테스트 4 〉	통과 (0.28ms, 33.5MB)
// 테스트 5 〉	통과 (0.34ms, 33.5MB)
// 테스트 6 〉	통과 (0.61ms, 33.5MB)
// 테스트 7 〉	통과 (0.22ms, 33.5MB)
// 테스트 8 〉	통과 (0.14ms, 33.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.5MB)
// 테스트 10 〉	통과 (0.32ms, 33.4MB)
// 테스트 11 〉	통과 (0.64ms, 33.5MB)
// 테스트 12 〉	통과 (0.16ms, 33.6MB)
// 테스트 13 〉	통과 (0.36ms, 33.5MB)
// 테스트 14 〉	통과 (0.59ms, 33.6MB)
// 테스트 15 〉	통과 (0.37ms, 33.6MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)

// h-index란 자신이 저널에 등재한 전체 논문 중 많이 인용된 순으로 정렬, 
// 피인용수가 논물 수와 같아지거나 피인용수가 논문 수보다 작아지기 시작하는 수 

function solution(citations) {
  citations.sort((a,b)=>b-a); // 내림차순 정렬
  for(let i = 0; i < citations.length; i++){ // 모든 요소 반복(논문 수 만큼) 
      if(i >= citations[i]) return i; // index가 피인용수(i번째 요소)보다 크거나 같아지는 경우 i를 리턴한다.
  }
  return citations.length; // index가 피인용수(i번째 요소)보다 크거나 같아지는 경우가 없다면 논문 수(배열의 길이)를 리턴한다
}