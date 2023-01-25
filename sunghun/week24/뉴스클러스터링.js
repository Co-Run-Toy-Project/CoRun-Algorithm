// 정확성  테스트
// 테스트 1 〉	통과 (0.14ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.6MB)
// 테스트 4 〉	통과 (0.99ms, 33.7MB)
// 테스트 5 〉	통과 (0.30ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.6MB)
// 테스트 7 〉	통과 (0.35ms, 33.4MB)
// 테스트 8 〉	통과 (0.12ms, 33.5MB)
// 테스트 9 〉	통과 (0.34ms, 33.5MB)
// 테스트 10 〉	통과 (0.40ms, 33.4MB)
// 테스트 11 〉	통과 (0.46ms, 33.6MB)
// 테스트 12 〉	통과 (0.11ms, 33.4MB)
// 테스트 13 〉	통과 (0.31ms, 33.5MB)

function solution(str1, str2) {
    //자카드 유사도 = 교집합 / 합집합
    // 두 글자 씩 끊는다.
    // 영문자로 된 글자 쌍만 유효
    // 대소문자 구분 X
    let char = "";
    let char2 = "";
    let str1Stack = [];
    let str2Stack = [];
    
    for (let i of str1){
        if ((i.charCodeAt() >= 65 && i.charCodeAt() <= 90) || (i.charCodeAt() >= 97 && i.charCodeAt() <= 122)){
            char += i.toLowerCase();        
        }else{
            char = "";
        }
        if (char.length === 2){
            str1Stack.push(char);
            char = char[char.length - 1];
        }
    }
    
    for (let i of str2){
        if ((i.charCodeAt() >= 65 && i.charCodeAt() <= 90) || (i.charCodeAt() >= 97 && i.charCodeAt() <= 122)){
            char2 += i.toLowerCase();        
        }else {
            char2 = "";
        }
        if (char2.length === 2){
            str2Stack.push(char2);
            char2 = char2[char2.length - 1];
        }
    }
    
    
    let union = [];
    let intersection = [];

    for(let i = 0 ; i < str1Stack.length ; i ++) {
       if(str2Stack.includes(str1Stack[i])) {
           const idx = str2Stack.indexOf(str1Stack[i]);
           str2Stack.splice(idx,1);
           intersection.push(str1Stack[i]);
       } else {
           union.push(str1Stack[i])
       }
   }

    str2Stack.forEach((e) => union.push(e));

    
    if (union.length + intersection.length === 0){
        return 65536;
    }else {
        return Math.floor((intersection.length / (intersection.length+union.length)) * 65536)
    }
    
}