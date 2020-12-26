/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let len=coins.length

    // dp[i] 表示组成数量为 i 的金币所需的最少硬币个数
    // dp[0]=0,dp[i]=dp[i-coin]+1
    let dp=[]
    dp[0]=0

    for(let i=1;i<=amount;i++){
        for(let j=0;j<len;j++){
            if(i-coins[j]<0)
                continue

            // 对于 coins=[2],amount=3,dp[1]是求不出来的，则求dp[3]=d[3-2]+1是行不通的    
            if(dp[i-coins[j]]===undefined)
                continue    
            dp[i]=dp[i]?Math.min(dp[i-coins[j]]+1,dp[i]):dp[i-coins[j]]+1
        }
    }
    return dp[amount]===undefined?-1:dp[amount]
};
