/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * dp思路1：dp[i]表示以nums[i]结尾的偷盗序列所能达到的最高金额
 * 两个dp,一个从0到n-1,另一个从1到n,最后取两个dp中的最大值
 */
var rob = function(nums) {
    let len=nums.length
    if(len===1)
        return nums[0]
    let nums1=nums.slice(0,len-1)
    let nums2=nums.slice(1)
    let priority1=getMaxPriority(nums1)
    let priority2=nums2.length?getMaxPriority(nums2):0
    return Math.max(priority1,priority2)
};

function getMaxPriority(nums){
    let len=nums.length
    let dp=[]
    dp[0]=nums[0]
    if(len===1)
        return dp[0]
    dp[1]=nums[1]
    if(len===2)
        return Math.max(dp[0],dp[1])
    dp[2]=nums[0]+nums[2]
    if(len===3)
        return Math.max(dp[2],dp[1])
    let res=Math.max(dp[2],dp[1])
    for(let i=3;i<len;i++){
        dp[i]=Math.max(dp[i-2],dp[i-3])+nums[i]
        res=Math.max(res,dp[i])
    }
    return res
}
