/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 首先要知道一点，想要利润最大，最后一天就不可以处于持股/买入状态（起码比之前不买入该股花销更大）

    // dp[i][j] 表示第i天处于j状态下可以获得的最大利润
    // 0:买入
    // 1:卖出
    // 2:冷冻期
    // 3:持股（非买入）
    // 4:不持股（非卖出）

    let {length}=prices
    if(length<2) return 0
    let dp=Array.from({length},()=>Array.from({length:5},()=>0))

    dp[0][0]=-prices[0]
    dp[0][3]=-prices[0]

    for(let i=1;i<prices.length;i++){

        // 第i天买入，则第i-1天 不持股、冷冻期
        dp[i][0]=Math.max(dp[i-1][4],dp[i-1][2])-prices[i]

        // 第i天卖出，则第i-1天 买入、持股
        dp[i][1]=Math.max(dp[i-1][0],dp[i-1][3])+prices[i]

        // 第i天冷冻期，则第i-1天 卖出
        dp[i][2]=dp[i-1][1]

        // 第i天持股（非买入），则第i-1天 买入、持股（非买入）
        dp[i][3]=Math.max(dp[i-1][0],dp[i-1][3])

        // 第i天不持股（非卖出），则第i-1天 冷冻期、不持股（非卖出）
        dp[i][4]=Math.max(dp[i-1][2],dp[i-1][4])
    }
    return Math.max(Math.max(dp[length-1][1],dp[length-1][2]),dp[length-1][4])
};




// 使用滚动数组优化
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 首先要知道一点，想要利润最大，最后一天就不可以处于持股/买入状态（起码比之前不买入该股花销更大）

    // dp[i][j] 表示第i天处于j状态下可以获得的最大利润
    // 0:买入
    // 1:卖出
    // 2:冷冻期
    // 3:持股（非买入）
    // 4:不持股（非卖出）

    let {length}=prices
    if(length<2) return 0
    let dp=Array(5).fill(0)  

    dp[0]=-prices[0]
    dp[3]=-prices[0]

    let preStock=dp[0]
    let preStock1=dp[1]
    let preStock2=dp[2]
    let preStock3=dp[3]
    let preStock4=dp[4]
    
    for(let i=1;i<prices.length;i++){

        // 第i天买入，则第i-1天 不持股、冷冻期
        dp[0]=Math.max(preStock4,preStock2)-prices[i]

        // 第i天卖出，则第i-1天 买入、持股
        dp[1]=Math.max(preStock,preStock3)+prices[i]

        // 第i天冷冻期，则第i-1天 卖出
        dp[2]=preStock1

        // 第i天持股（非买入），则第i-1天 买入、持股（非买入）
        dp[3]=Math.max(preStock,preStock3)

        // 第i天不持股（非卖出），则第i-1天 冷冻期、不持股（非卖出）
        dp[4]=Math.max(preStock2,preStock4)

        preStock=dp[0]
        preStock1=dp[1]
        preStock2=dp[2]
        preStock3=dp[3]
        preStock4=dp[4]
    }
    return Math.max(Math.max(dp[1],dp[2]),dp[4])
};



