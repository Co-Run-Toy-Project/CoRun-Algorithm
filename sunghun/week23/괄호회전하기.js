// 정확성  테스트
// 테스트 1 〉	통과 (5.53ms, 37.2MB)
// 테스트 2 〉	통과 (4.50ms, 37.1MB)
// 테스트 3 〉	통과 (4.43ms, 37.2MB)
// 테스트 4 〉	통과 (4.81ms, 37.3MB)
// 테스트 5 〉	통과 (9.96ms, 37.2MB)
// 테스트 6 〉	통과 (5.31ms, 37MB)
// 테스트 7 〉	통과 (6.04ms, 37.3MB)
// 테스트 8 〉	통과 (10.22ms, 37.3MB)
// 테스트 9 〉	통과 (12.07ms, 37.2MB)
// 테스트 10 〉	통과 (13.89ms, 37.6MB)
// 테스트 11 〉	통과 (19.40ms, 37.4MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)
// 테스트 13 〉	통과 (0.08ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.6MB)

function checkFunc(s) {
    let stack = [];
    
    if (s.length % 2 !== 0){
        return false;
    }
    for (let letter of s){
        if (letter === "(" || letter === "[" || letter === "{"){
            stack.push(letter);
        }else{
            let lastLetter = stack.pop();
            if (lastLetter === "(" && letter === ")"){
                continue;
            }else if (lastLetter === "[" && letter === "]"){
                continue;
            }else if (lastLetter === "{" && letter === "}"){
                continue;
            }else {
                return false;
            }
        }
    }
    return true;
    
}

function solution(s) {
    let res = 0;
    let count = s.length;
    let data = [...s];

    while(count > 0){
        if(checkFunc(data)){
            res++;
        }
        
        count--;
        let endEl = data.shift();
        data.push(endEl);
    }
    
    
    return res;
}