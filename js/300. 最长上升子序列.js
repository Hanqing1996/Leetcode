/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const length=nums.length
    // dp[i]表示以nums[i]结尾的子序列最大长度
    let dp=Array.from({length}).map(item=>1)
    if(length==0)
        return 0
    let maxLength=1
    for(let i=0;i<dp.length;i++){
        for(let j=0;j<i;j++){

            if(j>0&&nums[j]<nums[j-1]&&nums[j]>nums[i])
                continue

            if(nums[j]<nums[i]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }    
        maxLength=Math.max(maxLength,dp[i])
    }
    return maxLength;
};
