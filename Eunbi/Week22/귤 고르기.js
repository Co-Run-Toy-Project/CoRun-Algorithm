//[PGS] 귤 고르기 , +4
function solution(k, tangerine) {
    // 귤의 종류를 담을 객체 생성
    // 수확한 귤이 담긴 배열을 돌며 객체에 개수 저장 
    // 객체를 돌며 수가 많은 번호대로 k만큼 뽑는다. 
    let result = 0; 
    let amount = {};
    
    tangerine.map(el => {
        if(amount[el]) amount[el]++; 
        else amount[el] = 1; 
    })
    
    let sortedAmount = Object.entries(amount).sort(([, value1], [, value2]) => value2 - value1);
    // console.log(amount)
    
    let temp = 0; 
    
    console.log(sortedAmount)
    for(let i = 0; i < sortedAmount.length; i++){
        let sum = temp + sortedAmount[i][1];
        // console.log(result)
        if(temp === k || temp > k){
            return result;
        }
        else {
            temp += sortedAmount[i][1];
            result++; 
        }
        // else if(sum <= k){
        //     temp += sortedAmount[i][1];
        //     result++; 
        // }
    }
    
    return result;
}