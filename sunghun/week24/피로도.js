
// 정확성  테스트
// 테스트 1 〉	통과 (0.20ms, 33.5MB)
// 테스트 2 〉	통과 (0.17ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.26ms, 33.6MB)
// 테스트 5 〉	통과 (0.53ms, 33.5MB)
// 테스트 6 〉	통과 (1.74ms, 36.5MB)
// 테스트 7 〉	통과 (5.37ms, 37.1MB)
// 테스트 8 〉	통과 (6.45ms, 38.2MB)
// 테스트 9 〉	통과 (0.17ms, 33.5MB)
// 테스트 10 〉	통과 (0.54ms, 33.5MB)
// 테스트 11 〉	통과 (0.18ms, 33.4MB)
// 테스트 12 〉	통과 (1.52ms, 36.5MB)
// 테스트 13 〉	통과 (0.27ms, 33.4MB)
// 테스트 14 〉	통과 (0.20ms, 33.4MB)
// 테스트 15 〉	통과 (0.23ms, 33.5MB)
// 테스트 16 〉	통과 (0.18ms, 33.4MB)
// 테스트 17 〉	통과 (0.23ms, 33.4MB)
// 테스트 18 〉	통과 (0.17ms, 33.5MB)
// 테스트 19 〉	통과 (0.19ms, 33.4MB)
function solution(k, dungeons) {
    // 최소 필요 피로도 : 각 던전마다 탐험을 시작하기 위해 필요한 최소한의 피로도
    // 소모 피로도 : 던전탐험을 마쳤을 때 소모
    
    // output : 유저가 탐험할 수 있는 최대 던전 수
    
    // 던전의 개수 1~8 -> 완전탐색
    let answer = [];
    let visited = Array(dungeons.length).fill(false);
    
    const dfs = (currentK, count) => {
        answer.push(count);
        
        for (let i = 0; i < dungeons.length; i++){
            if (!visited[i] && currentK >= dungeons[i][0]){
                visited[i] = true;
                dfs(currentK - dungeons[i][1], count+1);
                visited[i] = false;
            }
        }
    }
    
    
    
    dfs(k, 0);
    
    return Math.max(...answer);
}