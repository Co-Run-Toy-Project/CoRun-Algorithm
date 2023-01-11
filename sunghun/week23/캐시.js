// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 32.9MB)
// 테스트 7 〉	통과 (0.06ms, 32.9MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (0.07ms, 33.5MB)
// 테스트 10 〉	통과 (0.17ms, 33.6MB)
// 테스트 11 〉	통과 (35.29ms, 42MB)
// 테스트 12 〉	통과 (0.28ms, 33.7MB)
// 테스트 13 〉	통과 (0.19ms, 33.6MB)
// 테스트 14 〉	통과 (0.22ms, 33.6MB)
// 테스트 15 〉	통과 (0.24ms, 33.6MB)
// 테스트 16 〉	통과 (0.26ms, 33.6MB)
// 테스트 17 〉	통과 (0.07ms, 33.6MB)
// 테스트 18 〉	통과 (0.35ms, 33.6MB)
// 테스트 19 〉	통과 (0.39ms, 33.7MB)
// 테스트 20 〉	통과 (0.66ms, 33.6MB)

function solution(cacheSize, cities) {
    let queue = [];
    let runningTime = 0;
    
    
    if (cacheSize === 0){
        return 5 * cities.length;
    }
    
    cities.forEach(el => {
        let realEl = el.toLowerCase();
        let searchId = queue.indexOf(realEl);
        
        if (searchId !== -1){
            queue.splice(searchId,1);
            queue.push(realEl);
            runningTime += 1;
        }else{
            if (queue.length === cacheSize){
                queue.shift();
                queue.push(realEl);
                runningTime += 5;
            }else{
                queue.push(realEl);
                runningTime += 5;
            }
        }
    })
    return runningTime;
}