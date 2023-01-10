// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.6MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.6MB)
// 테스트 7 〉	통과 (0.08ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.6MB)
// 테스트 10 〉	통과 (0.08ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.08ms, 33.5MB)
// 테스트 13 〉	통과 (0.08ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.6MB)
// 테스트 15 〉	통과 (0.09ms, 33.5MB)
// 테스트 16 〉	통과 (0.08ms, 33.6MB)
// 테스트 17 〉	통과 (0.08ms, 33.5MB)
// 테스트 18 〉	통과 (0.08ms, 33.5MB)
// 테스트 19 〉	통과 (0.08ms, 33.6MB)
// 테스트 20 〉	통과 (0.08ms, 33.5MB)
// 테스트 21 〉	통과 (0.11ms, 33.5MB)
// 테스트 22 〉	통과 (0.08ms, 33.6MB)
// 테스트 23 〉	통과 (0.12ms, 33.5MB)
// 테스트 24 〉	통과 (0.08ms, 33.6MB)
// 테스트 25 〉	통과 (0.09ms, 33.5MB)
// 테스트 26 〉	통과 (0.08ms, 33.5MB)
// 테스트 27 〉	통과 (0.08ms, 33.5MB)
// 테스트 28 〉	통과 (0.12ms, 33.6MB)
// 테스트 29 〉	통과 (0.08ms, 33.6MB)
// 테스트 30 〉	통과 (0.08ms, 33.7MB)
// 테스트 31 〉	통과 (0.08ms, 33.5MB)
// 테스트 32 〉	통과 (0.08ms, 33.5MB)
// 테스트 33 〉	통과 (0.10ms, 33.5MB)
// 테스트 34 〉	통과 (0.08ms, 33.5MB)
// 테스트 35 〉	통과 (0.08ms, 33.5MB)
// 테스트 36 〉	통과 (0.09ms, 33.5MB)
// 테스트 37 〉	통과 (0.08ms, 33.6MB)
// 테스트 38 〉	통과 (0.08ms, 33.7MB)
// 테스트 39 〉	통과 (0.10ms, 33.6MB)
// 테스트 40 〉	통과 (0.08ms, 33.5MB)

// function solution(word) {
//     let wordEl = ["A", "E", "I", "O", "U"];
//     let stack = [];
//     let count = 0;
//     function recursive(i){
//         while(stack.length < 5){
//             stack.push(wordEl[i]);
//             count++;
//             if (stack === [...word]){
//                 return count;
//             }
//         }
//         stack.pop();
//         recursive(count, i+1);
//     }
    
//     recursive(0);
    
    
// }
function sumSquare(idx) {
    let sum = 0;
    for(let i = idx; i>=0; i-=1) { 
        sum += 5**i;
    }
    return sum;
}

function solution(word) {
    let answer = 0;
    const aeiou = { 'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4 };

    [...word].forEach((w, idx) => {
        const val = aeiou[w];
        answer += val * sumSquare(4-idx) + 1;
    })


    return answer;
}