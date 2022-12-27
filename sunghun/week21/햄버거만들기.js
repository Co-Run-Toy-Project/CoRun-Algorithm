// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (144.77ms, 46.9MB)
// 테스트 4 〉	통과 (770.98ms, 59.1MB)
// 테스트 5 〉	통과 (1271.51ms, 64MB)
// 테스트 6 〉	통과 (377.78ms, 47.2MB)
// 테스트 7 〉	통과 (622.46ms, 56.9MB)
// 테스트 8 〉	통과 (406.18ms, 48MB)
// 테스트 9 〉	통과 (224.04ms, 49.1MB)
// 테스트 10 〉	통과 (0.54ms, 33.7MB)
// 테스트 11 〉	통과 (108.73ms, 47.5MB)
// 테스트 12 〉	통과 (1932.95ms, 69.7MB)
// 테스트 13 〉	통과 (0.04ms, 33.5MB)
// 테스트 14 〉	통과 (0.04ms, 33.4MB)
// 테스트 15 〉	통과 (0.04ms, 33.5MB)
// 테스트 16 〉	통과 (0.04ms, 33.4MB)
// 테스트 17 〉	통과 (0.04ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.5MB)

function solution(ingredient) {
    //1:빵, 2:야채, 3:고기
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length;){
        if (ingredient[i] === 1){
            if(ingredient[i+1] === 2 && ingredient[i+2] === 3 && ingredient[i+3] === 1){
                answer++;
                ingredient.splice(i,4);
                i-=3;
            }else{
                i++;
            }
        }else{
            i++;
        }
    }
    
    return answer;
    
}