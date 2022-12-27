//[PGS] 귤 고르기 , +4

// 테스트 1 〉	통과 (13.73ms, 39.8MB)
// 테스트 2 〉	통과 (13.48ms, 39.7MB)
// 테스트 3 〉	통과 (11.81ms, 39.6MB)
// 테스트 4 〉	통과 (7.99ms, 38.2MB)
// 테스트 5 〉	통과 (10.61ms, 39.5MB)
// 테스트 6 〉	통과 (11.12ms, 39.7MB)
// 테스트 7 〉	통과 (10.71ms, 39.8MB)
// 테스트 8 〉	통과 (13.64ms, 39.6MB)
// 테스트 9 〉	통과 (10.99ms, 39.7MB)
// 테스트 10 〉	통과 (10.44ms, 39.7MB)
// 테스트 11 〉	통과 (5.95ms, 33.6MB)
// 테스트 12 〉	통과 (3.01ms, 33.7MB)
// 테스트 13 〉	통과 (3.15ms, 33.5MB)
// 테스트 14 〉	통과 (3.05ms, 33.6MB)
// 테스트 15 〉	통과 (3.16ms, 33.6MB)
// 테스트 16 〉	통과 (2.97ms, 33.5MB)
// 테스트 17 〉	통과 (3.19ms, 33.5MB)
// 테스트 18 〉	통과 (3.10ms, 33.5MB)
// 테스트 19 〉	통과 (3.01ms, 33.5MB)
// 테스트 20 〉	통과 (3.27ms, 33.6MB)
// 테스트 21 〉	통과 (5.35ms, 34MB)
// 테스트 22 〉	통과 (6.57ms, 36.8MB)
// 테스트 23 〉	통과 (6.94ms, 36.7MB)
// 테스트 24 〉	통과 (8.12ms, 36.8MB)
// 테스트 25 〉	통과 (19.38ms, 38.3MB)
// 테스트 26 〉	통과 (27.80ms, 46.9MB)
// 테스트 27 〉	통과 (134.01ms, 76.2MB)
// 테스트 28 〉	통과 (68.11ms, 56.8MB)
// 테스트 29 〉	통과 (106.87ms, 64.4MB)
// 테스트 30 〉	통과 (136.57ms, 77.6MB)
// 테스트 31 〉	통과 (19.67ms, 38.8MB)
// 테스트 32 〉	통과 (39.89ms, 40.5MB)
// 테스트 33 〉	통과 (105.46ms, 63.9MB)
// 테스트 34 〉	통과 (104.71ms, 64.2MB)

function solution(k, tangerine) {
    // 귤의 종류를 담을 객체 생성
    // 수확한 귤이 담긴 배열을 돌며 객체에 개수 저장 
    // 객체를 돌며 수가 많은 번호대로 k만큼 뽑는다. 
    let result = 0; 
    let amount = {};
    
    tangerine.map(el => {
        if(amount[el]) amount[el]++; 
        else amount[el] = 1; 
    })
    
    let sortedAmount = Object.entries(amount).sort(([, value1], [, value2]) => value2 - value1);

    let temp = 0; 
    
    for(let i = 0; i < sortedAmount.length; i++){
        if(temp === k || temp > k){
            return result;
        }
        else {
            temp += sortedAmount[i][1];
            result++; 
        }
       
    }
    
    return result;
}
