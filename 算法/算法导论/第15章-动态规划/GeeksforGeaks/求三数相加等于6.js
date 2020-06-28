/**
 * Created by franck.lynn on 2018/5/30 23:32.
 */
function solve(n, dp) {
    if(n<0)
        return 0;
    if(n == 0)
        return 1;
    if(dp[n] != null)
        return dp[n];
    dp[n] = solve(n-1,dp) + solve(n-3,dp) + solve(n-5,dp);
    return dp[n]
}

function main() {
    var n = 6;
    dp = [];
    console.log(solve(n, dp));
}

main();







