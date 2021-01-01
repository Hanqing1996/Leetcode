/**
 * @param {number[]} prices
 * @return {number}
 */


/**
 * 回溯思路
 * [7,1,5,3,6,4]
 * 求其长度为2的子集,要求子集第二个元素大于第一个
 */
var maxProfit = function(prices) {
    let len=prices.length
    let ans=[]
    let res=0
    const dfs=function(index,depth){
        if(depth===2){
            let current=ans[1]-ans[0]
            res=Math.max(res,current)
            return
        }
        for(let i=index;i<len;i++){
            if(depth===1&&prices[i]<=ans[depth-1])
                continue
            ans[depth]=prices[i]
            dfs(i+1,depth+1)
        }
    }
    dfs(0,0)
    return res
};


/**
 * dp思路1：dp[i]表示以nums[i]价格售出所能获得的最大利润
 * 遍历prices,一路记录当前最小值,再对比nums[i]和最小值的差即可
 */
var maxProfit = function(prices) {
    let len=prices.length
    let dp=[]
    dp[0]=0
    let minPrice=prices[0]
    let minIndex=0
    let res=0;

    for(let i=1;i<len;i++){
        dp[i]=(prices[i]-minPrice)>0?(prices[i]-minPrice):0
        res=Math.max(res,dp[i])
        if(prices[i]<minPrice){
            minIndex=i
            minPrice=prices[i]
        }
    }
    return res
};




/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * dp思路2:前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
 */
var maxProfit = function(prices) {
    // dp[i] 表示前i天的最大收益
    let dp=[]
    dp[0]=0
    let len=prices.length
    let minIndex=0
    let res=0
    for(let i=1;i<len;i++){
        dp[i]=Math.max(dp[i-1],prices[i]-prices[minIndex])
        res=Math.max(res,dp[i])
        prices[i]<prices[minIndex]&&(minIndex=i)
    }
    return res
};

