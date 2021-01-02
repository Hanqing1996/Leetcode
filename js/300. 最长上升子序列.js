/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * dp思路：dp[i]表示以nums[i]结尾的严格递增子序列最大长度
 * 思考dp[i],dp[j](j<i)之间的关系。
 */
var lengthOfLIS = function(nums) {
    let len=nums.length
    let dp=[]
    dp[0]=1
    let res=1

    for(let i=1;i<len;i++){
        // 初始化
        dp[i]=1
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j])
                dp[i]=Math.max(dp[i],dp[j]+1)
        }
        res=Math.max(res,dp[i])
    }
    return res
};
