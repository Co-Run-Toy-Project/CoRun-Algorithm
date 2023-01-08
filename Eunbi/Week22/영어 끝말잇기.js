// [PGS] 영어 끝말잇기, +5

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.7MB)
// 테스트 3 〉	통과 (0.07ms, 33.6MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.10ms, 33.7MB)
// 테스트 10 〉	통과 (0.21ms, 33.7MB)
// 테스트 11 〉	통과 (0.22ms, 33.7MB)
// 테스트 12 〉	통과 (0.22ms, 33.5MB)
// 테스트 13 〉	통과 (0.09ms, 33.6MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.10ms, 33.5MB)
// 테스트 16 〉	통과 (0.07ms, 33.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (0.07ms, 33.7MB)
// 테스트 19 〉	통과 (0.07ms, 33.5MB)
// 테스트 20 〉	통과 (0.27ms, 33.6MB)

function solution(n, words) {
  // 총 라운드 수만큼 반복하는 반복문 생성, 현재 라운드(1부터시작)를 저장해둘 변수 생성한다. 
  // 반복되는 단어를 찾기 위한 임시 배열 temp를 생성한다 
  // 각 라운드마다 words에서 n개만큼 slice한 배열의 요소를 반복하여 접근한다. 
  // 각각의 요소가 길이가 1이상인지, 중복이진 않은지, 이전 단어의 마지막 문자로 시작하는지를 조건으로 확인하여 탈락자를 가려낸다. 
  // 조건에 하나라도 부합하지 않는다면, [탈락한 사람의 번호(인덱스+1), 현재 라운드 수] 를 리턴한다. 
  // 탈락조건에 해당하지 않을 경우 다음 라운드로 넘어간다(현재 라운드+1) 
  // 끝까지 탈락자가 나오지 않는 경우 [0,0]을 리턴한다. 
  
  let currRound = 1; 
  let temp = [];
  let lastLetter = '';
  
  for(let i = 0; i < words.length; i+=n){
      let round = words.slice(i, i+n);
      
      for(let j = 0; j < round.length; j++){
          let len = round[j].length;
          
          if(len < 2 || (lastLetter !== '' && lastLetter !== round[j][0]) ||temp.includes(round[j]) ) return [j+1 , currRound];   
          else {
              temp.push(round[j]);
              lastLetter = round[j][len-1];
          }
      }
      
      currRound++; 
  }
  
  return [0,0]
}