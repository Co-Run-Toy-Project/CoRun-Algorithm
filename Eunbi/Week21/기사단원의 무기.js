//[PGS] 기사단원의 무기, +5
// 테스트 1 〉	통과 (8.94ms, 37.3MB)
// 테스트 2 〉	통과 (2.78ms, 37MB)
// 테스트 3 〉	통과 (2.35ms, 37MB)
// 테스트 4 〉	통과 (2.98ms, 37.1MB)
// 테스트 5 〉	통과 (1.94ms, 37MB)
// 테스트 6 〉	통과 (9.40ms, 37.3MB)
// 테스트 7 〉	통과 (3.33ms, 37.1MB)
// 테스트 8 〉	통과 (3.98ms, 37.2MB)
// 테스트 9 〉	통과 (6.08ms, 37.3MB)
// 테스트 10 〉	통과 (2.93ms, 37.2MB)
// 테스트 11 〉	통과 (97.22ms, 40.2MB)
// 테스트 12 〉	통과 (92.19ms, 40.1MB)
// 테스트 13 〉	통과 (131.78ms, 40.1MB)
// 테스트 14 〉	통과 (96.86ms, 40.2MB)
// 테스트 15 〉	통과 (95.93ms, 40.1MB)
// 테스트 16 〉	통과 (125.39ms, 40.2MB)
// 테스트 17 〉	통과 (0.09ms, 33.5MB)
// 테스트 18 〉	통과 (99.63ms, 40.1MB)
// 테스트 19 〉	통과 (2.77ms, 37MB)
// 테스트 20 〉	통과 (3.80ms, 37MB)
// 테스트 21 〉	통과 (0.09ms, 33.4MB)
// 테스트 22 〉	통과 (0.10ms, 33.4MB)
// 테스트 23 〉	통과 (0.18ms, 33.7MB)
// 테스트 24 〉	통과 (99.26ms, 40.1MB)
// 테스트 25 〉	통과 (105.50ms, 40.1MB)
// 테스트 26 〉	통과 (1.74ms, 37MB)
// 테스트 27 〉	통과 (1.78ms, 36.9MB)

const getDivisor = (num) => { // 약수 구하는 함수
  if(num <= 3){
      return 2; 
  }else{
      let sqrt = Math.floor(Math.sqrt(num));
      let count = 0; 
      
      for(let i = 1; i <= sqrt; i++){
          let share = Math.floor(num / i);
          
          if(num % i === 0 && share !== i)  count+=2;
          else if(num % i === 0 && share === i) count++; // 나누는 수와 몫이 같은 수인 경우 
      }
      
      return count; 
  }
}

function solution(number, limit, power) {
  let divisor = [1] // 1의 약수는 1뿐이므로 미리 고정시켜둠 
  
  // 각 기사단원의 최대 공격력 구하기
  for(let i = 2; i <= number; i++){
      divisor.push(getDivisor(i));
  }
  
  let finalPower = divisor.map(el => {
      if(el > limit ) return power; // 제한수치를 초과한 경우 
      else return el;
  })
  
  return finalPower.reduce((prev,curr) => prev + curr, 0);
  
  
}