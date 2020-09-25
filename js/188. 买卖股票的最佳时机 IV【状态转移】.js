/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

    // 思路类似 123，只是 2 泛化成了 k
    let {length:n}=prices
    // dp[i][j][0]表示从第0到i天交易了j次，且第i天不持有股票的最大利润, dp[i][j][1]表示从第0到i天交易了j次，且第i天持有股票的最大利润
    let limition=n/2

    // 按照评论区的意思，K 超过 prices 数组长度一半时，改用贪心来处理
    if(k>=limition){
        let maxPro=0;
        let pre=prices[0];
            
        for(let i=1;i<n;i++){
            if(prices[i]>pre){
                let profit=prices[i]-pre;
                maxPro+=profit;
                pre=prices[i];
            }
            pre=prices[i];
        }
        return maxPro;
    }

    let dp=Array.from({length:n},()=>Array.from({length:k+1},()=>Array.from({length:2},()=>0))) 

    for(let j=0;j<k+1;j++){
        dp[0][j][0]=0
        dp[0][j][1]=-prices[0]
    }

    for(let i=1;i<n;i++){
        for(let j=0;j<k+1;j++){
            if(j==0){
                dp[i][0][0]=dp[i-1][0][0]
                dp[i][0][1]=Math.max(dp[i-1][0][1],dp[i-1][0][0]-prices[i])
            }else{
                dp[i][j][0]=Math.max(dp[i-1][j-1][1]+prices[i],dp[i-1][j][0])     
                dp[i][j][1]=Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i])
            }
        }
    }


    let MAX=-1
    for(let i=0;i<k+1;i++){
        MAX=Math.max(MAX,dp[n-1][i][0])
    }
    return MAX
};



