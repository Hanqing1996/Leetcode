/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

    // 手续费是出售股票的时候再支付

    // dp[i][0]表示第i天不持有股票情况下，0到i天总计利润最大值,dp[i][1]表示第i天持有股票情况下，0到i天总计利润最大值
    let {length:n}=prices
    let dp=Array.from({length:n},()=>Array.from({length:2},()=>0))

    dp[0][1]=-prices[0]

    for(let i=1;i<n;i++){

        // 第i天持股，说明第i-1天持股或不持股
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])

        // 第i天不持股，说明第i-1天不持股或持股
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
    }
    return dp[n-1][0]
};
