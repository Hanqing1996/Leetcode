/**
 * dp 思路1：dp[i]表示经过前i+1个房屋，小偷所能偷窃到的最大金额
 */
var rob = function(nums) {
    let len=nums.length
    if(len===0)
        return 0
    if(len===1)
        return nums[0]
    let dp=nums
    dp[1]=Math.max(dp[0],dp[1])
    let res=Math.max(dp[0],dp[1])
    for(let i=2;i<len;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
        res=Math.max(dp[i],res)
    }
    return res
};

/**
 * dp 思路2:dp[i]表示以nums[i]结尾的偷盗序列所能达到的最高金额
 */
var rob = function(nums) {
    let len=nums.length
    if(len===0)
        return 0
    if(len===1)
        return nums[0]
    if(len===2)
        return Math.max(nums[0],nums[1])
    if(len===3)
        return Math.max(nums[1],nums[0]+nums[2])    
    let dp=nums

    // dp[1]=nums[1]
    // dp[2]=dp[0]+nums[2]
    // dp[3]=max(dp[1]+nums[3],dp[0]+nums[3])
    // dp[4]=max(dp[2]+nums[4],dp[1]+nums[4])
    // dp[5]=max(dp[2]+nums[5],dp[3]+nums[5]),[a,b,c,d,e,f] dp[5]不需要考虑dp[1]+nums[i]的情况，因为 dp[3]一定大于等于dp[1]
    // ...
    // 对于dp[i]每次只回溯dp[i-2]+nums[i],dp[i-3]+nums[i]的结果，因为更往前面的情况，金额一定小于dp[i-2] or dp[i-3]
    dp[2]=dp[0]+nums[2]
    let res=dp[2]
    for(let i=3;i<len;i++){
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-3]+nums[i])
        res=Math.max(dp[i],res)
    }
    return res
};
