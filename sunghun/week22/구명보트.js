// 정확성  테스트
// 테스트 1 〉	통과 (2.56ms, 35.7MB)
// 테스트 2 〉	통과 (1.46ms, 33.6MB)
// 테스트 3 〉	통과 (2.67ms, 33.8MB)
// 테스트 4 〉	통과 (1.44ms, 33.8MB)
// 테스트 5 〉	통과 (0.93ms, 33.7MB)
// 테스트 6 〉	통과 (0.92ms, 33.7MB)
// 테스트 7 〉	통과 (0.84ms, 33.6MB)
// 테스트 8 〉	통과 (0.30ms, 33.4MB)
// 테스트 9 〉	통과 (0.28ms, 33.5MB)
// 테스트 10 〉	통과 (2.32ms, 33.8MB)
// 테스트 11 〉	통과 (2.31ms, 33.7MB)
// 테스트 12 〉	통과 (2.10ms, 33.7MB)
// 테스트 13 〉	통과 (1.89ms, 33.6MB)
// 테스트 14 〉	통과 (1.45ms, 33.6MB)
// 테스트 15 〉	통과 (0.42ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (35.99ms, 38.5MB)
// 테스트 2 〉	통과 (40.63ms, 38.1MB)
// 테스트 3 〉	통과 (36.40ms, 38.3MB)
// 테스트 4 〉	통과 (38.12ms, 38.2MB)
// 테스트 5 〉	통과 (43.62ms, 37.9MB)

function solution(people, limit) {
    // 구명보트 -> 최대 2명 탑승 가능
    // people : 탑승자 몸무게
    // limit : 구명보트의 무게제한
    
    let sortedPeople = people.sort((a,b)=> a - b)
    
    let stack = [];
    
    let count = 0;
    
    for (let i = 0; i < sortedPeople.length;){
        if (sortedPeople[i] <= limit && stack.length === 0){
            stack.push(sortedPeople[i]);
        }else if (sortedPeople[i] <= limit && stack.length === 1){
            let point = sortedPeople.pop();
            if (point + stack[0] <= limit){
                stack.pop();
                count++;
                i++;
            }else{
                count++;
            }
        }
    }

    
    return count;
}