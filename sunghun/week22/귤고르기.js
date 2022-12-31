// 정확성  테스트
// 테스트 1 〉	통과 (4.88ms, 38.3MB)
// 테스트 2 〉	통과 (5.34ms, 38.4MB)
// 테스트 3 〉	통과 (6.11ms, 38.5MB)
// 테스트 4 〉	통과 (6.29ms, 38.3MB)
// 테스트 5 〉	통과 (5.04ms, 38.2MB)
// 테스트 6 〉	통과 (4.64ms, 38.3MB)
// 테스트 7 〉	통과 (5.18ms, 38.4MB)
// 테스트 8 〉	통과 (6.36ms, 38.4MB)
// 테스트 9 〉	통과 (6.72ms, 38.3MB)
// 테스트 10 〉	통과 (6.07ms, 38.5MB)
// 테스트 11 〉	통과 (0.30ms, 33.6MB)
// 테스트 12 〉	통과 (0.08ms, 33.5MB)
// 테스트 13 〉	통과 (0.12ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.4MB)
// 테스트 15 〉	통과 (0.09ms, 33.5MB)
// 테스트 16 〉	통과 (0.07ms, 33.4MB)
// 테스트 17 〉	통과 (0.10ms, 33.5MB)
// 테스트 18 〉	통과 (0.11ms, 33.4MB)
// 테스트 19 〉	통과 (0.11ms, 33.4MB)
// 테스트 20 〉	통과 (0.10ms, 33.6MB)
// 테스트 21 〉	통과 (0.25ms, 33.5MB)
// 테스트 22 〉	통과 (0.40ms, 33.7MB)
// 테스트 23 〉	통과 (0.69ms, 33.7MB)
// 테스트 24 〉	통과 (0.75ms, 33.7MB)
// 테스트 25 〉	통과 (5.79ms, 38MB)
// 테스트 26 〉	통과 (16.86ms, 42.7MB)
// 테스트 27 〉	통과 (148.66ms, 69MB)
// 테스트 28 〉	통과 (68.20ms, 49.1MB)
// 테스트 29 〉	통과 (82.61ms, 54.4MB)
// 테스트 30 〉	통과 (117.98ms, 69MB)
// 테스트 31 〉	통과 (13.47ms, 38.7MB)
// 테스트 32 〉	통과 (15.43ms, 39.2MB)
// 테스트 33 〉	통과 (84.89ms, 59.2MB)
// 테스트 34 〉	통과 (73.31ms, 54.5MB)

function solution(k, tangerine) {
    

    let newSet = new Set(tangerine);
    let distinctArr = [...newSet]
    
    let data = {};
    
    for (let i = 0; i < distinctArr.length; i++){
        data[distinctArr[i]] = 0;
    }
    
    
    for (let i = 0; i < tangerine.length; i++){
        data[tangerine[i]] += 1;
    }
    
    
    let objValue = Object.values(data).sort((a,b) => a - b);
    
    let count = 0;
    
    while (k > 0){
        let amount = objValue.pop();
        k -= amount;
        count++;
    }
    
    return count;
}