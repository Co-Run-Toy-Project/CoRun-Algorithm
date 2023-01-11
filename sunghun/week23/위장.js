// 정확성  테스트
// 테스트 1 〉	통과 (0.21ms, 33.6MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 33.4MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.13ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (0.14ms, 33.4MB)
// 테스트 9 〉	통과 (0.07ms, 33.6MB)
// 테스트 10 〉	통과 (0.10ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.4MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (0.13ms, 33.4MB)
// 테스트 14 〉	통과 (0.08ms, 33.4MB)
// 테스트 15 〉	통과 (0.08ms, 33.5MB)
// 테스트 16 〉	통과 (0.07ms, 33.4MB)
// 테스트 17 〉	통과 (0.08ms, 33.4MB)
// 테스트 18 〉	통과 (0.10ms, 33.4MB)
// 테스트 19 〉	통과 (0.09ms, 33.4MB)
// 테스트 20 〉	통과 (0.10ms, 33.5MB)
// 테스트 21 〉	통과 (0.10ms, 33.4MB)
// 테스트 22 〉	통과 (0.07ms, 33.4MB)
// 테스트 23 〉	통과 (0.10ms, 33.4MB)
// 테스트 24 〉	통과 (0.08ms, 33.5MB)
// 테스트 25 〉	통과 (0.13ms, 33.4MB)
// 테스트 26 〉	통과 (0.19ms, 33.5MB)
// 테스트 27 〉	통과 (0.08ms, 33.4MB)
// 테스트 28 〉	통과 (0.09ms, 33.4MB)

function solution(clothes) {
    let defaultNum = clothes.length;
    let data = {};
    let count = 1;
    
    for (let el of clothes){
        if(data[el[1]] === undefined){
            data[el[1]] = [el[0]];
        }else{
            data[el[1]].push(el[0])
        }
    }
    
    let value = Object.values(data);

//     if (value.length > 1){
//         for (let i of value){
//             count *= i.length;
//         }
//     }else{
//         count = 0;
//     }
    
//     return defaultNum + count;
    for (let i of value){
        count *= (i.length + 1)
    }
    
    return count - 1;
}