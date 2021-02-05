/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {


    // 此题不符合最优子结构，比如对应 [2,-5,-2,-4] ,如果用 dp[i] 表示以 nums[i] 结尾的子数组最大乘积。那么 dp[2]=10，但是 dp[3]=8，无法由 dp[2]得到

    // 解决方法是维护最小数组，将 dp2[i]*nums[i] 纳入 dp[i] 的生成过程
    
    // dp[i] 表示以 nums[i] 结尾的子数组最大乘积
    // dp2[i] 表示以 nums[i] 结尾的子数组最小乘积
    let dp=JSON.parse(JSON.stringify(nums))
    let dp2=JSON.parse(JSON.stringify(nums))
    
    let MAX=dp[0]
    for(let i=1;i<nums.length;i++){
        // 维护最大数组
        dp[i]=Math.max(dp2[i-1]*nums[i],Math.max(dp[i-1]*nums[i],dp[i]))
        // 维护最小数组
        dp2[i]=Math.min(dp[i-1]*nums[i],Math.min(dp2[i-1]*nums[i],dp2[i]))
        MAX=Math.max(MAX,dp[i])
    }
    return MAX
};


// 简化版
var maxProduct = function(nums) {


    let len=nums.length
    let minValue=1,maxValue=1
    let res=nums[0]
    for(let i=0;i<len;i++){
        if(nums[i]<0){
            ;[minValue,maxValue]=[maxValue,minValue]
        }
        minValue=Math.min(minValue*nums[i],nums[i])
        maxValue=Math.max(maxValue*nums[i],nums[i])

        res=Math.max(res,maxValue)
    }
    return res

};
