// 정확성  테스트
// 테스트 1 〉	통과 (34.58ms, 37.2MB)
// 테스트 2 〉	통과 (43.15ms, 36.8MB)
// 테스트 3 〉	통과 (33.36ms, 36.8MB)
// 테스트 4 〉	통과 (41.91ms, 37MB)
// 테스트 5 〉	통과 (2.65ms, 36.9MB)
// 테스트 6 〉	통과 (7.65ms, 37.3MB)
// 테스트 7 〉	통과 (3.56ms, 36.8MB)
// 테스트 8 〉	통과 (3.04ms, 37MB)
// 테스트 9 〉	통과 (8.66ms, 37MB)
// 테스트 10 〉	통과 (4.07ms, 36.8MB)
// 테스트 11 〉	통과 (86.57ms, 39.3MB)
// 테스트 12 〉	통과 (87.38ms, 39.3MB)
// 테스트 13 〉	통과 (83.27ms, 39.1MB)
// 테스트 14 〉	통과 (97.55ms, 39.4MB)
// 테스트 15 〉	통과 (105.34ms, 39.3MB)
// 테스트 16 〉	통과 (94.85ms, 39.1MB)
// 테스트 17 〉	실패 (런타임 에러)
// 테스트 18 〉	통과 (94.60ms, 38.9MB)
// 테스트 19 〉	통과 (4.35ms, 36.9MB)
// 테스트 20 〉	통과 (3.22ms, 36.9MB)
// 테스트 21 〉	통과 (0.05ms, 33.4MB)
// 테스트 22 〉	통과 (0.06ms, 33.5MB)
// 테스트 23 〉	통과 (0.07ms, 33.3MB)
// 테스트 24 〉	통과 (93.18ms, 39.2MB)
// 테스트 25 〉	통과 (92.46ms, 39.4MB)
// 테스트 26 〉	통과 (2.73ms, 36.8MB)
// 테스트 27 〉	통과 (3.00ms, 36.9MB)

function solution(number, limit, power) {
    let answer = [];
    
    for (let i = 2; i <= number; i++){
        let count = 0;
        if(Math.sqrt(i) % 1 === 0){
            count = 3;
        }else{
            count = 2;
        }
        
        for(let j = 2; j < Math.sqrt(i); j++){
            if(i % j === 0){
                count += 2;
            }
            
        }
        if (count > limit){
            answer.push(power)
        }else{
            answer.push(count)
        }
    }
    
    // return answer
    return answer.reduce((a,b)=>a+b)+1;
}