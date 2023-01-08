function solution(n) {
    // 1 or 2칸
    // n : 멀리뛰기에 사용될 칸의 수 
    // 경우의 수에 1234567 나눈 나머지 리턴
    const dp = [0, 1, 2];
    for (let i = 3; i <=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    return dp[n]
}