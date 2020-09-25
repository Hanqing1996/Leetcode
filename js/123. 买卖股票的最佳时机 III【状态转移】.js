/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // 此题思路与309相似，关键是明确状态转移路径

    // dp[i][j][0]表示从第0到i天交易了j次，且第i天不持有股票的最大利润, dp[i][j][1]表示从第0到i天交易了j次，且第i天持有股票的最大利润
    let {length:n}=prices
    let dp=Array.from({length:n},()=>Array.from({length:3},()=>Array.from({length:2},()=>0))) 


    // 第0天处理
    dp[0][0][0]=0
    dp[0][0][1]=-prices[0]

    dp[0][1][0]=0
    dp[0][1][1]=-prices[0]
    
    dp[0][2][0]=0
    dp[0][2][1]=-prices[0]
    

    for(let i=1;i<n;i++){

        // 到第i天交易了0次且不持有股票，说明第i-1天:交易了0次且不持有股票
        dp[i][0][0]=dp[i-1][0][0]
        // 到第i天交易了0次且持有股票，说明第i-1天:交易了0次且持有股票、交易了0次且不持有股票
        dp[i][0][1]=Math.max(dp[i-1][0][1],dp[i-1][0][0]-prices[i])

        // 到第i天交易了1次且不持有股票，说明第i-1天:交易了0次且持有股票,交易了1次且不持有股票
        dp[i][1][0]=Math.max(dp[i-1][0][1]+prices[i],dp[i-1][1][0])     
        // 到第i天交易了1次且持有股票，说明第i-1天:交易了1次且持有股票,交易了1次且不持有股票   
        dp[i][1][1]=Math.max(dp[i-1][1][1],dp[i-1][1][0]-prices[i])
    
        // 到第i天交易了2次且不持有股票，说明第i-1天:交易了1次且持有股票，交易了2次且不持有股票
        dp[i][2][0]=Math.max(dp[i-1][1][1]+prices[i],dp[i-1][2][0]) 
        // 到第i天交易了2次且持有股票，说明第i-1天:交易了2次且持有股票,交易了2次且不持有股票   
        dp[i][2][1]=dp[i-1][2][1]
    }

    return Math.max(dp[n-1][0][0],Math.max(dp[n-1][1][0],dp[n-1][2][0]))

};


