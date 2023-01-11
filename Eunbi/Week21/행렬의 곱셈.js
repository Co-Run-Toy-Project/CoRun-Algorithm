// [PGS] 행렬의 곱셈

function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++) { //arr1고정 
        let temp = [];
        
        for(let x=0; x< arr1[0].length; x++) {
            let sum = 0;
            
            for(let y=0; y<arr2.length; y++) { // arr2 고정
                sum += arr1[i][y]*arr2[y][x];
            }
            
            temp.push(sum);
        }
        
        answer.push(temp)
    }
    
    return answer;
}