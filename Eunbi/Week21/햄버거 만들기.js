// [PGS] 햄버거 만들기

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (127.13ms, 62.6MB)
// 테스트 4 〉	통과 (234.04ms, 90.2MB)
// 테스트 5 〉	통과 (287.21ms, 96.3MB)
// 테스트 6 〉	통과 (145.28ms, 69.2MB)
// 테스트 7 〉	통과 (203.08ms, 82.7MB)
// 테스트 8 〉	통과 (130.91ms, 69.8MB)
// 테스트 9 〉	통과 (149.36ms, 69.1MB)
// 테스트 10 〉	통과 (5.64ms, 37.8MB)
// 테스트 11 〉	통과 (65.21ms, 60.1MB)
// 테스트 12 〉	통과 (355.03ms, 103MB)
// 테스트 13 〉	통과 (0.09ms, 33.6MB)
// 테스트 14 〉	통과 (0.09ms, 33.6MB)
// 테스트 15 〉	통과 (0.09ms, 33.5MB)
// 테스트 16 〉	통과 (0.10ms, 33.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (0.07ms, 33.5MB)

function solution(ingredient){
  let count = 0; 
  const makeBurger = [];

  // 파라미터로 받는 배열의 요소를 반복하여 돈다
  // 요소하나하나를 makeBurger에 넣는다 
  // makeBurger의 길이가 4가 되면 뒤에서부터 4개의 요소가 '1231'과 같은지 비교한다
  // 같으면 count 증감, 뒤에서 4개를 빼준다. 
  //같지 않으면 다시 반복한다. 
  
  ingredient.map(el => {
      makeBurger.push(el); 
      
      if(makeBurger.length >= 4){
          let Burger = makeBurger.slice(makeBurger.length-4);
          
          if(Burger.join('') === '1231'){
              count++;
              // makeBurger = makeBurger.slice(0, makeBurger.length-4);
              makeBurger.pop();
              makeBurger.pop();
              makeBurger.pop();
              makeBurger.pop();
              
          }
      }
  })
  
  return count;
}

// function solution(ingredient) {
//     const regex = /'1231'/;
//     let count = 0; 
  
//     let str = ingredient.join('');
  
//     while(str.includes('1231')){
//      str.replace(regex, '');
//     count++;
//     }
  
//     return count;
// }