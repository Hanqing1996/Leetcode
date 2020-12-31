/**
 * dp思路1:dp[i]表示以nums[i]结尾的连续子数组最大和
 */
var maxSubArray = function(nums) {
    let len=nums.length
    let dp=nums
    if(len===0)
        return 0
    if(len===1)
        return nums[0]
    let res=dp[0]
    // dp[0]=nums[0]
    // dp[1]=max(dp[0]+nums[1],nums[1])
    // ...
    // dp[i]=max(dp[i-1]+nums[i],nums[i])
    for(let i=1;i<len;i++){
        dp[i]=Math.max(dp[i-1]+nums[i],nums[i])
        res=Math.max(res,dp[i])
    }
    return res
};
