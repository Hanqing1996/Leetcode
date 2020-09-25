/**
 * @param {number[]} nums
 * @return {number}
 */

//  dp[i]表示以nums[i]结尾的连续子数组最大和；
var maxSubArray = function(nums) {
    let dp=nums
    if(nums.length==1)
        return nums[0]
    let maxSum=dp[0]
    for(let i=1;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1]+nums[i],dp[i])
        maxSum=Math.max(maxSum,dp[i])
    }
    return maxSum
};
