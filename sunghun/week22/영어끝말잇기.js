// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.6MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.06ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.4MB)
// 테스트 19 〉	통과 (0.06ms, 33.4MB)
// 테스트 20 〉	통과 (0.17ms, 33.4MB)

function solution(n, words) {
    let stack = [words[0]];
    for (let i = 1; i < words.length; i++){
        if (words[i - 1][words[i - 1].length - 1] !== words[i][0]){
            return [i % n + 1, Math.ceil((i+1) / n)]
        }
        
        if (stack.includes(words[i])){
            return [i % n + 1, Math.ceil((i+1) / n)]
        }
        
        stack.push(words[i]);
    }
    return [0, 0]
}